# Mini Piano

This project is an **interactive web application** that simulates a **mini piano** using clickable keys.  
It allows users to **play musical notes** directly in the browser, offering a fun and educational way to explore music.

---

## Live Demo

You can view the live version of the project here:  
[Live Demo Link](https://shorookkhaled559.github.io/Mini-Piano/)

---

## Features

- **Playable Piano Keys** — Includes both **white and black keys** for a full octave.  
- **Instant Sound Playback** — Clicking any key immediately plays the corresponding note.  
- **Simple & Clean Interface** — Minimalistic layout focusing on the piano keys.  
- **Responsive Design** — Works smoothly across desktop, tablet, and mobile devices.  
- **Educational Purpose** — Helps users learn the musical notes and experiment with melodies.  
- **Extensible Sound Set** — Easily replace or add new sounds for each key.  

---

## Technologies Used

- **HTML5** — Page structure and piano layout.  
- **CSS3** — Styling, layout, and responsive design. 
- **Tailwind CSS** — Utility-first CSS framework for styling. 
- **JavaScript (ES6)** — Handles key interactions and audio playback.  

---

## Project Structure

```
Mini-Piano/
│
├── sounds/
│   ├── C.mp3
│   ├── Cs.mp3
│   ├── D.mp3
│   ├── Ds.mp3
│   ├── E.mp3
│   ├── F.mp3
│   ├── Fs.mp3
│   ├── G.mp3
│   ├── Gs.mp3
│   ├── A.mp3
│   ├── As.mp3
│   └── B.mp3
│
├── css/style.css
├── js/index.js
└── index.html
```

---

## How It Works

1. The user clicks on a **white or black piano key**.  
2. JavaScript detects the key pressed using its **ID**.  
3. The corresponding audio file from the `sounds/` folder is played immediately.  
4. Multiple keys can be clicked to create simple melodies.  

---

## Piano Keys

| Key Type | Notes |
|----------|-------|
| White Keys | C, D, E, F, G, A, B |
| Black Keys | C#, D#, F#, G#, A# |

---

## Getting Started

1. **Clone or download** this repository.  
2. Create a folder named `sounds/` and add the audio files for each note (e.g., `C.mp3`, `Cs.mp3`).  
3. Open `index.html` in your browser.  
4. Click any piano key to play its sound.  

---

## Future Improvements

- Add **keyboard support** to play notes using computer keys.  
- Include **visual feedback** when a key is pressed (like highlighting).  
- Extend to a **full piano with multiple octaves**.  
- Implement **record and playback** functionality.  

---

## License

This project is **open-source** and free to use, modify, or share for educational and non-commercial purposes.  
Developed with  by **Shorouk Khaled**.
