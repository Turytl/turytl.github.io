particlesJS("background", {
  particles: {
    number: { value: 200, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 1, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 2, random: true, out_mode: "out" },
  },
  interactivity: { detect_on: "window", events: { resize: true } },
  retina_detect: true,
});

const aboutText = document.querySelector('.aboutme-text');
const bottom = document.querySelector('.bottom');

window.addEventListener('scroll', () => {
  const bottomTop = bottom.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Show text when bottom section is partially visible
  if (bottomTop < windowHeight * 0.8) {
    aboutText.classList.add('visible');
  } else {
    aboutText.classList.remove('visible');
  }
});
