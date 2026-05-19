export function createVoice(audioCtx, freq) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sawtooth";
  osc.frequency.value = freq;

  gain.gain.value = 0.15;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  return {
    start() {
      osc.start();
    },

    stop() {
      osc.stop();
      osc.disconnect();
      gain.disconnect();
    }
  };
}