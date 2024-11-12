// script.js
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');

menuContainer.addEventListener('mouseover', () => {
    menu.style.display = 'flex';
});

menuContainer.addEventListener('mouseout', () => {
    menu.style.display = 'none';
});


menu.addEventListener('mouseover', () => {
    menu.style.display = 'flex';
});

menu.addEventListener('mouseout', () => {
    menu.style.display = 'none';
});