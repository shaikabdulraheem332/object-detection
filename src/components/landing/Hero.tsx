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
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onSelectTab: (tab: string) => void;
}

export default function Hero({ onSelectTab }: HeroProps) {
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
          <span>REAL-TIME AI OBJECT DETECTION ENGINE v5.0</span>
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
          See the World Through <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple text-neon-glow-cyan">
            Artificial Intelligence
          </span>
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed"
        >
          Instantly detect and identify physical objects in photos, videos, and live camera feeds with high precision and neural network performance.
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

        {/* Feature Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 text-left"
        >
          <div className="glass-panel p-4 rounded-2xl space-y-2 border border-white/10">
            <Cpu className="w-6 h-6 text-neon-cyan" />
            <h3 className="text-sm font-bold text-white">Browser Local AI</h3>
            <p className="text-xs text-gray-400">100% Client-side TFJS inference for instant zero-latency detection.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl space-y-2 border border-white/10">
            <Target className="w-6 h-6 text-neon-purple" />
            <h3 className="text-sm font-bold text-white">Bounding Box HUD</h3>
            <p className="text-xs text-gray-400">Glowing neon target crosshairs with real-time confidence scores.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl space-y-2 border border-white/10">
            <Layers className="w-6 h-6 text-laser-pink" />
            <h3 className="text-sm font-bold text-white">Color & Size Analysis</h3>
            <p className="text-xs text-gray-400">Extracts ROI dominant colors, quad spatial placement & sizes.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl space-y-2 border border-white/10">
            <ShieldCheck className="w-6 h-6 text-neon-emerald" />
            <h3 className="text-sm font-bold text-white">Private & Secure</h3>
            <p className="text-xs text-gray-400">No media uploaded to servers. All image processing stays on device.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
