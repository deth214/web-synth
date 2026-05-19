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
};