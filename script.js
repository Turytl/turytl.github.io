const rectangle = document.getElementById('rectangle');
const button = document.getElementById('cutButton');
const square = document.querySelector('.center-square');

button.addEventListener('click', () => {
    rectangle.style.width = '40%';
    square.style.width = '100%';
    square.style.height = '100%';
    button.style.display = 'none';
});