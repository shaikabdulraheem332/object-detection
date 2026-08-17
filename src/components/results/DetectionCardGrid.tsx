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
      <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-4 border border-neon-cyan/20 bg-cyber-950/80">
        <Box className="w-12 h-12 text-neon-cyan mx-auto animate-pulse" />
        <h3 className="text-lg font-bold text-white">No objects detected.</h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto">
          Point your camera or select an image to scan physical objects like laptops, phones, chairs, desks, mugs, pens, tools, or vehicles with AI vision.
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
    const rawSummary = obj.knowledge?.primaryUses || `Physical object in category ${obj.category}.`;
    const cleanSummary = cleanForSpeech(rawSummary);
    const cleanName = cleanForSpeech(nameToSpeak);

    const started = soundManager.speakObjectKnowledge(cleanName, cleanSummary, () => {
      setSpeakingObjId(obj.id);
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
              {objects.length} Physical Object{objects.length !== 1 ? 's' : ''} Detected
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

      {/* Grid of Object Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {objects.map((obj, idx) => {
          const isHovered = hoveredObjId === obj.id;

          return (
            <div
              key={obj.id}
              onMouseEnter={() => onHoverObject && onHoverObject(obj.id)}
              onMouseLeave={() => onHoverObject && onHoverObject(null)}
              className={`glass-panel p-5 rounded-3xl space-y-4 border transition-all duration-300 ${
                isHovered
                  ? 'border-laser-pink scale-[1.02] shadow-neon-pink bg-cyber-900/90'
                  : 'border-white/10 hover:border-neon-cyan/50 hover:bg-cyber-900/60'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-neon-cyan">
                      {idx + 1}.
                    </span>
                    <h3 className="text-base font-bold text-white capitalize leading-tight">
                      {obj.instanceLabel || obj.displayName}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-400 flex items-center gap-1.5 font-mono">
                    {getCategoryIcon(obj.category)}
                    <span>Category: {obj.category}</span>
                  </p>
                </div>

                {/* Audio voice synthesizer trigger */}
                <button
                  onClick={() => handleSpeak(obj)}
                  title="Listen to Object AI Summary"
                  className={`p-2 rounded-xl border transition-all ${
                    speakingObjId === obj.id
                      ? 'bg-laser-pink/20 text-laser-pink border-laser-pink/50 animate-pulse'
                      : 'glass-panel-interactive text-gray-400 hover:text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Taxonomy Breadcrumb */}
              {obj.hierarchy && (
                <div className="px-3 py-2 rounded-xl bg-cyber-950/80 border border-white/10 text-[11px] font-mono text-neon-cyan flex items-center gap-1 truncate">
                  <FolderTree className="w-3.5 h-3.5 shrink-0 text-neon-purple" />
                  <span className="truncate">
                    {obj.hierarchy.category} &rarr; {obj.hierarchy.subcategory} &rarr; {obj.hierarchy.specificType}
                  </span>
                </div>
              )}

              {/* Score confidence bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">Confidence</span>
                  <span className="text-neon-emerald font-bold">
                    {Math.round(obj.score * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-cyber-950 overflow-hidden p-0.5 border border-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-emerald to-laser-pink transition-all duration-500"
                    style={{ width: `${Math.max(5, Math.round(obj.score * 100))}%` }}
                  />
                </div>
              </div>

              {/* Metadata tags */}
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono">
                {obj.colorName && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyber-950 border border-white/10 text-gray-300">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/30"
                      style={{ backgroundColor: obj.colorHex || '#00f3ff' }}
                    />
                    <span>{obj.colorName}</span>
                  </span>
                )}

                {obj.estimatedSize && (
                  <span className="px-2.5 py-1 rounded-lg bg-cyber-950 border border-white/10 text-gray-300 flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-neon-purple" />
                    <span>{obj.estimatedSize}</span>
                  </span>
                )}

                {obj.locationQuadrant && (
                  <span className="px-2.5 py-1 rounded-lg bg-cyber-950 border border-white/10 text-gray-300 flex items-center gap-1">
                    <Compass className="w-3 h-3 text-neon-cyan" />
                    <span>{obj.locationQuadrant}</span>
                  </span>
                )}
              </div>

              {/* Action Button for AI Knowledge Modal */}
              <button
                onClick={() => setSelectedKnowledgeObj(obj)}
                className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-neon-cyan/10 via-neon-purple/20 to-laser-pink/10 border border-neon-cyan/40 text-neon-cyan font-mono font-bold text-xs hover:border-neon-cyan hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>TAXONOMY &amp; AI SPECS</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Deep Knowledge Breakdown Modal */}
      {selectedKnowledgeObj && (
        <AIKnowledgeModal
          object={selectedKnowledgeObj}
          onClose={() => setSelectedKnowledgeObj(null)}
        />
      )}
    </div>
  );
}
