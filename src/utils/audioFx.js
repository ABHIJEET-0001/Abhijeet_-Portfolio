/**
 * F1 Web Audio Sound Synthesizer
 * Pure browser-native sound generation without external asset dependencies.
 */

class F1AudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.hasInteracted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  setMuted(val) {
    this.isMuted = val;
  }

  // Realistic F1 V6 Turbo Hybrid Throttle Blip / Flyby
  playEngineRev() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Sawtooth wave for aggressive engine sound
      osc1.type = 'sawtooth';
      osc2.type = 'triangle';

      // Pitch sweep simulating upshift / rev (120Hz -> 850Hz -> 300Hz)
      osc1.frequency.setValueAtTime(140, now);
      osc1.frequency.exponentialRampToValueAtTime(750, now + 0.35);
      osc1.frequency.exponentialRampToValueAtTime(320, now + 0.8);

      osc2.frequency.setValueAtTime(280, now);
      osc2.frequency.exponentialRampToValueAtTime(1500, now + 0.35);
      osc2.frequency.exponentialRampToValueAtTime(640, now + 0.8);

      // Lowpass filter for engine rumble
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, now);
      filter.frequency.linearRampToValueAtTime(3200, now + 0.35);
      filter.frequency.linearRampToValueAtTime(800, now + 0.8);

      // Envelope
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(0.22, now + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.85);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.85);
      osc2.stop(now + 0.85);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  // High-pitch aerodynamic DRS wing activation beep
  playDrsBeep() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1760, now); // A6 note
      osc.frequency.setValueAtTime(2349, now + 0.08); // D7 note

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {
      console.warn(e);
    }
  }

  // F1 5 Red Lights sequence single beep
  playLightBeep(isFinal = false) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = isFinal ? 'square' : 'sine';
      const freq = isFinal ? 1200 : 700;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(isFinal ? 0.25 : 0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (isFinal ? 0.4 : 0.15));

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + (isFinal ? 0.4 : 0.15));
    } catch (e) {
      console.warn(e);
    }
  }

  // Pit Radio transmission static + chirp
  playRadioChirp() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.16);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {
      console.warn(e);
    }
  }

  // Victory Fanfare / Podium Finish sound
  playPodiumVictory() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const now = this.ctx.currentTime + idx * 0.12;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
      });
    } catch (e) {
      console.warn(e);
    }
  }
}

export const f1Audio = new F1AudioEngine();
