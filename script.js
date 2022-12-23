'use strict'

const colors = ['violet', 'orange', 'lightblue', 'chocolate', 'pink', 'yellowgreen', 'green', 'brown', 'tomato', 'gold', 'purple', 'olive'];
const colorName = document.querySelector('.color-name');
const btn = document.querySelector('.btn');

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors [randomNumber];
    colorName.textContent = colors [randomNumber];
});