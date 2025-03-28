// Задача на поиск: getElement*, querySelector*

// Создайте HTML-документ с несколькими элементами с разными классами и идентификаторами. Напиши JavaScript-код, который с помощью методов getElementById, getElementsByClassName и querySelector найдет определенные элементы и изменит их стили или содержимое. Используй метод querySelectorAll, чтобы найти все элементы с определенным тегом и добавить им классы.


const getElementById = document.getElementById('getElementById');
const getElementsByClassName = document.getElementById('getElementsByClassName');
const querySelector = document.getElementById('querySelector');
const querySelectorAll = document.getElementById('querySelectorAll');

getElementById.addEventListener('click', () => {
    const element = document.getElementById('getElementById');
    element.style.color = 'yellow';
    element.style.backgroundColor = 'red';
    element.textContent = 'Привет, мир!';
});

getElementsByClassName.addEventListener('click', () => {
    const elements = document.getElementsByClassName('box');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'green';
    }
});

querySelector.addEventListener('click', () => {
    const element = document.querySelector('#first_element');

    element.style.fontSize = '24px';
});

querySelectorAll.addEventListener('click', () => {
    const elements = document.querySelectorAll('.container li');
    for (let i = 0; i < elements.length; i++) {
        if (i % 2 === 0) {
            elements[i].style.backgroundColor = 'yellow';
        } else {
            elements[i].style.color = 'red';
        }
        elements[i].style.textDecoration = 'underline';
    }
});