// Создайте интерактивную анимацию перехода между страницами, где элементы плавно выезжают и уходят с экрана при переходе между разделами вашего сайта.

const menuItems = document.querySelectorAll('nav > ul > li');

menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = item.querySelector('a').getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});