// Задача на вывод информации из формы

// Создайте HTML-документ с формой, содержащей поля ввода и кнопку отправки. Напишите JavaScript-код, который при отправке формы соберет данные из полей ввода и выведет их в виде сообщения.

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
});