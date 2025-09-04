particlesJS("background", {
  particles: {
    number: { value: 75, density: { enable: true, value_area: 800 } },
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

document.querySelector('.cta').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
