import { DetectionResult, DetectionSettings, SystemStats } from './types';

const STORAGE_KEYS = {
  HISTORY: 'ai_vision_history',
  SETTINGS: 'ai_vision_settings',
  STATS: 'ai_vision_stats',
};

export const DEFAULT_SETTINGS: DetectionSettings = {
  confidenceThreshold: 0.5,
  boxColorTheme: 'cyan',
  soundEnabled: true,
  speechEnabled: false,
  cameraResolution: '720p',
  inferenceSpeed: 'fast',
};

export const DEFAULT_STATS: SystemStats = {
  totalScans: 0,
  totalObjectsDetected: 0,
  mostDetectedObject: 'Person',
  averageConfidence: 94.5,
  todayScansCount: 0,
};

export function getStoredSettings(): DetectionSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: DetectionSettings): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch {
    // Fail safe
  }
}

export function getStoredHistory(): DetectionResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveDetectionToHistory(result: DetectionResult): void {
  if (typeof window === 'undefined') return;
  try {
    const history = getStoredHistory();
    // Keep max 50 recent items
    const updated = [result, ...history].slice(0, 50);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
    updateStatsOnNewResult(result);
  } catch {
    // Storage quota fallback
  }
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  } catch {
    // Fail safe
  }
}

export function deleteHistoryItem(id: string): DetectionResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const history = getStoredHistory();
    const updated = history.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
    return updated;
  } catch {
    return getStoredHistory();
  }
}

export function getStoredStats(): SystemStats {
  if (typeof window === 'undefined') return DEFAULT_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STATS);
    const history = getStoredHistory();

    if (!raw && history.length > 0) {
      return recalculateStatsFromHistory(history);
    }
    return raw ? JSON.parse(raw) : DEFAULT_STATS;
  } catch {
    return DEFAULT_STATS;
  }
}

function updateStatsOnNewResult(result: DetectionResult): void {
  const currentStats = getStoredStats();
  const history = getStoredHistory();
  const updatedStats = recalculateStatsFromHistory(history, currentStats);
  try {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updatedStats));
  } catch {
    // Fail safe
  }
}

function recalculateStatsFromHistory(history: DetectionResult[], baseStats?: SystemStats): SystemStats {
  const totalScans = history.length;
  let totalObjects = 0;
  let totalConfidenceSum = 0;
  const countsMap: Record<string, number> = {};

  const todayStr = new Date().toDateString();
  let todayCount = 0;

  history.forEach((scan) => {
    if (new Date(scan.timestamp).toDateString() === todayStr) {
      todayCount++;
    }
    scan.objects.forEach((obj) => {
      totalObjects++;
      totalConfidenceSum += obj.score;
      countsMap[obj.displayName] = (countsMap[obj.displayName] || 0) + 1;
    });
  });

  let topObj = 'Person';
  let maxCount = 0;
  Object.entries(countsMap).forEach(([name, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topObj = name;
    }
  });

  const avgConf = totalObjects > 0 ? (totalConfidenceSum / totalObjects) * 100 : 94.5;

  return {
    totalScans: Math.max(totalScans, baseStats?.totalScans || 0),
    totalObjectsDetected: Math.max(totalObjects, baseStats?.totalObjectsDetected || 0),
    mostDetectedObject: topObj,
    averageConfidence: Math.round(avgConf * 10) / 10,
    todayScansCount: todayCount,
  };
}
