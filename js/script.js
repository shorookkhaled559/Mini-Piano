const sounds = {
  C: "sounds/C.mp3",
  "C#": "sounds/Cs.mp3",
  D: "sounds/D.mp3",
  "D#": "sounds/Ds.mp3",
  E: "sounds/E.mp3",
  F: "sounds/F.mp3",
  "F#": "sounds/Fs.mp3",
  G: "sounds/G.mp3",
  "G#": "sounds/Gs.mp3",
  A: "sounds/A.mp3",
  "A#": "sounds/As.mp3",
  B: "sounds/B.mp3",
};

const white_key = document.querySelectorAll(".white-key");
const black_key = document.querySelectorAll(".black-key");

white_key.forEach((key) => {
  key.addEventListener("click", () => {
    let audio = new Audio(sounds[`${key.id}`]);
    audio.currentTime = 0;
    audio.play();
  });
});
black_key.forEach((key) => {
  key.addEventListener("click", () => {
    let audio = new Audio(sounds[`${key.id}`]);
    audio.currentTime = 0;
    audio.play();
  });
});