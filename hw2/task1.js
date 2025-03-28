// Создайте анимацию, которая плавно изменяет форму элемента, например, изменяет его размер и форму так, чтобы элемент стал кругом.

const circle = document.getElementById('circle');
const button = document.getElementById('button');

let borderRadius = 0;
circle.style.width = '100px';
circle.style.height = '100px';
circle.style.backgroundColor = 'lightblue';

const animate = () => {
    circle.style.borderRadius = `${borderRadius}%`;

    if (borderRadius <= 50) {
        borderRadius += 1;
    }
    requestAnimationFrame(animate);
};

button.addEventListener('click', () => {
    animate();
});