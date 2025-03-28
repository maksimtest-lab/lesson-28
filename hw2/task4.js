// Реализуйте анимацию "параллакса" на своём сайте, где фоновое изображение будет плавно двигаться в разных направлениях при прокрутке страницы, создавая эффект глубины.

const background = document.querySelector('.background');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    background.style.backgroundPosition = `center calc(50% + ${scrollPosition * 0.3}px)`;
});
