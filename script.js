const phrases = [
  {
    spanish: "Buenos días",
    french: "Bonjour",
    audio: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Fr-Bonjour.ogg"
  },
  {
    spanish: "Gracias",
    french: "Merci",
    audio: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Fr-Merci.ogg"
  },
  {
    spanish: "¿Dónde está el baño?",
    french: "Où sont les toilettes?",
    audio: "https://upload.wikimedia.org/wikipedia/commons/4/49/Fr-Où_sont_les_toilettes.ogg"
  }
];

let currentPhrase = null;

// Mostrar una frase aleatoria
function loadRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  currentPhrase = phrases[randomIndex];
  document.getElementById("spanish").textContent = currentPhrase.spanish;
  document.getElementById("french").textContent = currentPhrase.french;
}

// Reproducir el audio dentro del clic del usuario
function playCurrentAudio() {
  if (!currentPhrase) {
    alert("Primero presiona 🔄 para mostrar una frase.");
    return;
  }

  const audio = new Audio(currentPhrase.audio);
  audio.load(); // garantiza la carga completa
  audio.play().then(() => {
    console.log("Audio reproduciéndose correctamente:", currentPhrase.french);
  }).catch(err => {
    console.warn("Bloqueo de reproducción automática:", err);
    alert("Activa el sonido o haz clic nuevamente para escuchar la pronunciación.");
  });
}

// Eventos
document.getElementById("refreshBtn").addEventListener("click", loadRandomPhrase);
document.getElementById("playBtn").addEventListener("click", playCurrentAudio);

// Mensaje inicial
window.onload = () => {
  document.getElementById("spanish").textContent = "Pulsa 🔄 para mostrar una frase.";
  document.getElementById("french").textContent = "";
};