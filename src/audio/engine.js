import { createVoice } from "./voice.js";

export function createAudioEngine() {
  let audioCtx;
  const activeVoices = new Map(); // key: noteId → voice

  return {
    async init() {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    },

    playNote(freq, id = freq) {
      const voice = createVoice(audioCtx, freq);
      activeVoices.set(id, voice);
      voice.start();
    },

    stopNote(id = null) {
      if (id !== null) {
        const voice = activeVoices.get(id);
        if (voice) {
          voice.stop();
          activeVoices.delete(id);
        }
      }
    }
  };
}