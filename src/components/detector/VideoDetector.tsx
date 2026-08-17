'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Video, Upload, RefreshCw, Sparkles, Play, Pause } from 'lucide-react';
import { detectObjectsInElement } from '@/lib/tfjs';
import { enhancePrediction, assignInstanceNumbers } from '@/lib/analyzer';
import { DetectedObject, DetectionResult, DetectionSettings } from '@/lib/types';
import { soundManager } from '@/lib/audio';
import DetectionCardGrid from '../results/DetectionCardGrid';

interface VideoDetectorProps {
  settings: DetectionSettings;
  onSaveToHistory: (result: DetectionResult) => void;
}

export default function VideoDetector({ settings, onSaveToHistory }: VideoDetectorProps) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([]);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [hoveredObjId, setHoveredObjId] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isDetectingRef = useRef<boolean>(false);

  // Reliable Demo Videos
  const sampleVideos = [
    {
      label: 'Vehicles & Street Traffic',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
      label: 'Technology & Displays',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
  ];

  const handleVideoUpload = (file: File) => {
    if (!file.type.startsWith('video/')) return;
    const url = URL.createObjectURL(file);
    setVideoSrc(url);
    if (settings.soundEnabled) soundManager.playDetectionPing();
  };

  const handleSelectSampleVideo = (url: string) => {
    setVideoSrc(url);
    setDetectedObjects([]);
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  // Video Frame Loop
  useEffect(() => {
    let active = true;

    const processVideoFrame = async () => {
      if (!active || !isPlaying) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas && video.readyState >= 2 && !isDetectingRef.current && !video.paused) {
        isDetectingRef.current = true;

        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          const rawPredictions = await detectObjectsInElement(video, settings.confidenceThreshold, ctx);
          const enhanced: DetectedObject[] = rawPredictions
            .map((pred, idx) => enhancePrediction(pred, idx, ctx, canvas.width, canvas.height))
            .filter((item): item is DetectedObject => item !== null);

          const finalObjects = assignInstanceNumbers(enhanced);
          setDetectedObjects(finalObjects);
          drawBoundingBoxes(canvas, finalObjects);
        }

        isDetectingRef.current = false;
      }

      if (active && isPlaying) {
        animationFrameRef.current = requestAnimationFrame(processVideoFrame);
      }
    };

    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(processVideoFrame);
    }

    return () => {
      active = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, settings.confidenceThreshold, settings.boxColorTheme]);

  const drawBoundingBoxes = (canvas: HTMLCanvasElement, objects: DetectedObject[]) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach((obj) => {
      const [x, y, w, h] = obj.bbox;
      const strokeColor = '#00f3ff';

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
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-laser-pink/20 to-neon-purple/20 border border-laser-pink/40 text-laser-pink">
            <Video className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Video AI Analyzer</h2>
            <p className="text-xs text-gray-400">
              Upload MP4, WEBM, or MOV videos for continuous frame-by-frame object detection.
            </p>
          </div>
        </div>

        {videoSrc && (
          <button
            onClick={() => {
              setVideoSrc(null);
              setIsPlaying(false);
              setDetectedObjects([]);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel-interactive text-xs font-semibold text-gray-300 hover:text-white"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Upload Another Video</span>
          </button>
        )}
      </div>

      {/* Upload Drag & Drop */}
      {!videoSrc && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            if (e.dataTransfer.files?.[0]) handleVideoUpload(e.dataTransfer.files[0]);
          }}
          className={`glass-panel p-8 sm:p-12 rounded-3xl border-2 border-dashed text-center space-y-6 transition-all ${
            dragActive
              ? 'border-laser-pink bg-laser-pink/10 shadow-neon-pink'
              : 'border-white/20 hover:border-laser-pink/50'
          }`}
        >
          <div className="w-16 h-16 rounded-2xl bg-cyber-900 border border-white/10 flex items-center justify-center mx-auto shadow-neon-pink">
            <Video className="w-8 h-8 text-laser-pink animate-pulse" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Drag &amp; Drop Your Video File</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Supports MP4, WEBM, MOV files up to 100MB.
            </p>
          </div>

          <div>
            <label className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-laser-pink to-neon-purple text-white font-bold text-xs shadow-neon-pink hover:scale-105 transition-transform cursor-pointer">
              <Upload className="w-4 h-4" />
              <span>SELECT VIDEO FILE</span>
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleVideoUpload(e.target.files[0])}
              />
            </label>
          </div>

          {/* Sample Videos */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Or Test With Sample Demo Videos
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {sampleVideos.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSampleVideo(sample.url)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel-interactive text-xs text-gray-200 hover:text-laser-pink hover:border-laser-pink/50 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-laser-pink" />
                  <span>{sample.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Video Player Stage */}
      {videoSrc && (
        <div className="space-y-6">
          <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/10 bg-cyber-950 flex items-center justify-center p-2 sm:p-4 min-h-[350px]">
            <div className="relative inline-block max-w-full">
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                autoPlay
                playsInline
                crossOrigin="anonymous"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="max-h-[550px] w-auto rounded-2xl block mx-auto object-contain"
              />
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
              />
            </div>
          </div>

          {/* Results Grid - Only show when objects detected */}
          {detectedObjects.length > 0 && (
            <DetectionCardGrid
              objects={detectedObjects}
              hoveredObjId={hoveredObjId}
              onHoverObject={setHoveredObjId}
            />
          )}
        </div>
      )}
    </div>
  );
}
