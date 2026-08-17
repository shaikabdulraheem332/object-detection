'use client';

import React from 'react';
import {
  Camera,
  Upload,
  Video,
  Radio,
  Sparkles,
  ShieldCheck,
  Target,
  Layers,
  Cpu,
  EyeOff,
  Box,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onSelectTab: (tab: string) => void;
}

export default function Hero({ onSelectTab }: HeroProps) {
  const nonLivingCategoryPills = [
    'Mobile Phones', 'Laptops', 'Office Chairs', 'Desks', 'Water Bottles',
    'Ballpoint Pens', 'Headphones', 'Backpacks', 'Table Lamps', 'Monitors',
    'Keyboards', 'Books', 'Sneakers', 'Sunglasses', 'Vehicles', 'Tools',
    'Kitchen Utensils', 'Household Items', 'Traffic Signs', 'Buildings'
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      
      {/* Glow Halo Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-neon-cyan/20 via-neon-purple/20 to-laser-pink/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">

        {/* AI Tech Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-neon-cyan/40 shadow-neon-cyan text-xs font-mono text-neon-cyan"
        >
          <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse" />
          <span>NON-LIVING OBJECT DETECTION SYSTEM v5.0</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Dedicated AI for <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple text-neon-glow-cyan">
            Non-Living Physical Objects
          </span>
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed"
        >
          Instantly detect and identify <strong className="text-neon-cyan">EVERY non-living physical item</strong> in photos, videos, and camera streams.
          Automatically <strong className="text-rose-400">ignores all living organisms</strong> (humans, animals, birds, insects, plants, and biological items).
        </motion.p>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4"
        >
          {/* Open Camera */}
          <button
            onClick={() => onSelectTab('camera')}
            className="group relative flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-neon-cyan to-blue-600 text-cyber-950 font-bold text-sm shadow-neon-cyan hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>OPEN CAMERA</span>
            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Upload Image */}
          <button
            onClick={() => onSelectTab('upload')}
            className="group flex items-center gap-2.5 px-6 py-4 rounded-2xl glass-panel-interactive text-white font-semibold text-sm hover:border-neon-purple/60 hover:text-neon-purple"
          >
            <Upload className="w-5 h-5 text-neon-purple group-hover:-translate-y-0.5 transition-transform" />
            <span>UPLOAD IMAGE</span>
          </button>

          {/* Upload Video */}
          <button
            onClick={() => onSelectTab('upload')}
            className="group flex items-center gap-2.5 px-6 py-4 rounded-2xl glass-panel-interactive text-white font-semibold text-sm hover:border-laser-pink/60 hover:text-laser-pink"
          >
            <Video className="w-5 h-5 text-laser-pink group-hover:scale-110 transition-transform" />
            <span>UPLOAD VIDEO</span>
          </button>

          {/* Live AI Detection */}
          <button
            onClick={() => onSelectTab('live')}
            className="group flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-cyber-900/80 border border-neon-cyan/50 text-neon-cyan font-bold text-sm hover:bg-neon-cyan/10 hover:shadow-neon-cyan transition-all"
          >
            <Radio className="w-5 h-5 text-neon-cyan animate-pulse" />
            <span>LIVE STREAM AI</span>
          </button>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6"
        >
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
            SPECIFIC NON-LIVING OBJECT CATEGORIES
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {nonLivingCategoryPills.map((pill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg glass-panel text-[11px] font-mono text-gray-300 border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 text-left"
        >
          <div className="glass-panel p-4 rounded-2xl space-y-2 border border-rose-500/20 bg-rose-950/10">
            <EyeOff className="w-6 h-6 text-rose-400" />
            <h3 className="text-sm font-bold text-white">Living-Thing Filter</h3>
            <p className="text-xs text-gray-400">Strict stage filtering completely excludes humans, animals, birds, insects, and plants.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl space-y-2 border border-neon-cyan/20">
            <Box className="w-6 h-6 text-neon-cyan" />
            <h3 className="text-sm font-bold text-white">Every Object Detection</h3>
            <p className="text-xs text-gray-400">Detects every single visible non-living physical item individually with bounding boxes.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl space-y-2 border border-neon-purple/20">
            <Target className="w-6 h-6 text-neon-purple" />
            <h3 className="text-sm font-bold text-white">Specific Object Naming</h3>
            <p className="text-xs text-gray-400">Uses accurate names: "Mobile Phone", "Office Chair", "Water Bottle", "Ballpoint Pen", "Sneaker".</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl space-y-2 border border-neon-emerald/20">
            <Layers className="w-6 h-6 text-neon-emerald" />
            <h3 className="text-sm font-bold text-white">Hierarchical Taxonomy</h3>
            <p className="text-xs text-gray-400">Taxonomy breakdown from Category to Subcategory to Specific Physical Object.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
