'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Radio, RotateCcw, Pause, Play, Eye, Cpu, Camera, VideoOff, AlertCircle, Sparkles, Box } from 'lucide-react';
import { detectObjectsInElement } from '@/lib/tfjs';
import { enhancePrediction, assignInstanceNumbers } from '@/lib/analyzer';
import { analyzeWithGeminiClientSide } from '@/lib/geminiClient';
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

  const [isAiScanning, setIsAiScanning] = useState<boolean>(false);

  const handleAiScan = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsAiScanning(true);
    try {
      const base64Data = canvas.toDataURL('image/jpeg');
      let enhanced = detectedObjects;

      try {
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            imageBase64: base64Data,
            tfjsObjects: detectedObjects,
            customApiKey: settings.customApiKey,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.enhancedObjects && data.enhancedObjects.length > 0) {
            enhanced = data.enhancedObjects;
          }
        } else {
          const clientResults = await analyzeWithGeminiClientSide(base64Data, detectedObjects, null, settings.customApiKey);
          if (clientResults && clientResults.length > 0) enhanced = clientResults;
        }
      } catch (err) {
        const clientResults = await analyzeWithGeminiClientSide(base64Data, detectedObjects, null, settings.customApiKey);
        if (clientResults && clientResults.length > 0) enhanced = clientResults;
      }

      const finalObjects = assignInstanceNumbers(enhanced);
      setDetectedObjects(finalObjects);
      if (settings.soundEnabled && finalObjects.length > 0) soundManager.playDetectionPing();
    } catch (e) {
      console.error('AI Scan error', e);
    } finally {
      setIsAiScanning(false);
    }
  };

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
          const enhanced: DetectedObject[] = rawPredictions
            .map((pred, idx) => enhancePrediction(pred, idx, ctx, width, height))
            .filter((item): item is DetectedObject => item !== null);

          const finalObjects = assignInstanceNumbers(enhanced);
          setDetectedObjects(finalObjects);
          drawBoundingBoxes(canvas, finalObjects);

          if (finalObjects.length > 0 && Math.random() < 0.05 && settings.soundEnabled) {
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

    // Laptop & Monitor shapes
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(width * 0.25, height * 0.3, width * 0.5, height * 0.4);
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 2;
    ctx.strokeRect(width * 0.25, height * 0.3, width * 0.5, height * 0.4);
  };

  const drawBoundingBoxes = (canvas: HTMLCanvasElement, objects: DetectedObject[]) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach((obj) => {
      const [x, y, w, h] = obj.bbox;
      const isHovered = hoveredObjId === obj.id;
      const strokeColor = isHovered ? '#ff007f' : '#00f3ff';

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
      ctx.fillRect(x, Math.max(0, y - 22), textWidth + 12, 20);

      ctx.fillStyle = strokeColor;
      ctx.fillText(labelText, x + 6, Math.max(14, y - 8));
    });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 text-neon-cyan">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Live Stream AI Scanner</h2>
              <span className="text-[10px] font-mono text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded border border-neon-cyan/30">
                {fps} FPS
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Continuous real-time stream scanning for physical objects.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'))}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl glass-panel-interactive text-xs font-semibold text-gray-200"
          >
            <RotateCcw className="w-4 h-4 text-neon-cyan" />
            <span>FLIP</span>
          </button>

          <button
            onClick={handleAiScan}
            disabled={isAiScanning}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-950 font-bold text-xs shadow-neon-cyan hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isAiScanning ? 'DEEP AI SCANNING...' : 'DEEP AI REFINEMENT'}</span>
          </button>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
              isRunning
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                : 'bg-neon-emerald/20 text-neon-emerald border border-neon-emerald/40 hover:bg-neon-emerald/30'
            }`}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isRunning ? 'PAUSE' : 'RESUME'}</span>
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative glass-panel p-3 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[350px] sm:min-h-[480px] bg-cyber-950">
        <video
          ref={videoRef}
          playsInline
          muted
          className={`w-full h-auto max-h-[600px] object-cover rounded-2xl ${
            streamActive ? 'block' : 'hidden'
          }`}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
        />
      </div>

      {/* Results grid panel - Only rendered when objects are detected */}
      {detectedObjects.length > 0 && (
        <DetectionCardGrid
          objects={detectedObjects}
          onHoverObject={setHoveredObjId}
          hoveredObjId={hoveredObjId}
        />
      )}
    </div>
  );
}
