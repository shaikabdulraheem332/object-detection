'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import FuturisticScene from '@/components/3d/FuturisticScene';
import Hero from '@/components/landing/Hero';
import CameraDetector from '@/components/detector/CameraDetector';
import ImageDetector from '@/components/detector/ImageDetector';
import VideoDetector from '@/components/detector/VideoDetector';
import LiveStreamDetector from '@/components/detector/LiveStreamDetector';
import AnalyticsDashboard from '@/components/dashboard/AnalyticsDashboard';
import HistoryManager from '@/components/history/HistoryManager';
import SettingsModal from '@/components/settings/SettingsModal';
import { DetectionResult, DetectionSettings, SystemStats } from '@/lib/types';
import {
  DEFAULT_SETTINGS,
  DEFAULT_STATS,
  getStoredHistory,
  getStoredSettings,
  getStoredStats,
  saveDetectionToHistory,
} from '@/lib/storage';
import { Camera, Image as ImageIcon, Video, Radio, Eye } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [uploadSubTab, setUploadSubTab] = useState<'image' | 'video'>('image');
  const [settings, setSettings] = useState<DetectionSettings>(DEFAULT_SETTINGS);
  const [stats, setStats] = useState<SystemStats>(DEFAULT_STATS);
  const [history, setHistory] = useState<DetectionResult[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  useEffect(() => {
    setSettings(getStoredSettings());
    setHistory(getStoredHistory());
    setStats(getStoredStats());
  }, []);

  const handleSaveResult = (result: DetectionResult) => {
    saveDetectionToHistory(result);
    const updatedHistory = getStoredHistory();
    setHistory(updatedHistory);
    setStats(getStoredStats());
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* 3D Interactive WebGL Scene */}
      <FuturisticScene />

      {/* Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto w-full">
        {activeTab === 'home' && <Hero onSelectTab={setActiveTab} />}

        {activeTab === 'camera' && (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <CameraDetector settings={settings} onSaveToHistory={handleSaveResult} />
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
            {/* Image / Video Sub-tab selector */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10">
                <button
                  onClick={() => setUploadSubTab('image')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    uploadSubTab === 'image'
                      ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan border border-neon-cyan/40 shadow-neon-cyan'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>IMAGE FILE</span>
                </button>

                <button
                  onClick={() => setUploadSubTab('video')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    uploadSubTab === 'video'
                      ? 'bg-gradient-to-r from-laser-pink/20 to-neon-purple/20 text-laser-pink border border-laser-pink/40 shadow-neon-pink'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span>VIDEO FILE</span>
                </button>
              </div>
            </div>

            {uploadSubTab === 'image' ? (
              <ImageDetector settings={settings} onSaveToHistory={handleSaveResult} />
            ) : (
              <VideoDetector settings={settings} onSaveToHistory={handleSaveResult} />
            )}
          </div>
        )}

        {activeTab === 'live' && (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <LiveStreamDetector settings={settings} onSaveToHistory={handleSaveResult} />
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="animate-in fade-in duration-300">
            <AnalyticsDashboard stats={stats} history={history} />
          </div>
        )}

        {activeTab === 'history' && (
          <div className="animate-in fade-in duration-300">
            <HistoryManager history={history} setHistory={setHistory} />
          </div>
        )}
      </main>

      {/* Settings Dialog */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        setSettings={setSettings}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
