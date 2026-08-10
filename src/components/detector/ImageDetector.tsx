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
} from 'lucide-react';
import { detectObjectsInElement } from '@/lib/tfjs';
import { enhancePrediction } from '@/lib/analyzer';
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

  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Demo sample images covering Leaders, Birds, Animals, Eyewear & Tech
  const sampleImages = [
    { label: 'Dr. A.P.J. Abdul Kalam', url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80', hint: 'abdul kalam' },
    { label: 'Present AP CM / Leader', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80', hint: 'chandrababu naidu' },
    { label: 'India PM / Leaders', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80', hint: 'narendra modi' },
    { label: 'Indian Peacock & Avian Birds', url: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&auto=format&fit=crop&q=80', hint: 'peacock' },
    { label: 'Bald Eagle Raptor', url: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&auto=format&fit=crop&q=80', hint: 'eagle' },
    { label: 'Bengal Tiger Wildlife', url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80', hint: 'tiger' },
    { label: 'Polarized UV Sunglasses', url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80', hint: 'sunglasses' },
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

  const [selectedSampleHint, setSelectedSampleHint] = useState<string | null>(null);

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

      // Model detection with canvas context passed for visual feature fallback
      const rawPredictions = await detectObjectsInElement(img, settings.confidenceThreshold, ctx);
      const duration = Math.round(performance.now() - startTime);
      setInferenceTime(duration);

      let enhanced: DetectedObject[] = rawPredictions.map((pred, idx) =>
        enhancePrediction(pred, idx, ctx, canvas.width, canvas.height, selectedSampleHint)
      );

      // Fetch deep knowledge from Gemini API backend
      try {
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageBase64: imageSrc, tfjsObjects: enhanced, sampleHint: selectedSampleHint }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.enhancedObjects && data.enhancedObjects.length > 0) {
            enhanced = data.enhancedObjects;
          }
        }
      } catch (apiError) {
        console.error('Gemini API enrichment failed, falling back to local engine.', apiError);
      }

      setDetectedObjects(enhanced);
      drawBoundingBoxes(canvas, enhanced, hoveredObjId);

      if (settings.soundEnabled && enhanced.length > 0) {
        soundManager.playDetectionPing();
      }

      const resultItem: DetectionResult = {
        id: `img_${Date.now()}`,
        timestamp: Date.now(),
        sourceType: 'image',
        thumbnailUrl: imageSrc,
        objects: enhanced,
        inferenceTimeMs: duration,
        totalObjectsCount: enhanced.length,
      };

      onSaveToHistory(resultItem);
    } catch (err) {
      console.error('Image processing failed', err);
      setErrorMsg('Failed to process image. Please try another image file.');
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
      const strokeColor = isHighlight
        ? '#ff007f'
        : settings.boxColorTheme === 'purple'
          ? '#9d4edd'
          : settings.boxColorTheme === 'emerald'
            ? '#00ff9d'
            : '#00f3ff';

      ctx.shadowColor = strokeColor;
      ctx.shadowBlur = isHighlight ? 20 : 12;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = isHighlight ? 4 : 3;

      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 8);
      ctx.stroke();

      if (isHighlight) {
        ctx.fillStyle = `${strokeColor}22`;
        ctx.fill();
      }

      const crosshairSize = Math.min(w, h, 20);
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x, y + crosshairSize);
      ctx.lineTo(x, y);
      ctx.lineTo(x + crosshairSize, y);
      ctx.stroke();

      const labelText = `${obj.subCategory || obj.displayName} ${Math.round(obj.score * 100)}%`;
      ctx.font = 'bold 13px system-ui, sans-serif';
      const textWidth = ctx.measureText(labelText).width;
      const pillWidth = textWidth + 16;
      const pillHeight = 24;

      const pillX = Math.max(0, Math.min(canvas.width - pillWidth, x));
      const pillY = Math.max(0, y - pillHeight - 6);

      ctx.shadowBlur = 8;
      ctx.fillStyle = 'rgba(7, 12, 24, 0.9)';
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillWidth, pillHeight, 6);
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.fillStyle = strokeColor;
      ctx.fillText(labelText, pillX + 8, pillY + 16);
    });
  };

  useEffect(() => {
    if (imageSrc) {
      handleProcessImage();
    }
  }, [imageSrc, settings.confidenceThreshold, settings.boxColorTheme]);

  useEffect(() => {
    if (canvasRef.current && detectedObjects.length > 0) {
      drawBoundingBoxes(canvasRef.current, detectedObjects, hoveredObjId);
    }
  }, [hoveredObjId, detectedObjects]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/40 text-neon-purple">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Image AI Analyzer & Deep Knowledge System
              <span className="text-xs font-mono text-neon-cyan px-2 py-0.5 rounded bg-neon-cyan/10 border border-neon-cyan/30">
                Hybrid Detection
              </span>
            </h2>
            <p className="text-xs text-gray-400">
              Detect sunglasses, birds, smartphones, tools, humans, and view deep AI uses & specifications.
            </p>
          </div>
        </div>

        {imageSrc && (
          <button
            onClick={() => {
              setImageSrc(null);
              setSelectedSampleHint(null);
              setDetectedObjects([]);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel-interactive text-xs font-semibold text-gray-300 hover:text-white"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Upload New Image</span>
          </button>
        )}
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2 p-4 rounded-2xl bg-laser-pink/10 border border-laser-pink/40 text-laser-pink text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Upload Dropzone */}
      {!imageSrc && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`glass-panel p-8 sm:p-12 rounded-3xl border-2 border-dashed text-center space-y-6 transition-all duration-300 ${dragActive
              ? 'border-neon-cyan bg-neon-cyan/10 shadow-neon-cyan'
              : 'border-white/20 hover:border-neon-cyan/50'
            }`}
        >
          <div className="w-16 h-16 rounded-2xl bg-cyber-900 border border-white/10 flex items-center justify-center mx-auto shadow-neon-purple">
            <Upload className="w-8 h-8 text-neon-cyan animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Drag & Drop Your Image Here</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Supports PNG, JPG, JPEG, WEBP files up to 25MB.
            </p>
          </div>

          <div>
            <label className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-950 font-bold text-xs shadow-neon-cyan hover:scale-105 transition-transform cursor-pointer">
              <Upload className="w-4 h-4" />
              <span>BROWSE IMAGE FILE</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
              />
            </label>
          </div>

          {/* Sample Images Section */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Or Try A Sample Demo Image
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {sampleImages.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSampleHint(sample.hint || null);
                    setImageSrc(sample.url);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl glass-panel-interactive text-xs text-gray-300 hover:text-neon-cyan"
                >
                  <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>{sample.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Image Stage & Canvas overlay */}
      {imageSrc && (
        <div className="space-y-6">
          <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center bg-cyber-950 p-2 sm:p-4 min-h-[350px]">
            {isProcessing && (
              <div className="absolute inset-0 z-20 bg-cyber-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-3">
                <Cpu className="w-10 h-10 text-neon-cyan animate-spin" />
                <span className="text-xs font-mono text-neon-cyan font-bold tracking-widest animate-pulse">
                  HYBRID AI FEATURE INFERENCE RUNNING...
                </span>
              </div>
            )}

            <div className="relative inline-block max-w-full">
              <img
                ref={imgRef}
                src={imageSrc}
                alt="Source preview"
                onLoad={handleProcessImage}
                className="max-h-[600px] w-auto h-auto rounded-2xl object-contain block mx-auto"
                crossOrigin="anonymous"
              />

              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
              />
            </div>
          </div>

          {/* Results Breakdown Grid */}
          <DetectionCardGrid
            objects={detectedObjects}
            inferenceTimeMs={inferenceTime}
            hoveredObjId={hoveredObjId}
            onHoverObject={setHoveredObjId}
          />
        </div>
      )}
    </div>
  );
}
