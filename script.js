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
