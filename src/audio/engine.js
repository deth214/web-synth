export function createAudioEngine() {
  let audioCtx;
  let osc;
  let gain;

  return {
    async init() {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    },

    playNote(freq) {
      osc = audioCtx.createOscillator();
      gain = audioCtx.createGain();

      osc.type = "sawtooth";
      osc.frequency.value = freq;

      gain.gain.value = 0.2;

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
    },

    stopNote() {
      if (osc) {
        osc.stop();
        osc.disconnect();
      }
    }
  };
}