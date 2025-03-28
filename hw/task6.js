// Задача на поиск и замена текста

// Создайте HTML-документ с несколькими элементами, содержащими текст (например, параграфы). Напишите JavaScript-код, который найдет все элементы с определенным текстом и заменит его на другой текст 

const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
    let textContent = paragraphs[i].textContent;
    if (textContent.includes('Test')) {
        paragraphs[i].textContent = textContent.replaceAll('Test', 'Aaaaa');
    }
}

