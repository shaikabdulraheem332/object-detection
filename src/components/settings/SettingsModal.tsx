'use client';

import React from 'react';
import {
  X,
  Sliders,
  Volume2,
  VolumeX,
  Palette,
  Camera,
  Cpu,
  RotateCcw,
  Sparkles,
  Speech,
  Key,
} from 'lucide-react';
import { DetectionSettings } from '@/lib/types';
import { DEFAULT_SETTINGS, saveSettings } from '@/lib/storage';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: DetectionSettings;
  setSettings: React.Dispatch<React.SetStateAction<DetectionSettings>>;
}

export default function SettingsModal({
  isOpen,
  onClose,
  settings,
  setSettings,
}: SettingsModalProps) {
  if (!isOpen) return null;

  const updateSetting = <K extends keyof DetectionSettings>(key: K, value: DetectionSettings[K]) => {
    const updated = { ...settings, [key]: value };
    setSettings(updated);
    saveSettings(updated);
  };

  const handleReset = () => {
    setSettings(DEFAULT_SETTINGS);
    saveSettings(DEFAULT_SETTINGS);
  };

  const themes: { id: DetectionSettings['boxColorTheme']; label: string; color: string }[] = [
    { id: 'cyan', label: 'Neon Cyan', color: '#00f3ff' },
    { id: 'purple', label: 'Purple Glow', color: '#9d4edd' },
    { id: 'emerald', label: 'Emerald Laser', color: '#00ff9d' },
    { id: 'amber', label: 'Amber Cyber', color: '#ffb703' },
    { id: 'pink', label: 'Laser Pink', color: '#ff007f' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel p-6 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-neon-cyan" />
            <h3 className="text-lg font-bold text-white font-mono">System Preferences</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-panel-interactive text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-xs">
          {/* Custom Gemini API Key */}
          <div className="space-y-2">
            <label className="text-gray-300 font-bold flex items-center gap-1.5 font-mono">
              <Key className="w-3.5 h-3.5 text-neon-amber" /> Google Gemini API Key (Optional)
            </label>
            <input
              type="password"
              placeholder="Enter your Google Gemini API key (AQ... or AIzaSy...)"
              value={settings.customApiKey || ''}
              onChange={(e) => updateSetting('customApiKey', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-cyber-900 border border-white/10 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan"
            />
            <p className="text-[11px] text-gray-500">
              Gemini AI Engine is permanently active. Enter your custom API key if you want to use your personal quota.
            </p>
          </div>

          {/* Confidence Slider */}
          <div className="space-y-2">
            <div className="flex justify-between font-mono">
              <span className="text-gray-300 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-neon-cyan" /> Minimum Confidence Threshold
              </span>
              <span className="text-neon-cyan font-bold">
                {Math.round(settings.confidenceThreshold * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0.2"
              max="0.9"
              step="0.05"
              value={settings.confidenceThreshold}
              onChange={(e) => updateSetting('confidenceThreshold', parseFloat(e.target.value))}
              className="w-full h-2 bg-cyber-900 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
            />
            <p className="text-[11px] text-gray-500">
              Higher values filter out low probability detections for cleaner results.
            </p>
          </div>

          {/* Color Theme */}
          <div className="space-y-2">
            <span className="text-gray-300 font-bold flex items-center gap-1.5 font-mono">
              <Palette className="w-3.5 h-3.5 text-neon-purple" /> Bounding Box Neon Theme
            </span>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((th) => (
                <button
                  key={th.id}
                  onClick={() => updateSetting('boxColorTheme', th.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-left font-mono transition-all ${settings.boxColorTheme === th.id
                      ? 'border-neon-cyan bg-neon-cyan/10 text-white shadow-neon-cyan'
                      : 'glass-panel text-gray-400 hover:text-white'
                    }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-white/40"
                    style={{ backgroundColor: th.color }}
                  />
                  <span>{th.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Camera Resolution */}
          <div className="space-y-2">
            <span className="text-gray-300 font-bold flex items-center gap-1.5 font-mono">
              <Camera className="w-3.5 h-3.5 text-laser-pink" /> WebRTC Camera Quality
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(['auto', '720p', '1080p'] as const).map((res) => (
                <button
                  key={res}
                  onClick={() => updateSetting('cameraResolution', res)}
                  className={`p-2.5 rounded-xl border font-mono uppercase transition-all ${settings.cameraResolution === res
                      ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                      : 'glass-panel text-gray-400 hover:text-white'
                    }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles (Sound & Speech) */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
              className={`flex items-center justify-between p-3 rounded-2xl border font-mono transition-all ${settings.soundEnabled
                  ? 'border-neon-emerald bg-neon-emerald/10 text-neon-emerald'
                  : 'glass-panel text-gray-400'
                }`}
            >
              <span className="flex items-center gap-2">
                {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                Sound FX
              </span>
              <span className="text-[10px] uppercase">{settings.soundEnabled ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={() => updateSetting('speechEnabled', !settings.speechEnabled)}
              className={`flex items-center justify-between p-3 rounded-2xl border font-mono transition-all ${settings.speechEnabled
                  ? 'border-neon-purple bg-neon-purple/10 text-neon-purple'
                  : 'glass-panel text-gray-400'
                }`}
            >
              <span className="flex items-center gap-2">
                <Speech className="w-4 h-4" /> Voice Reader
              </span>
              <span className="text-[10px] uppercase">{settings.speechEnabled ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs font-mono"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-950 font-bold text-xs shadow-neon-cyan hover:scale-105 transition-transform"
          >
            SAVE PREFERENCES
          </button>
        </div>
      </div>
    </div>
  );
}
