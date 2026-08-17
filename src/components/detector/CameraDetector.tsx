'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Camera,
  RotateCcw,
  Aperture,
  Zap,
  Volume2,
  AlertTriangle,
  RefreshCw,
  VideoOff,
  CheckCircle2,
  Box,
} from 'lucide-react';
import { detectObjectsInElement } from '@/lib/tfjs';
import { enhancePrediction, assignInstanceNumbers } from '@/lib/analyzer';
import { analyzeWithGeminiClientSide } from '@/lib/geminiClient';
import { DetectedObject, DetectionResult, DetectionSettings } from '@/lib/types';
import { soundManager } from '@/lib/audio';
import DetectionCardGrid from '../results/DetectionCardGrid';

interface CameraDetectorProps {
  settings: DetectionSettings;
  onSaveToHistory: (result: DetectionResult) => void;
}

export default function CameraDetector({ settings, onSaveToHistory }: CameraDetectorProps) {
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([]);
  const [inferenceTime, setInferenceTime] = useState<number>(0);
  const [flashActive, setFlashActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [hoveredObjId, setHoveredObjId] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: facingMode,
          width: settings.cameraResolution === '1080p' ? { ideal: 1920 } : { ideal: 1280 },
          height: settings.cameraResolution === '1080p' ? { ideal: 1080 } : { ideal: 720 },
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setIsCameraActive(true);
      if (settings.soundEnabled) soundManager.playDetectionPing();
    } catch (err) {
      console.warn('Camera stream initialisation failed, using simulated fallback camera mode.', err);
      setCameraError('Hardware camera unavailable or permission denied. Simulated demo camera mode enabled.');
      setIsCameraActive(true);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const switchCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  const takeSnapshot = async () => {
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 200);
    if (settings.soundEnabled) soundManager.playShutterSound();

    const video = videoRef.current;
    if (!video && !cameraError) return;

    setIsProcessing(true);
    const startTime = performance.now();

    try {
      const canvas = document.createElement('canvas');
      const width = video?.videoWidth || 640;
      const height = video?.videoHeight || 480;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (ctx) {
        if (video && video.readyState >= 2) {
          ctx.drawImage(video, 0, 0, width, height);
        } else {
          drawSimulatedCameraFrame(ctx, width, height);
        }
      }

      const snapshotDataUrl = canvas.toDataURL('image/jpeg');
      setCapturedImage(snapshotDataUrl);

      // Model detection on snapshot
      const rawPredictions = await detectObjectsInElement(canvas, settings.confidenceThreshold, ctx);
      const duration = Math.round(performance.now() - startTime);
      setInferenceTime(duration);

      let enhanced: DetectedObject[] = rawPredictions
        .map((pred, idx) => enhancePrediction(pred, idx, ctx, width, height))
        .filter((item): item is DetectedObject => item !== null);

      try {
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            imageBase64: snapshotDataUrl,
            tfjsObjects: enhanced,
            customApiKey: settings.customApiKey,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.enhancedObjects) {
            enhanced = data.enhancedObjects;
          }
        } else {
          const clientResults = await analyzeWithGeminiClientSide(
            snapshotDataUrl,
            enhanced,
            null,
            settings.customApiKey
          );
          if (clientResults && clientResults.length > 0) {
            enhanced = clientResults;
          }
        }
      } catch (apiError) {
        const clientResults = await analyzeWithGeminiClientSide(
          snapshotDataUrl,
          enhanced,
          null,
          settings.customApiKey
        );
        if (clientResults && clientResults.length > 0) {
          enhanced = clientResults;
        }
      }

      // Filter living items & assign multi-object instance numbers (#1, #2...)
      const finalObjects = assignInstanceNumbers(enhanced);
      setDetectedObjects(finalObjects);

      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        drawBoundingBoxes(canvasRef.current, finalObjects, hoveredObjId);
      }

      const resultItem: DetectionResult = {
        id: `cam_${Date.now()}`,
        timestamp: Date.now(),
        sourceType: 'camera',
        thumbnailUrl: snapshotDataUrl,
        objects: finalObjects,
        inferenceTimeMs: duration,
        totalObjectsCount: finalObjects.length,
      };

      onSaveToHistory(resultItem);
    } catch (err) {
      console.error('Snapshot detection error', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const drawSimulatedCameraFrame = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#00f3ff44';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, w - 100, h - 100);

    // Draw simulated laptop shape
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(w * 0.3, h * 0.4, w * 0.4, h * 0.3);
    ctx.fillStyle = '#00f3ff33';
    ctx.fillRect(w * 0.32, h * 0.42, w * 0.36, h * 0.22);
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
      ctx.shadowBlur = 15;
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
    startCamera();
    return () => {
      stopCamera();
    };
  }, [facingMode]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 text-neon-cyan">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Camera AI Scanner</h2>
            <p className="text-xs text-gray-400">
              Real-time optical object scanning &amp; spatial analysis via WebGL neural engine.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {isCameraActive && (
            <button
              onClick={switchCamera}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel-interactive text-xs font-semibold text-gray-200"
            >
              <RotateCcw className="w-4 h-4 text-neon-cyan" />
              <span>FLIP CAMERA</span>
            </button>
          )}

          <button
            onClick={takeSnapshot}
            disabled={isProcessing}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-neon-cyan to-blue-600 text-cyber-950 font-bold text-xs shadow-neon-cyan hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            <Aperture className="w-5 h-5 animate-spin-slow" />
            <span>{isProcessing ? 'SCANNING OBJECTS...' : 'CAPTURE SNAPSHOT'}</span>
          </button>
        </div>
      </div>

      {/* Camera Viewport / Canvas overlay */}
      <div className="relative glass-panel p-3 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[350px] sm:min-h-[480px]">
        {/* Flash animation */}
        {flashActive && <div className="absolute inset-0 bg-white z-40 animate-out fade-out duration-200" />}

        {/* Live Video Element */}
        <video
          ref={videoRef}
          playsInline
          muted
          className={`w-full h-auto max-h-[600px] object-cover rounded-2xl ${
            capturedImage ? 'hidden' : 'block'
          }`}
        />

        {/* Captured Snapshot Display */}
        {capturedImage && (
          <img
            src={capturedImage}
            alt="Camera Snapshot"
            className="w-full h-auto max-h-[600px] object-cover rounded-2xl"
          />
        )}

        {/* Bounding box Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
        />

        {/* Processing Spinner */}
        {isProcessing && (
          <div className="absolute inset-0 bg-cyber-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-3 rounded-2xl z-30">
            <RefreshCw className="w-8 h-8 text-neon-cyan animate-spin" />
            <span className="text-xs font-mono text-neon-cyan tracking-wider">
              IDENTIFYING NON-LIVING OBJECTS...
            </span>
          </div>
        )}
      </div>

      {/* Results grid panel */}
      {capturedImage && !isProcessing && (
        <DetectionCardGrid
          objects={detectedObjects}
          inferenceTimeMs={inferenceTime}
          onHoverObject={setHoveredObjId}
          hoveredObjId={hoveredObjId}
        />
      )}
    </div>
  );
}
