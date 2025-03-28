// Задача на работа с атрибутами и свойствами

// Создайте HTML-документ с изображением. Напишите JavaScript-код, который изменит атрибуты и свойства изображения (например, src, alt, width) при наведении курсора на него. 

const img = document.querySelector('img');

img.addEventListener('mouseover', () => {
    img.src = './images/2.jpg';
    img.alt = 'Image 2';
    img.width = 300;
});

img.addEventListener('mouseout', () => {
    img.src = './images/1.jpg';
    img.alt = 'Image 1';
    img.width = 200;
});