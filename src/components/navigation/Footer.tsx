'use client';

import React from 'react';
import { Box, Zap, Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full glass-panel border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400 font-mono">
        {/* Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center text-neon-cyan">
            <Box className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-bold text-white font-sans tracking-wide">NON-LIVING OBJECT DETECTION AI</span>
            <p className="text-[10px] text-gray-500">Dedicated Non-Living Physical Object Detection System</p>
          </div>
        </div>

        {/* Engine Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-900 border border-neon-cyan/30 text-neon-cyan text-[11px]">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
          <span>STRICT LIVING FILTER: ACTIVE</span>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-1 text-[11px]">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-laser-pink fill-laser-pink" />
          <span>for High-Accuracy Object Identification</span>
        </div>
      </div>
    </footer>
  );
}
