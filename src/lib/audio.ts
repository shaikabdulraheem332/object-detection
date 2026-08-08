class SoundManager {
  private audioCtx: AudioContext | null = null;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private currentlySpeakingText: string | null = null;
  public isSpeaking: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    // Prioritize female / girl English voices across platforms
    const femaleKeywords = [
      'female', 'girl', 'zira', 'samantha', 'victoria', 
      'karen', 'fiona', 'google us english female',
      'google uk english female', 'jenny', 'aria', 'natasha', 'moira', 'veena',
      'microsoft zira', 'microsoft heera', 'microsoft gayatri'
    ];

    let found = voices.find(v => {
      const name = v.name.toLowerCase();
      return femaleKeywords.some(kw => name.includes(kw));
    });

    // Fallback to any en-US or English voice
    if (!found) {
      found = voices.find(v => v.lang.startsWith('en'));
    }

    if (found) {
      this.selectedVoice = found;
    }
  }

  private init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playShutterSound() {
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio playback quiet fallback
    }
  }

  playDetectionPing() {
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1046.5, this.audioCtx.currentTime); // C6 note
      osc.frequency.exponentialRampToValueAtTime(1318.5, this.audioCtx.currentTime + 0.12); // E6 note

      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.12);
    } catch (e) {
      // Audio fallback
    }
  }

  stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    this.currentlySpeakingText = null;
  }

  speakText(text: string, pitch = 1.0, rate = 1.0, onEnd?: () => void): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;

    // Toggle off if already speaking this exact text
    if (this.isSpeaking && this.currentlySpeakingText === text && window.speechSynthesis.speaking) {
      this.stopSpeaking();
      return false; // Now stopped
    }

    this.stopSpeaking(); // Cancel any existing speech

    const utterance = new SpeechSynthesisUtterance(text);
    this.initVoices();
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    utterance.pitch = pitch; // Neutral pitch for clear information delivery
    utterance.rate = rate;   // Normal pacing

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentlySpeakingText = null;
      onEnd?.();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.currentlySpeakingText = null;
      onEnd?.();
    };

    this.isSpeaking = true;
    this.currentlySpeakingText = text;
    window.speechSynthesis.speak(utterance);
    return true; // Now speaking
  }

  speakObjectKnowledge(displayName: string, summary: string, onEnd?: () => void): boolean {
    const speechText = `I detected ${displayName}. Here is what I learned: ${summary}`;
    return this.speakText(speechText, 1.0, 1.0, onEnd);
  }

  isTextSpeaking(text: string): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    return window.speechSynthesis.speaking && this.currentlySpeakingText === text;
  }

  testCuteVoice() {
    this.speakText("Hello! I am your AI vision voice assistant. I am ready to detect people, birds, animals, and objects for you!", 1.0, 1.0);
  }
}

export const soundManager = new SoundManager();


