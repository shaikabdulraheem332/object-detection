'use client';

import React, { useState } from 'react';
import {
  Eye,
  Camera,
  Upload,
  Radio,
  BarChart3,
  History,
  Settings,
  Menu,
  X,
  Volume2,
  VolumeX,
  Zap,
} from 'lucide-react';
import { soundManager } from '@/lib/audio';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onOpenSettings: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  soundEnabled,
  setSoundEnabled,
  onOpenSettings,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Eye },
    { id: 'camera', label: 'Camera', icon: Camera },
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'live', label: 'Live AI', icon: Radio },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'history', label: 'History', icon: History },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    if (soundEnabled) {
      soundManager.playDetectionPing();
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) soundManager.playDetectionPing();
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/30 border border-neon-cyan/50 shadow-neon-cyan group-hover:scale-105 transition-transform duration-300">
              <Eye className="w-5 h-5 text-neon-cyan group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-neon-cyan/10 animate-ping opacity-20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple font-sans">
                AI VISION
              </span>
              <span className="text-[10px] tracking-widest text-cyan-400/80 font-mono -mt-1 flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 text-neon-cyan" /> 3D OBJECT ENGINE
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-cyber-900/60 p-1.5 rounded-full border border-white/10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/30 text-neon-cyan border border-neon-cyan/40 shadow-neon-cyan'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-neon-cyan' : 'text-gray-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Audio Switch */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Sounds' : 'Enable Audio Feedback'}
              className="p-2.5 rounded-xl glass-panel-interactive text-gray-300 hover:text-neon-cyan transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-neon-cyan" />
              ) : (
                <VolumeX className="w-4 h-4 text-gray-500" />
              )}
            </button>

            {/* Settings Trigger */}
            <button
              onClick={onOpenSettings}
              title="System Settings"
              className="p-2.5 rounded-xl glass-panel-interactive text-gray-300 hover:text-neon-cyan transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Quick Action Button */}
            <button
              onClick={() => handleNavClick('live')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-950 font-bold text-xs shadow-neon-cyan hover:brightness-110 active:scale-95 transition-all"
            >
              <Radio className="w-4 h-4 animate-pulse" />
              <span>LIVE AI</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl glass-panel-interactive text-gray-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-neon-cyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan border border-neon-cyan/40'
                      : 'bg-cyber-900/40 text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-neon-cyan' : 'text-gray-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => handleNavClick('live')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-950 font-bold text-xs shadow-neon-cyan"
            >
              <Radio className="w-4 h-4 animate-pulse" />
              <span>START LIVE AI DETECTION</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
