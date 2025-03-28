// Создайте HTML-документ с главным меню и подменю. Напишите JavaScript-код, который будет анимировать открытие и закрытие подменю при наведении курсора на пункты главного меню. 

const menuItems = document.querySelectorAll('nav > ul > li');
console.log(menuItems);

menuItems.forEach((item) => {
    const subMenuItems = item.querySelectorAll('ul');

    subMenuItems.forEach((subMenuItem) => {
        subMenuItem.style.display = 'none';
    })

    item.addEventListener('mouseover', () => {
        const subMenu = item.querySelector('ul');

        if (subMenu) {
            subMenu.style.color = 'red';
            subMenu.style.display = 'block';
        }
    });

    item.addEventListener('mouseout', () => {
        const subMenu = item.querySelector('ul');

        if (subMenu) {
            subMenu.style.color = 'black';
            subMenu.style.display = 'none';
        }
    });
})
