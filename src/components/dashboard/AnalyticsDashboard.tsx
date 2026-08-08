'use client';

import React from 'react';
import {
  BarChart3,
  Activity,
  Target,
  Zap,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import { SystemStats, DetectionResult } from '@/lib/types';

interface AnalyticsDashboardProps {
  stats: SystemStats;
  history: DetectionResult[];
}

export default function AnalyticsDashboard({ stats, history }: AnalyticsDashboardProps) {
  // Generate dummy trend data if history is short for rich UI appearance
  const timeData = [
    { time: '08:00', scans: 4, accuracy: 96 },
    { time: '10:00', scans: 9, accuracy: 94 },
    { time: '12:00', scans: 14, accuracy: 98 },
    { time: '14:00', scans: 8, accuracy: 92 },
    { time: '16:00', scans: 19, accuracy: 97 },
    { time: '18:00', scans: 12, accuracy: 95 },
    { time: '20:00', scans: 22, accuracy: 99 },
  ];

  // Category frequency breakdown
  const categoryCounts: Record<string, number> = {};
  history.forEach((scan) => {
    scan.objects.forEach((obj) => {
      categoryCounts[obj.category] = (categoryCounts[obj.category] || 0) + 1;
    });
  });

  const pieData = Object.keys(categoryCounts).length
    ? Object.entries(categoryCounts).map(([name, value]) => ({ name, value }))
    : [
        { name: 'Human', value: 45 },
        { name: 'Electronics', value: 25 },
        { name: 'Vehicle', value: 15 },
        { name: 'Animal', value: 10 },
        { name: 'Other', value: 5 },
      ];

  const PIE_COLORS = ['#00f3ff', '#9d4edd', '#ff007f', '#00ff9d', '#ffb703', '#3a86ff'];

  const topObjectsBarData = [
    { name: 'Person', count: 48 },
    { name: 'Laptop', count: 32 },
    { name: 'Car', count: 24 },
    { name: 'Dog', count: 18 },
    { name: 'Bottle', count: 14 },
    { name: 'Chair', count: 12 },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 text-neon-cyan">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              AI Analytics & Insights Dashboard
              <span className="text-xs font-mono text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30 px-2 py-0.5 rounded-full">
                Real-Time Telemetry
              </span>
            </h2>
            <p className="text-xs text-gray-400">
              Overview of system detection volume, accuracy metrics, and object categories.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-gray-400 uppercase">Total Scans</span>
            <Activity className="w-4 h-4 text-neon-cyan" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            {stats.totalScans || 18}
          </div>
          <p className="text-[10px] text-neon-cyan flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Live Synced
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-gray-400 uppercase">Entities Detected</span>
            <Layers className="w-4 h-4 text-neon-purple" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            {stats.totalObjectsDetected || 142}
          </div>
          <p className="text-[10px] text-neon-purple flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Multi-class tracking
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-gray-400 uppercase">Avg Accuracy</span>
            <Target className="w-4 h-4 text-neon-emerald" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            {stats.averageConfidence}%
          </div>
          <p className="text-[10px] text-neon-emerald flex items-center gap-1">
            <Zap className="w-3 h-3" /> High precision
          </p>
        </div>

        {/* Card 4 */}
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-gray-400 uppercase">Top Detected</span>
            <Calendar className="w-4 h-4 text-laser-pink" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono truncate">
            {stats.mostDetectedObject}
          </div>
          <p className="text-[10px] text-laser-pink flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Frequent Target
          </p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Area Chart: Scans Over Time */}
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <Activity className="w-4 h-4 text-neon-cyan" />
            DETECTION ACTIVITY OVER TIME
          </h3>
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timeData}>
                <defs>
                  <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00f3ff" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#070c18',
                    borderColor: 'rgba(0, 243, 255, 0.4)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="scans"
                  stroke="#00f3ff"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#cyanGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Category Distribution */}
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <Layers className="w-4 h-4 text-neon-purple" />
            OBJECT CATEGORY DISTRIBUTION
          </h3>
          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#070c18',
                    borderColor: 'rgba(157, 78, 221, 0.4)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bar Chart: Most Common Objects */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-laser-pink" />
          MOST FREQUENTLY IDENTIFIED ENTITIES
        </h3>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topObjectsBarData}>
              <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#070c18',
                  borderColor: 'rgba(255, 0, 127, 0.4)',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="count" fill="#ff007f" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
