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
} from 'lucide-react';
import { detectObjectsInElement } from '@/lib/tfjs';
import { enhancePrediction } from '@/lib/analyzer';
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
    // Shutter flash effect & sound
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 200);
    if (settings.soundEnabled) soundManager.playShutterSound();

    const video = videoRef.current;
    if (!video && !cameraError) return;

    setIsProcessing(true);
    const startTime = performance.now();

    try {
      // Create temporary canvas to capture snapshot frame
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
          // Draw simulated test frame if video stream is unavailable
          drawSimulatedCameraFrame(ctx, width, height);
        }
      }

      const snapshotDataUrl = canvas.toDataURL('image/jpeg');
      setCapturedImage(snapshotDataUrl);

      // Perform AI detection on snapshot
      const rawPredictions = await detectObjectsInElement(canvas, settings.confidenceThreshold, ctx);
      const duration = Math.round(performance.now() - startTime);
      setInferenceTime(duration);

      let enhanced = rawPredictions.map((pred, idx) =>
        enhancePrediction(pred, idx, ctx, width, height)
      );

      // Fetch deep knowledge from Gemini API backend or client side AI
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

      setDetectedObjects(enhanced);

      // Render overlay on displayed snapshot canvas
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        drawBoundingBoxes(canvasRef.current, enhanced, hoveredObjId);
      }

      const resultItem: DetectionResult = {
        id: `cam_${Date.now()}`,
        timestamp: Date.now(),
        sourceType: 'camera',
        thumbnailUrl: snapshotDataUrl,
        objects: enhanced,
        inferenceTimeMs: duration,
        totalObjectsCount: enhanced.length,
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

    // Draw simulated room shape
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

      // Label Header
      const labelText = `${obj.subCategory || obj.displayName} ${Math.round(obj.score * 100)}%`;
      ctx.font = 'bold 12px system-ui';
      ctx.fillStyle = 'rgba(5, 7, 15, 0.9)';
      ctx.fillRect(x, Math.max(0, y - 24), ctx.measureText(labelText).width + 16, 22);
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
              Snap high-res photo frames using your phone camera or desktop webcam.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {isCameraActive && (
            <button
              onClick={switchCamera}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-interactive text-xs text-gray-300 hover:text-neon-cyan"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Flip Camera</span>
            </button>
          )}

          {!isCameraActive ? (
            <button
              onClick={startCamera}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-cyan text-cyber-950 font-bold text-xs shadow-neon-cyan"
            >
              <Camera className="w-4 h-4" />
              <span>Start Camera</span>
            </button>
          ) : (
            <button
              onClick={stopCamera}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-laser-pink text-xs font-semibold border border-laser-pink/40 hover:bg-laser-pink/10"
            >
              <VideoOff className="w-4 h-4" />
              <span>Stop Camera</span>
            </button>
          )}
        </div>
      </div>

      {cameraError && (
        <div className="flex items-center gap-2 p-4 rounded-2xl bg-neon-amber/10 border border-neon-amber/40 text-neon-amber text-xs">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{cameraError}</span>
        </div>
      )}

      {/* Main Camera Viewfinder Stage */}
      <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/10 bg-cyber-950 flex items-center justify-center min-h-[350px]">
        {/* White Shutter Flash overlay */}
        {flashActive && (
          <div className="absolute inset-0 bg-white z-30 transition-opacity duration-200" />
        )}

        {/* Live Video Stream Viewfinder */}
        {!capturedImage && (
          <div className="relative w-full flex items-center justify-center p-2 sm:p-4">
            <video
              ref={videoRef}
              playsInline
              muted
              className="w-full max-h-[550px] object-cover rounded-2xl"
            />
            {/* Viewfinder Reticle Grid */}
            <div className="absolute inset-8 sm:inset-16 border border-neon-cyan/20 rounded-3xl pointer-events-none flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <span className="w-4 h-4 border-t-2 border-l-2 border-neon-cyan" />
                <span className="w-4 h-4 border-t-2 border-r-2 border-neon-cyan" />
              </div>
              <div className="flex justify-between">
                <span className="w-4 h-4 border-b-2 border-l-2 border-neon-cyan" />
                <span className="w-4 h-4 border-b-2 border-r-2 border-neon-cyan" />
              </div>
            </div>
          </div>
        )}

        {/* Captured Snapshot Display with Canvas overlay */}
        {capturedImage && (
          <div className="relative inline-block max-w-full p-2 sm:p-4">
            <img
              src={capturedImage}
              alt="Snapshot"
              className="max-h-[550px] w-auto rounded-2xl block mx-auto object-contain"
            />
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
            />
          </div>
        )}
      </div>

      {/* Shutter Capture Button */}
      <div className="flex justify-center items-center gap-4">
        {!capturedImage ? (
          <button
            onClick={takeSnapshot}
            disabled={isProcessing}
            className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple p-1 shadow-neon-cyan hover:scale-105 active:scale-95 transition-all"
          >
            <div className="w-full h-full rounded-full bg-cyber-950 border-2 border-white/40 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
              <Aperture className="w-8 h-8 text-neon-cyan group-hover:rotate-45 transition-transform" />
            </div>
          </button>
        ) : (
          <button
            onClick={() => {
              setCapturedImage(null);
              setDetectedObjects([]);
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-950 font-bold text-xs shadow-neon-cyan hover:scale-105 transition-transform"
          >
            <Camera className="w-4 h-4" />
            <span>TAKE ANOTHER PHOTO</span>
          </button>
        )}
      </div>

      {/* Results Breakdown Grid */}
      {capturedImage && (
        <DetectionCardGrid
          objects={detectedObjects}
          inferenceTimeMs={inferenceTime}
          hoveredObjId={hoveredObjId}
          onHoverObject={setHoveredObjId}
        />
      )}
    </div>
  );
}
