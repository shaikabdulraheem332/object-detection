'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Radio, RotateCcw, Pause, Play, Eye, Cpu, Camera, VideoOff, AlertCircle } from 'lucide-react';
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
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [hoveredObjId, setHoveredObjId] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const frameCountRef = useRef<number>(0);
  const isDetectingRef = useRef<boolean>(false);

  const startLiveStream = async () => {
    setCameraError(null);
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
      setCameraError('Hardware camera unavailable or permission denied. Simulated AI Workstation mode active.');
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

      if (canvas && !isDetectingRef.current) {
        isDetectingRef.current = true;
        const now = performance.now();

        // Calculate FPS
        frameCountRef.current++;
        if (now - lastTimeRef.current >= 1000) {
          setFps(Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current)));
          frameCountRef.current = 0;
          lastTimeRef.current = now;
        }

        const width = video && video.videoWidth ? video.videoWidth : 640;
        const height = video && video.videoHeight ? video.videoHeight : 480;

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          if (streamActive && video && video.readyState >= 2) {
            ctx.drawImage(video, 0, 0, width, height);
          } else {
            drawSimulatedWorkstationStream(ctx, width, height);
          }

          const rawPredictions = await detectObjectsInElement(canvas, settings.confidenceThreshold, ctx);
          const enhanced = rawPredictions.map((pred, idx) =>
            enhancePrediction(pred, idx, ctx, width, height)
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
  }, [isRunning, streamActive, settings.confidenceThreshold, settings.boxColorTheme]);

  const drawSimulatedWorkstationStream = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = '#05070f';
    ctx.fillRect(0, 0, width, height);

    // Subtle Grid background
    ctx.strokeStyle = '#00f3ff12';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 1. Desktop CPU Tower (Left side)
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(width * 0.06, height * 0.2, width * 0.16, height * 0.58);
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 2;
    ctx.strokeRect(width * 0.06, height * 0.2, width * 0.16, height * 0.58);
    ctx.fillStyle = '#00ff9d';
    ctx.beginPath();
    ctx.arc(width * 0.14, height * 0.26, 5, 0, Math.PI * 2);
    ctx.fill();

    // 2. Computer Monitor Display (Center)
    ctx.fillStyle = '#0b1329';
    ctx.fillRect(width * 0.26, height * 0.18, width * 0.46, height * 0.44);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.strokeRect(width * 0.26, height * 0.18, width * 0.46, height * 0.44);
    // Monitor Stand
    ctx.fillStyle = '#334155';
    ctx.fillRect(width * 0.46, height * 0.62, width * 0.06, height * 0.12);

    // 3. Computer Keyboard (Bottom Center)
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(width * 0.3, height * 0.76, width * 0.38, height * 0.15);
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2;
    ctx.strokeRect(width * 0.3, height * 0.76, width * 0.38, height * 0.15);

    // 4. Optical Computer Mouse (Bottom Right)
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.ellipse(width * 0.75, height * 0.83, width * 0.035, height * 0.07, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#00f3ff';
    ctx.stroke();

    // 5. Digital Projector (Top / Ceiling mount)
    ctx.fillStyle = '#334155';
    ctx.fillRect(width * 0.42, height * 0.03, width * 0.16, height * 0.11);
    ctx.strokeStyle = '#ff007f';
    ctx.strokeRect(width * 0.42, height * 0.03, width * 0.16, height * 0.11);
    ctx.fillStyle = '#00f3ff';
    ctx.beginPath();
    ctx.arc(width * 0.54, height * 0.085, 8, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawBoundingBoxes = (canvas: HTMLCanvasElement, objects: DetectedObject[]) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
              Real-time multi-object identification overlay for CPU, Mouse, Keyboard, Projector & displays.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Open / Toggle Camera */}
          {!streamActive ? (
            <button
              onClick={startLiveStream}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-cyan text-cyber-950 font-bold text-xs shadow-neon-cyan hover:scale-105 transition-transform"
            >
              <Camera className="w-4 h-4" />
              <span>Open Camera</span>
            </button>
          ) : (
            <button
              onClick={stopLiveStream}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-laser-pink text-xs font-semibold border border-laser-pink/40 hover:bg-laser-pink/10"
            >
              <VideoOff className="w-4 h-4" />
              <span>Stop Camera</span>
            </button>
          )}

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
            title="Flip Camera"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {cameraError && (
        <div className="flex items-center justify-between gap-2 p-4 rounded-2xl bg-neon-amber/10 border border-neon-amber/40 text-neon-amber text-xs">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{cameraError}</span>
          </div>
          <button
            onClick={startLiveStream}
            className="px-3 py-1 bg-neon-amber/20 rounded-lg text-white hover:bg-neon-amber/30 text-xs font-bold"
          >
            Retry Camera
          </button>
        </div>
      )}

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

        <div className="relative w-full flex items-center justify-center">
          <video
            ref={videoRef}
            playsInline
            muted
            className="hidden"
          />
          <canvas
            ref={canvasRef}
            className="w-full max-h-[550px] object-contain rounded-2xl block mx-auto shadow-2xl border border-white/10"
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
