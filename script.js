import { translateENG,translateRU } from './translate.js';

const buttonElement = document.querySelector('.translate-button');
const lang_image = document.querySelector('.lang-image');
const lang = document.querySelector('.lang');

const socket = new WebSocket();

setRu();

buttonElement.addEventListener('click', () => {
    buttonElement.classList.toggle('en');
    if (buttonElement.classList.contains('en')) {
        setEng();
    } else {
        setRu();
    }
});

function setRu() {
    lang_image.classList.remove('en');
    lang_image.classList.add('ru');
    lang.innerHTML = 'RUS';
    translateRU();
}

function setEng() {
    lang_image.classList.remove('ru');
    lang_image.classList.add('en');
    lang.innerHTML = 'ENG';
    translateENG();
}