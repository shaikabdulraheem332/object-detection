'use client';

import React, { useState } from 'react';
import {
  History as HistoryIcon,
  Search,
  Trash2,
  Download,
  Calendar,
  Layers,
  Sparkles,
  Eye,
  Filter,
} from 'lucide-react';
import { DetectionResult } from '@/lib/types';
import { clearHistory, deleteHistoryItem } from '@/lib/storage';

interface HistoryManagerProps {
  history: DetectionResult[];
  setHistory: React.Dispatch<React.SetStateAction<DetectionResult[]>>;
}

export default function HistoryManager({ history, setHistory }: HistoryManagerProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItemDetails, setActiveItemDetails] = useState<DetectionResult | null>(null);

  const categories = ['All', 'Human', 'Animal', 'Vehicle', 'Electronics', 'Food', 'Furniture', 'Tool'];

  const filteredHistory = history.filter((item) => {
    const matchesSearch = item.objects.some((obj) =>
      obj.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesCategory =
      selectedCategory === 'All' || item.objects.some((obj) => obj.category === selectedCategory);

    return (matchesSearch || !searchTerm) && matchesCategory;
  });

  const handleDelete = (id: string) => {
    const updated = deleteHistoryItem(id);
    setHistory(updated);
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all detection scan history?')) {
      clearHistory();
      setHistory([]);
    }
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(history, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-vision-history-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 text-neon-cyan">
            <HistoryIcon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Detection History Log
              <span className="text-xs font-mono text-neon-purple bg-neon-purple/10 border border-neon-purple/30 px-2.5 py-0.5 rounded-full">
                {history.length} Saved Scans
              </span>
            </h2>
            <p className="text-xs text-gray-400">
              Browse, search, and manage your previously captured object detection scans.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {history.length > 0 && (
            <>
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-interactive text-xs font-semibold text-gray-300 hover:text-neon-cyan"
              >
                <Download className="w-4 h-4" />
                <span>Export JSON</span>
              </button>

              <button
                onClick={handleClearAll}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-laser-pink text-xs font-semibold border border-laser-pink/40 hover:bg-laser-pink/10"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search detected object name (e.g. Person, Dog, Laptop)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl glass-panel border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 shadow-neon-cyan'
                  : 'glass-panel text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredHistory.length === 0 && (
        <div className="glass-panel p-12 rounded-3xl text-center space-y-4 border border-white/10">
          <HistoryIcon className="w-12 h-12 text-gray-500 mx-auto animate-pulse" />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">No Detection Logs Found</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Scan images using Camera, Image Upload, or Live AI to start logging items here.
            </p>
          </div>
        </div>
      )}

      {/* History Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHistory.map((item) => {
          const formattedDate = new Date(item.timestamp).toLocaleString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <div
              key={item.id}
              className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3 hover:border-neon-cyan/40 transition-all group"
            >
              {/* Thumbnail & Source Badge */}
              <div className="relative h-40 w-full rounded-xl overflow-hidden bg-cyber-950 border border-white/5">
                {item.thumbnailUrl ? (
                  <img
                    src={item.thumbnailUrl}
                    alt="Scan thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <Eye className="w-8 h-8" />
                  </div>
                )}

                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-cyber-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neon-cyan uppercase">
                  {item.sourceType}
                </div>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-cyber-950/80 text-gray-400 hover:text-laser-pink hover:bg-laser-pink/20 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Date & Object Count */}
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-neon-purple" /> {formattedDate}
                </span>
                <span className="text-neon-cyan font-bold">{item.totalObjectsCount} objects</span>
              </div>

              {/* Detected Tags Pills */}
              <div className="flex flex-wrap gap-1.5">
                {item.objects.map((obj, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-cyber-900 border border-white/10 text-[10px] font-mono text-gray-200"
                  >
                    {obj.displayName} <strong className="text-neon-cyan">{Math.round(obj.score * 100)}%</strong>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
