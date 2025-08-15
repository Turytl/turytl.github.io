const rectangle = document.getElementById('rectangle');
const button = document.getElementById('cutButton');
const square = document.querySelector('.center-square');
const aboutme = document.querySelector('.aboutme');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const back = document.querySelector('.back');

button.addEventListener('click', () => {
    rectangle.style.width = '30%';
    square.style.width = '100%';
    square.style.height = '100%';
    projects.style.left = '40vw';
    aboutme.style.left = '40vw';
    contact.style.left = '40vw';
    button.style.display = 'none';
});

// About Me
aboutme.addEventListener('click', () => {
    aboutme.style.pointerEvents = 'none';

    aboutme.style.transition = 'height 0.5s ease, top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    projects.style.transition = 'top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    contact.style.transition = 'top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    back.style.transition = 'top 0.5s ease, opacity 0.5s ease, transform 0.5s ease';

    aboutme.style.height = '70vh';
    aboutme.style.top = '57.5vh';
    aboutme.style.opacity = '1';

    projects.style.top = '112.5vh';
    projects.style.opacity = '0.5';

    contact.style.top = '112.5vh';
    contact.style.opacity = '0.5';

    back.style.top = '12.5vh';
    back.style.opacity = '1';
});

// Projects
projects.addEventListener('click', () => {
    projects.style.pointerEvents = 'none';

    projects.style.transition = 'height 0.5s ease, top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    aboutme.style.transition = 'top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    contact.style.transition = 'top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    back.style.transition = 'top 0.5s ease, opacity 0.5s ease, transform 0.5s ease';

    projects.style.height = '70vh';
    projects.style.top = '57.5vh';
    projects.style.opacity = '1';

    aboutme.style.top = '112.5vh';
    aboutme.style.opacity = '0.5';

    contact.style.top = '112.5vh';
    contact.style.opacity = '0.5';

    back.style.top = '12.5vh';
    back.style.opacity = '1';
});

// Contact
contact.addEventListener('click', () => {
    contact.style.pointerEvents = 'none';

    contact.style.transition = 'height 0.5s ease, top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    aboutme.style.transition = 'top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    projects.style.transition = 'top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    back.style.transition = 'top 0.5s ease, opacity 0.5s ease, transform 0.5s ease';

    contact.style.height = '70vh';
    contact.style.top = '57.5vh';
    contact.style.opacity = '1';

    aboutme.style.top = '112.5vh';
    aboutme.style.opacity = '0.5';

    projects.style.top = '112.5vh';
    projects.style.opacity = '0.5';

    back.style.top = '12.5vh';
    back.style.opacity = '1';
});

// Back button
back.addEventListener('click', () => {
    aboutme.style.pointerEvents = 'auto';
    projects.style.pointerEvents = 'auto';
    contact.style.pointerEvents = 'auto';

    aboutme.style.transition = 'height 0.5s ease, top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    projects.style.transition = 'height 0.5s ease, top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    contact.style.transition = 'height 0.5s ease, top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    back.style.transition = 'top 0.5s ease, opacity 0.5s ease, transform 0.5s ease';

    aboutme.style.height = '25vh';
    aboutme.style.top = '20vh';
    aboutme.style.opacity = '1';

    projects.style.height = '25vh';
    projects.style.top = '50vh';
    projects.style.opacity = '1';

    contact.style.height = '25vh';
    contact.style.top = '80vh';
    contact.style.opacity = '1';

    back.style.top = '-10vh';
    back.style.opacity = '0';
});
