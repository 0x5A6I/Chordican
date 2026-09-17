🎹 Chordican

A lightweight, interactive, browser-based piano chord trainer designed to help musicians practice sight-reading and chord recognition. Playable via Web MIDI, computer keyboard, or mouse/touch!

Built entirely in a single HTML file with no build steps, external audio assets, or backend servers required.

✨ Features

🔌 Web MIDI API Support: Connect your USB MIDI keyboard and play directly into the browser.

🎼 Dynamic Sheet Music: Real-time, mathematically generated SVG grand staff notation (C3 to C5 range) that adapts to different key signatures.

🔊 Procedural Audio Engine: Features a custom-built, zero-dependency physical modeling synthesizer that accurately simulates the acoustic properties of a grand piano (unison strings, hammer transients, and soundboard resonance).

🎮 Gamified Learning: Tracks your active streak and score to keep you motivated.

🧠 Adaptive Hints: Toggle sheet music, chord names, audio previews, and visual key guides on the piano board.

🎛️ Customizable Practice: Select specific chord categories (Basic Triads, Sus/5ths, 7ths, Advanced) and adjust MIDI hardware octave shifts.

🚀 Getting Started

Because this project is entirely self-contained, installation is incredibly simple:

Download or clone this repository.

Double-click index.html to open it in your web browser.

Start playing!

Note: For Web MIDI support, you must use a browser that supports the Web MIDI API (such as Google Chrome, Microsoft Edge, or Opera).

🎹 Controls

You can interact with the piano trainer in three ways:

MIDI Controller: Click the "Request MIDI" button in the header, grant permission, and play chords on your connected hardware keyboard.

Computer Keyboard: Use your QWERTY keyboard to play notes:

C3 to B3: Keys Z through M (with S, D, G, H, J for black keys)

C4 to C5: Keys Q through I (with 2, 3, 5, 6, 7 for black keys)

Mouse/Touch: Click or tap the keys directly on the screen.

⚙️ Configuration & Settings

MIDI Matching: Choose between "Any Octave (Flexible)" to match pitch classes regardless of where you play them on your keyboard, or "Strict C3–C5" to force reading in the exact written octave.

Key Signature: Leave it on "Auto (Best Fit)" for dynamic key signatures, or manually force the sheet music to render in a specific key via the Circle of Fifths.

Octave Shift: If your physical MIDI controller is too small, use the "Shift" dropdown to transpose your hardware input up or down by octaves to hit the C3-C5 range.

🛠️ Built With

Vanilla JavaScript (Logic, MIDI handling, Audio context, SVG rendering)

Tailwind CSS (via CDN for styling)

Lucide Icons (via CDN for iconography)

Canvas Confetti (via CDN for success celebrations)

📄 License

This project is licensed under the MIT License.
