'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Radio, RotateCcw, Zap, Volume2, Pause, Play, Eye, Cpu } from 'lucide-react';
import { detectObjectsInElement } from '@/lib/tfjs';
import { enhancePrediction } from '@/lib/analyzer';
import { DetectedObject, DetectionResult, DetectionSettings } from '@/lib/types';
import { soundManager } from '@/lib/audio';
import DetectionCardGrid from '../results/DetectionCardGrid';

interface LiveStreamDetectorProps {
  settings: DetectionSettings;
  onSaveToHistory: (result: DetectionResult) => void;
}

export default function LiveStreamDetector({ settings, onSaveToHistory }: LiveStreamDetectorProps) {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [fps, setFps] = useState<number>(0);
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([]);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [streamActive, setStreamActive] = useState<boolean>(false);
  const [hoveredObjId, setHoveredObjId] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const frameCountRef = useRef<number>(0);
  const isDetectingRef = useRef<boolean>(false);

  const startLiveStream = async () => {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStreamActive(true);
      }
    } catch (err) {
      console.warn('Live camera stream unavailable. Falling back to video synthesis mode.', err);
      setStreamActive(false);
    }
  };

  const stopLiveStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setStreamActive(false);
  };

  useEffect(() => {
    startLiveStream();
    return () => stopLiveStream();
  }, [facingMode]);

  // Main Detection Animation Frame Loop
  useEffect(() => {
    let active = true;

    const runDetectionLoop = async () => {
      if (!active || !isRunning) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas && video.readyState >= 2 && !isDetectingRef.current) {
        isDetectingRef.current = true;
        const now = performance.now();

        // Calculate FPS
        frameCountRef.current++;
        if (now - lastTimeRef.current >= 1000) {
          setFps(Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current)));
          frameCountRef.current = 0;
          lastTimeRef.current = now;
        }

        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          const rawPredictions = await detectObjectsInElement(video, settings.confidenceThreshold);
          const enhanced = rawPredictions.map((pred, idx) =>
            enhancePrediction(pred, idx, ctx, canvas.width, canvas.height)
          );

          setDetectedObjects(enhanced);
          drawBoundingBoxes(canvas, enhanced);

          if (enhanced.length > 0 && Math.random() < 0.05 && settings.soundEnabled) {
            soundManager.playDetectionPing();
          }
        }

        isDetectingRef.current = false;
      }

      if (active && isRunning) {
        animationFrameRef.current = requestAnimationFrame(runDetectionLoop);
      }
    };

    if (isRunning) {
      animationFrameRef.current = requestAnimationFrame(runDetectionLoop);
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    return () => {
      active = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning, settings.confidenceThreshold, settings.boxColorTheme]);

  const drawBoundingBoxes = (canvas: HTMLCanvasElement, objects: DetectedObject[]) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach((obj) => {
      const [x, y, w, h] = obj.bbox;
      const strokeColor =
        settings.boxColorTheme === 'purple'
          ? '#9d4edd'
          : settings.boxColorTheme === 'emerald'
            ? '#00ff9d'
            : '#00f3ff';

      // Animated pulsing glow line
      ctx.shadowColor = strokeColor;
      ctx.shadowBlur = 12;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 6);
      ctx.stroke();

      // Corner Crosshairs
      const cSize = Math.min(w, h, 16);
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x, y + cSize);
      ctx.lineTo(x, y);
      ctx.lineTo(x + cSize, y);
      ctx.stroke();

      // Label Pill
      const labelText = `${obj.subCategory || obj.displayName} ${Math.round(obj.score * 100)}%`;
      ctx.font = 'bold 12px system-ui';
      const textWidth = ctx.measureText(labelText).width;
      const pillWidth = textWidth + 14;

      const pillX = Math.max(0, Math.min(canvas.width - pillWidth, x));
      const pillY = Math.max(0, y - 24);

      ctx.fillStyle = 'rgba(5, 7, 15, 0.9)';
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillWidth, 22, 6);
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = strokeColor;
      ctx.fillText(labelText, pillX + 6, pillY + 15);
    });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-laser-pink/20 border border-neon-cyan/40 text-neon-cyan">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Continuous Live AI Stream
              <span className="text-xs font-mono text-neon-emerald bg-neon-emerald/10 border border-neon-emerald/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-neon-emerald animate-ping" />
                60 FPS STREAM
              </span>
            </h2>
            <p className="text-xs text-gray-400">
              Real-time continuous multi-object identification and tracking overlay.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Pause / Resume */}
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel-interactive text-xs font-bold text-gray-200 hover:text-neon-cyan"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4 text-neon-amber" />
                <span>Pause AI</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-neon-emerald" />
                <span>Resume AI</span>
              </>
            )}
          </button>

          {/* Flip Camera */}
          <button
            onClick={() => setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'))}
            className="p-2.5 rounded-xl glass-panel-interactive text-gray-300 hover:text-neon-cyan"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Live Stream Display Viewport */}
      <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/10 bg-cyber-950 flex items-center justify-center min-h-[400px] p-2 sm:p-4">
        {/* HUD Top Bar Overlay */}
        <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyber-950/80 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-300">
            <Cpu className="w-3.5 h-3.5 text-neon-cyan" />
            <span>FPS: <strong className="text-neon-cyan">{fps}</strong></span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyber-950/80 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-300">
            <Eye className="w-3.5 h-3.5 text-neon-purple" />
            <span>Active Targets: <strong className="text-neon-purple">{detectedObjects.length}</strong></span>
          </div>
        </div>

        <div className="relative inline-block max-w-full">
          <video
            ref={videoRef}
            playsInline
            muted
            className="max-h-[550px] w-auto rounded-2xl block mx-auto object-contain"
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
          />
        </div>
      </div>

      {/* Detection Cards List */}
      <DetectionCardGrid
        objects={detectedObjects}
        hoveredObjId={hoveredObjId}
        onHoverObject={setHoveredObjId}
      />
    </div>
  );
}
