// Задача на навигация по DOM-элементам

// Создайте HTML-документ с несколькими элементами вложенной структуры (например, div внутри div). Напишите JavaScript-код, который позволит при наведении курсора на внутренний элемент, менять его стили или добавлять/удалять классы внешнего элемента.

const elements = document.querySelectorAll('.container p');

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    element.addEventListener('mouseover', () => {
        const parent = element.parentElement;
        element.style.backgroundColor = 'red';
        parent.classList.add('code');
    });

    element.addEventListener('mouseout', () => {
        const parent = element.parentElement;
        element.style.backgroundColor = 'white';
        parent.classList.remove('code');
    });
}
