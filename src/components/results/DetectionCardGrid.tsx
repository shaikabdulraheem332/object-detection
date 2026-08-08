'use client';

import React, { useState } from 'react';
import { DetectedObject } from '@/lib/types';
import {
  User,
  Dog,
  Car,
  Laptop,
  Cpu,
  Utensils,
  Shirt,
  Sprout,
  Wrench,
  Dumbbell,
  Compass,
  Maximize2,
  Volume2,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Glasses,
} from 'lucide-react';
import { soundManager } from '@/lib/audio';
import AIKnowledgeModal from './AIKnowledgeModal';

interface DetectionCardGridProps {
  objects: DetectedObject[];
  inferenceTimeMs?: number;
  onHoverObject?: (objId: string | null) => void;
  hoveredObjId?: string | null;
}

export default function DetectionCardGrid({
  objects,
  inferenceTimeMs,
  onHoverObject,
  hoveredObjId,
}: DetectionCardGridProps) {
  const [selectedKnowledgeObj, setSelectedKnowledgeObj] = useState<DetectedObject | null>(null);
  const [speakingObjId, setSpeakingObjId] = useState<string | null>(null);

  if (objects.length === 0) {
    return (
      <div className="glass-panel p-8 rounded-2xl text-center space-y-3 border border-white/10">
        <Cpu className="w-10 h-10 text-gray-500 mx-auto animate-pulse" />
        <h3 className="text-sm font-semibold text-gray-300">No Objects Detected</h3>
        <p className="text-xs text-gray-500">
          Point the camera at recognizable items or upload a clearer photo.
        </p>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Human':
        return <User className="w-4 h-4 text-neon-cyan" />;
      case 'Animal':
        return <Dog className="w-4 h-4 text-neon-purple" />;
      case 'Vehicle':
        return <Car className="w-4 h-4 text-laser-pink" />;
      case 'Eyewear':
        return <Glasses className="w-4 h-4 text-neon-cyan" />;
      case 'Electronics':
        return <Laptop className="w-4 h-4 text-neon-cyan" />;
      case 'Food':
        return <Utensils className="w-4 h-4 text-neon-amber" />;
      case 'Clothing':
        return <Shirt className="w-4 h-4 text-neon-purple" />;
      case 'Plant':
        return <Sprout className="w-4 h-4 text-neon-emerald" />;
      case 'Tool':
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      case 'Sports':
        return <Dumbbell className="w-4 h-4 text-neon-pink" />;
      default:
        return <Cpu className="w-4 h-4 text-gray-400" />;
    }
  };

  const cleanForSpeech = (text: string): string =>
    text
      .replace(/\//g, ' and ')
      .replace(/&/g, ' and ')
      .replace(/\|/g, ', ')
      .replace(/–/g, ' to ')
      .replace(/—/g, ', ')
      .replace(/\(/g, ', ')
      .replace(/\)/g, ', ')
      .replace(/\s{2,}/g, ' ')
      .trim();

  const handleSpeak = (obj: DetectedObject) => {
    if (speakingObjId === obj.id) {
      soundManager.stopSpeaking();
      setSpeakingObjId(null);
      return;
    }

    // Stop any other active speech first
    soundManager.stopSpeaking();
    setSpeakingObjId(null);

    const rawSummary = obj.knowledge?.primaryUses || `Identified as ${obj.displayName} in category ${obj.category}.`;
    const cleanSummary = cleanForSpeech(rawSummary);
    const cleanName = cleanForSpeech(obj.displayName);

    const started = soundManager.speakObjectKnowledge(cleanName, cleanSummary, () => {
      setSpeakingObjId(null); // reset button when speech naturally ends
    });

    if (started) {
      setSpeakingObjId(obj.id);
    } else {
      setSpeakingObjId(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
            Identified Entities & Deep AI Knowledge ({objects.length})
          </h3>
        </div>
        {inferenceTimeMs !== undefined && (
          <span className="text-[11px] font-mono text-neon-cyan/80 bg-neon-cyan/10 px-2.5 py-1 rounded-full border border-neon-cyan/30">
            Inference: {inferenceTimeMs}ms
          </span>
        )}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {objects.map((obj) => {
          const isHovered = hoveredObjId === obj.id;
          const confidencePct = Math.round(obj.score * 100);

          return (
            <div
              key={obj.id}
              onMouseEnter={() => onHoverObject?.(obj.id)}
              onMouseLeave={() => onHoverObject?.(null)}
              className={`group glass-panel p-4 rounded-2xl border transition-all duration-300 space-y-3 cursor-pointer ${
                isHovered
                  ? 'border-neon-cyan shadow-neon-cyan bg-neon-cyan/10 scale-[1.02]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Header Title & Score */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-cyber-900/80 border border-white/10">
                    {getCategoryIcon(obj.category)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors flex items-center gap-1.5">
                      {obj.displayName}
                      {obj.subCategory && (
                        <span className="text-[10px] font-mono text-neon-purple px-1.5 py-0.5 rounded bg-neon-purple/20 border border-neon-purple/30">
                          {obj.subCategory}
                        </span>
                      )}
                    </h4>
                    <span className="text-[11px] font-mono text-gray-400">
                      Category: {obj.category}
                    </span>
                  </div>
                </div>

                {/* Speak / Stop Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpeak(obj);
                  }}
                  title={speakingObjId === obj.id ? 'Stop AI Voice' : 'Read Aloud with Cute AI Voice'}
                  className={`p-1.5 rounded-lg glass-panel transition-all ${
                    speakingObjId === obj.id
                      ? 'bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/60 animate-pulse shadow-neon-cyan'
                      : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/20'
                  }`}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${speakingObjId === obj.id ? 'animate-bounce' : ''}`} />
                </button>
              </div>

              {/* Confidence Meter Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-gray-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-neon-emerald" /> Confidence
                  </span>
                  <span className="font-bold text-neon-cyan">{confidencePct}%</span>
                </div>
                <div className="h-1.5 w-full bg-cyber-950 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-laser-pink transition-all duration-500"
                    style={{ width: `${confidencePct}%` }}
                  />
                </div>
              </div>

              {/* Enhanced Metadata Badges */}
              <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px] font-mono">
                {/* Color sample */}
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-cyber-900/60 border border-white/5">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/40 shadow"
                    style={{ backgroundColor: obj.colorHex || '#00f3ff' }}
                  />
                  <span className="truncate text-gray-300">{obj.colorName || 'Cyan'}</span>
                </div>

                {/* Size */}
                <div className="flex items-center gap-1 p-1.5 rounded-lg bg-cyber-900/60 border border-white/5 text-gray-300">
                  <Maximize2 className="w-3 h-3 text-neon-purple" />
                  <span>{obj.estimatedSize || 'Medium'}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 p-1.5 rounded-lg bg-cyber-900/60 border border-white/5 text-gray-300">
                  <Compass className="w-3 h-3 text-laser-pink" />
                  <span className="truncate">{obj.locationQuadrant || 'Center'}</span>
                </div>
              </div>

              {/* Deep AI Knowledge Trigger Button */}
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedKnowledgeObj(obj);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 text-neon-cyan font-mono text-[11px] font-bold hover:bg-neon-cyan/30 shadow-neon-cyan transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>DEEP AI EXPLANATION & USES</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Knowledge Dialog Modal */}
      <AIKnowledgeModal
        object={selectedKnowledgeObj}
        onClose={() => setSelectedKnowledgeObj(null)}
      />
    </div>
  );
}
