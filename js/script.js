const sounds = {
  C: new Audio("sounds/C.mp3"),
  "C#": new Audio("sounds/Cs.mp3"),
  D: new Audio("sounds/D.mp3"),
  "D#": new Audio("sounds/Ds.mp3"),
  E: new Audio("sounds/E.mp3"),
  F: new Audio("sounds/F.mp3"),
  "F#": new Audio("sounds/Fs.mp3"),
  G: new Audio("sounds/G.mp3"),
  "G#": new Audio("sounds/Gs.mp3"),
  A: new Audio("sounds/A.mp3"),
  "A#": new Audio("sounds/As.mp3"),
  B: new Audio("sounds/B.mp3"),
};

const white_key = document.querySelectorAll(".white-key");
const black_key = document.querySelectorAll(".black-key");


function playKey(key) {
  const audio = sounds[key.id];
  audio.currentTime = 0; 
  audio.play();
}

white_key.forEach(key => key.addEventListener("click", () => playKey(key)));
black_key.forEach(key => key.addEventListener("click", () => playKey(key)));