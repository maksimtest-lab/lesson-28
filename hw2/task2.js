// Сделайте анимацию, которая перемещает элемент вдоль заданного пути, например, движение по спиральной траектории.

const spiral = document.getElementById('spiral');
const button = document.getElementById('button');

spiral.style.width = '50px';
spiral.style.height = '50px';
spiral.style.backgroundColor = 'lightblue';
spiral.style.borderRadius = '50%';
spiral.style.position = 'absolute';

let angle = 0;
let radius = 0;
let x = 0;
let y = 0;
let start = null;

const spiralAnimation = (timestamp) => {
    // console.log(timestamp);
    angle += 0.1;
    radius += 0.5;

    x = radius * Math.cos(angle);
    y = radius * Math.sin(angle);

    spiral.style.top = `${y}px`;
    spiral.style.left = `${x}px`;

    requestID = requestAnimationFrame(spiralAnimation);

    if (timestamp > 11000) {
        cancelAnimationFrame(requestID);
    }
}

button.addEventListener('click', () => {
    spiralAnimation();
});