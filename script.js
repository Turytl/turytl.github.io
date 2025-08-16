particlesJS("background", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");
  const boxes = document.querySelectorAll(".content-box");

  function showBox(id) {
    boxes.forEach(box => {
      box.classList.toggle("active", box.id === id);
    });
  }

  panels.forEach(panel => {
    panel.addEventListener("click", () => {
      const target = panel.classList.contains("aboutme") ? "about" :
                     panel.classList.contains("projects") ? "projects" : "contact";

      if (window.innerWidth >= 768) {
        // desktop: switch cards
        showBox(target);
        document.getElementById(target).scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        // mobile: scroll into view
        document.getElementById(target).scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  // default: show "about" on desktop
  if (window.innerWidth >= 768) {
    showBox("about");
  }
});
