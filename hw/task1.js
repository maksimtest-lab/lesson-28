// Задача на изменение документа

// Создайте HTML-документ с кнопкой и абзацем. Напиши JavaScript-код, который при клике на кнопку изменяет текст абзаца на "Привет, мир!". 

const button = document.getElementById('button');
const container = document.getElementById('container');

button.addEventListener('click', () => {
    container.textContent = 'Привет, мир!';
});