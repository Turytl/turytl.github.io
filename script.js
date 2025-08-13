const rectangle = document.getElementById('rectangle');
const button = document.getElementById('cutButton');
const square = document.querySelector('.center-square');
const aboutme = document.querySelector('.aboutme');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

button.addEventListener('click', () => {
    rectangle.style.width = '30%';
    square.style.width = '100%';
    square.style.height = '100%';
    projects.style.left = '40vw';
    aboutme.style.left = '40vw';
    contact.style.left = '40vw';
    button.style.display = 'none';
});