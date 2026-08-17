'use client';

import React, { useState } from 'react';
import { DetectedObject } from '@/lib/types';
import {
  Laptop,
  Cpu,
  Utensils,
  Shirt,
  Wrench,
  Dumbbell,
  Compass,
  Maximize2,
  Volume2,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Glasses,
  Box,
  Layers,
  Building,
  Car,
  FolderTree,
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
      <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-4 border border-rose-500/20 bg-rose-950/10">
        <Box className="w-12 h-12 text-rose-400 mx-auto animate-pulse" />
        <h3 className="text-lg font-bold text-rose-200">No non-living objects detected.</h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto">
          The AI vision engine completely ignores all living organisms (humans, animals, birds, plants).
          Point your camera at non-living physical objects like laptops, phones, chairs, desks, mugs, pens, tools, or backpacks.
        </p>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Electronics':
        return <Laptop className="w-4 h-4 text-neon-cyan" />;
      case 'Furniture':
        return <Box className="w-4 h-4 text-neon-purple" />;
      case 'Stationery':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'Clothing':
        return <Shirt className="w-4 h-4 text-laser-pink" />;
      case 'Kitchen':
        return <Utensils className="w-4 h-4 text-amber-400" />;
      case 'Household':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'Tool':
        return <Wrench className="w-4 h-4 text-blue-400" />;
      case 'Vehicle':
        return <Car className="w-4 h-4 text-neon-cyan" />;
      case 'Building':
        return <Building className="w-4 h-4 text-neon-purple" />;
      case 'Eyewear':
        return <Glasses className="w-4 h-4 text-laser-pink" />;
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

    soundManager.stopSpeaking();
    setSpeakingObjId(null);

    const nameToSpeak = obj.instanceLabel || obj.displayName;
    const rawSummary = obj.knowledge?.primaryUses || `Non-living physical object in category ${obj.category}.`;
    const cleanSummary = cleanForSpeech(rawSummary);
    const cleanName = cleanForSpeech(nameToSpeak);

    const started = soundManager.speakObjectKnowledge(cleanName, cleanSummary, () => {
      setSpeakingObjId(null);
    });

    if (started) {
      setSpeakingObjId(obj.id);
    } else {
      setSpeakingObjId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Result Summary Banner Panel */}
      <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-neon-cyan/30 bg-cyber-950/80 shadow-neon-cyan space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neon-cyan animate-pulse" />
              <h2 className="text-base sm:text-lg font-extrabold text-white tracking-widest uppercase font-mono">
                OBJECTS DETECTED
              </h2>
            </div>
            <p className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple font-sans">
              {objects.length} Non-Living Physical Object{objects.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {inferenceTimeMs !== undefined && (
              <span className="text-xs font-mono text-neon-cyan bg-neon-cyan/10 px-3 py-1.5 rounded-full border border-neon-cyan/40 shadow-neon-cyan">
                Inference: {inferenceTimeMs}ms
              </span>
            )}
          </div>
        </div>

        {/* Quick Ranked List Bar */}
        <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono">
          {objects.map((obj, idx) => (
            <span
              key={obj.id}
              onClick={() => setSelectedKnowledgeObj(obj)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel-interactive border border-white/10 hover:border-neon-cyan/50 text-gray-200 cursor-pointer transition-all"
            >
              <span className="text-neon-cyan font-bold">{idx + 1}.</span>
              <span>{obj.instanceLabel || obj.displayName}</span>
              <span className="text-neon-emerald font-bold">{Math.round(obj.score * 100)}%</span>
            </span>
          ))}
        </div>
      </div>

      {/* Grid of Individual Object Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {objects.map((obj, idx) => {
          const isHovered = hoveredObjId === obj.id;
          const confidencePct = Math.round(obj.score * 100);
          const nameToDisplay = obj.instanceLabel || obj.displayName;

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
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyber-900/80 border border-white/10">
                    {getCategoryIcon(obj.category)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-bold text-neon-cyan">{idx + 1}.</span>
                      <h4 className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors">
                        {nameToDisplay}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-gray-400 block">
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
                  title={speakingObjId === obj.id ? 'Stop Voice' : 'Read Aloud Object Details'}
                  className={`p-1.5 rounded-lg glass-panel transition-all ${
                    speakingObjId === obj.id
                      ? 'bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/60 animate-pulse shadow-neon-cyan'
                      : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/20'
                  }`}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${speakingObjId === obj.id ? 'animate-bounce' : ''}`} />
                </button>
              </div>

              {/* Hierarchical Breakdown Badge */}
              {obj.hierarchy && (
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neon-purple bg-neon-purple/10 px-2.5 py-1 rounded-lg border border-neon-purple/30">
                  <FolderTree className="w-3 h-3 text-neon-purple shrink-0" />
                  <span className="truncate">
                    {obj.hierarchy.category} &rarr; {obj.hierarchy.subcategory} &rarr; {obj.hierarchy.specificType}
                  </span>
                </div>
              )}

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

              {/* Metadata Badges */}
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
                  <span>TAXONOMY & NON-LIVING SPECS</span>
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
