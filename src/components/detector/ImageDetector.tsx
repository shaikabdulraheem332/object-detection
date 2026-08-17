'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Upload,
  Image as ImageIcon,
  Sparkles,
  RefreshCw,
  Zap,
  Download,
  AlertCircle,
  Cpu,
  Box,
} from 'lucide-react';
import { detectObjectsInElement } from '@/lib/tfjs';
import { enhancePrediction, assignInstanceNumbers } from '@/lib/analyzer';
import { analyzeWithGeminiClientSide } from '@/lib/geminiClient';
import { DetectedObject, DetectionResult, DetectionSettings } from '@/lib/types';
import { soundManager } from '@/lib/audio';
import DetectionCardGrid from '../results/DetectionCardGrid';

interface ImageDetectorProps {
  settings: DetectionSettings;
  onSaveToHistory: (result: DetectionResult) => void;
}

export default function ImageDetector({ settings, onSaveToHistory }: ImageDetectorProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([]);
  const [inferenceTime, setInferenceTime] = useState<number>(0);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [hoveredObjId, setHoveredObjId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedSampleHint, setSelectedSampleHint] = useState<string | null>(null);

  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Non-Living Physical Object sample scenes
  const sampleImages = [
    { label: 'Desk Setup (Laptop, Phone, Chair)', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80', hint: 'laptop desk' },
    { label: 'Workstation (Monitor, Keyboard, Mouse)', url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80', hint: 'monitor keyboard' },
    { label: 'Stationery & Notebook', url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80', hint: 'notebook pen' },
    { label: 'Mobile Phone & Headphones', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80', hint: 'headphones phone' },
    { label: 'Water Bottle & Mug', url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80', hint: 'bottle mug' },
    { label: 'Backpack & Travel Gear', url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80', hint: 'backpack gear' },
  ];

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload a valid image file (PNG, JPG, WEBP, etc.).');
      return;
    }

    setSelectedSampleHint(null);
    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImageSrc(e.target.result as string);
        if (settings.soundEnabled) soundManager.playShutterSound();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    setSelectedSampleHint(null);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleProcessImage = async () => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas || !imageSrc) return;

    setIsProcessing(true);
    const startTime = performance.now();

    try {
      canvas.width = img.naturalWidth || img.clientWidth || 640;
      canvas.height = img.naturalHeight || img.clientHeight || 480;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      // Model detection on canvas element
      const rawPredictions = await detectObjectsInElement(canvas, settings.confidenceThreshold, ctx);
      const duration = Math.round(performance.now() - startTime);
      setInferenceTime(duration);

      let enhanced: DetectedObject[] = rawPredictions
        .map((pred, idx) => enhancePrediction(pred, idx, ctx, canvas.width, canvas.height, selectedSampleHint))
        .filter((item): item is DetectedObject => item !== null);

      try {
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            imageBase64: imageSrc,
            tfjsObjects: enhanced,
            sampleHint: selectedSampleHint,
            customApiKey: settings.customApiKey,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.enhancedObjects && data.enhancedObjects.length > 0) {
            enhanced = data.enhancedObjects;
          }
        } else {
          const clientResults = await analyzeWithGeminiClientSide(
            imageSrc,
            enhanced,
            selectedSampleHint,
            settings.customApiKey
          );
          if (clientResults && clientResults.length > 0) {
            enhanced = clientResults;
          }
        }
      } catch (apiError) {
        const clientResults = await analyzeWithGeminiClientSide(
          imageSrc,
          enhanced,
          selectedSampleHint,
          settings.customApiKey
        );
        if (clientResults && clientResults.length > 0) {
          enhanced = clientResults;
        }
      }

      // Filter living items & assign multi-object instance labels (#1, #2...)
      const finalObjects = assignInstanceNumbers(enhanced);
      setDetectedObjects(finalObjects);
      drawBoundingBoxes(canvas, finalObjects, hoveredObjId);

      if (settings.soundEnabled && finalObjects.length > 0) {
        soundManager.playDetectionPing();
      }

      const resultItem: DetectionResult = {
        id: `img_${Date.now()}`,
        timestamp: Date.now(),
        sourceType: 'image',
        thumbnailUrl: imageSrc,
        objects: finalObjects,
        inferenceTimeMs: duration,
        totalObjectsCount: finalObjects.length,
      };

      onSaveToHistory(resultItem);
    } catch (err) {
      console.error('Image processing error', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const drawBoundingBoxes = (
    canvas: HTMLCanvasElement,
    objects: DetectedObject[],
    highlightId: string | null
  ) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach((obj) => {
      const [x, y, w, h] = obj.bbox;
      const isHighlight = highlightId === obj.id;
      const strokeColor = isHighlight ? '#ff007f' : '#00f3ff';

      ctx.shadowColor = strokeColor;
      ctx.shadowBlur = 12;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 6);
      ctx.stroke();

      const labelText = `${obj.instanceLabel || obj.displayName} — ${Math.round(obj.score * 100)}%`;
      ctx.font = 'bold 12px system-ui';
      ctx.fillStyle = 'rgba(5, 7, 15, 0.9)';
      const textWidth = ctx.measureText(labelText).width;
      ctx.fillRect(x, Math.max(0, y - 24), textWidth + 16, 22);

      ctx.fillStyle = strokeColor;
      ctx.fillText(labelText, x + 8, Math.max(14, y - 8));
    });
  };

  useEffect(() => {
    if (imageSrc && imgRef.current) {
      if (imgRef.current.complete) {
        handleProcessImage();
      } else {
        imgRef.current.onload = () => handleProcessImage();
      }
    }
  }, [imageSrc]);

  useEffect(() => {
    if (canvasRef.current && detectedObjects.length > 0) {
      drawBoundingBoxes(canvasRef.current, detectedObjects, hoveredObjId);
    }
  }, [hoveredObjId, detectedObjects]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Upload Header / Dropzone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`glass-panel p-8 sm:p-10 rounded-3xl border-2 border-dashed transition-all text-center space-y-4 ${
          dragActive
            ? 'border-neon-cyan bg-neon-cyan/10 scale-[1.01]'
            : 'border-white/20 hover:border-white/40'
        }`}
      >
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 flex items-center justify-center text-neon-cyan shadow-neon-cyan">
          <Upload className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">
            Upload Image for Non-Living Object Detection
          </h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Detects laptops, phones, chairs, desks, mugs, pens, backpacks, tools, and vehicles.
            Living organisms are automatically filtered out.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <label className="cursor-pointer px-6 py-3 rounded-2xl bg-gradient-to-r from-neon-cyan to-blue-600 text-cyber-950 font-bold text-xs shadow-neon-cyan hover:scale-105 active:scale-95 transition-all">
            <span>SELECT IMAGE FILE</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0]);
                }
              }}
            />
          </label>
        </div>

        {/* Demo Sample Images */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-[11px] font-mono text-gray-400 mb-3 uppercase tracking-wider">
            Or Click a Sample Non-Living Image:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {sampleImages.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedSampleHint(sample.hint);
                  setImageSrc(sample.url);
                }}
                className="px-3 py-1.5 rounded-xl glass-panel text-xs text-gray-300 border border-white/10 hover:border-neon-cyan hover:text-neon-cyan transition-all"
              >
                {sample.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="glass-panel p-4 rounded-2xl border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Image Display & Canvas Overlay */}
      {imageSrc && (
        <div className="space-y-6">
          <div className="relative glass-panel p-3 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
            {/* Base Image */}
            <img
              ref={imgRef}
              src={imageSrc}
              alt="Scan ROI"
              crossOrigin="anonymous"
              className="max-h-[600px] w-auto object-contain rounded-2xl"
            />

            {/* Bounding Box Overlay Canvas */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
            />

            {/* Processing Spinner Overlay */}
            {isProcessing && (
              <div className="absolute inset-0 bg-cyber-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-3 rounded-2xl z-20">
                <RefreshCw className="w-8 h-8 text-neon-cyan animate-spin" />
                <span className="text-xs font-mono text-neon-cyan tracking-wider">
                  ANALYZING NON-LIVING OBJECTS & APPLYING LIVING FILTER...
                </span>
              </div>
            )}
          </div>

          {/* Results Grid Panel */}
          {!isProcessing && (
            <DetectionCardGrid
              objects={detectedObjects}
              inferenceTimeMs={inferenceTime}
              onHoverObject={setHoveredObjId}
              hoveredObjId={hoveredObjId}
            />
          )}
        </div>
      )}
    </div>
  );
}
