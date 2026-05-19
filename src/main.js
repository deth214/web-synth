import { createAudioEngine } from "./audio/engine.js";

let engine;

document.getElementById("start").onclick = async () => {
  engine = createAudioEngine();
  await engine.init();
};

window.playTest = () => {
  engine.playNote(440);
};

window.stopTest = () => {
  engine.stopNote();

window.playTestChord = () => {
  engine.playNote(261.63, "C");
  engine.playNote(329.63, "E");
  engine.playNote(392.00, "G");
};

window.stopTestChord = () => {
  engine.stopNote("C");
  engine.stopNote("E");
  engine.stopNote("G");
};