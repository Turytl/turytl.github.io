const rectangle = document.getElementById('rectangle');
const button = document.getElementById('cutButton');
const square = document.querySelector('.center-square');
const panels = {
  aboutme: { btn: document.querySelector('.aboutme'), box: document.querySelector('.aboutmeBox') },
  projects: { btn: document.querySelector('.projects'), box: document.querySelector('.projectsBox') },
  contact: { btn: document.querySelector('.contact'), box: document.querySelector('.contactBox') }
};

// Global transition
[rectangle, square, ...Object.values(panels).map(p => p.box)].forEach(el => {
    el.style.transition = 'width 0.5s ease, left 0.5s ease, top 0.5s ease, background 0.5s ease';
});

button.addEventListener('click', () => {
    button.style.display = 'none';
    document.querySelector('.background-container').classList.add('active');

    showPanel('aboutme');
});

// Generic panel switcher
function showPanel(key) {
    for (let k in panels) {
        panels[k].box.style.left = (k === key ? '40%' : '110%');
        panels[k].btn.style.pointerEvents = k === key ? 'none' : 'auto';
        panels[k].btn.style.filter = k === key ? 'grayscale(1)' : 'grayscale(0)';
    }
}

panels.aboutme.btn.addEventListener('click', () => showPanel('aboutme'));
panels.projects.btn.addEventListener('click', () => showPanel('projects'));
panels.contact.btn.addEventListener('click', () => showPanel('contact'));

const projectsBox = document.querySelector('.projectsBox');
const container = projectsBox.querySelector('.slider-container');
const dotsContainer = projectsBox.querySelector('.dots');
const slides = projectsBox.querySelectorAll('.slide');
let index = 0;

const prevBtn = projectsBox.querySelector('.arrow-left');
const nextBtn = projectsBox.querySelector('.arrow-right');

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateScroll();
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateScroll();
});

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
        index = i;
        updateScroll();
    });
    dotsContainer.appendChild(dot);
});

function updateScroll() {
    container.scrollTo({
        left: index * container.clientWidth,
        behavior: 'smooth'
    });

    const dots = dotsContainer.querySelectorAll('.dot'); // scoped inside this slider
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

// Particle JS

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