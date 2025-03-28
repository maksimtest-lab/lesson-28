// Задача на создание интерактивного календаря

// Создайте HTML-документ с таблицей, представляющей календарь для выбранного месяца и года. Напишите JavaScript-код, который будет динамически генерировать календарь при выборе месяца и года в форме.

const form = document.querySelector('form');
const table = document.querySelector('table');
const weekNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const year = form.year.value;
    const month = form.month.value;
    const week = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const calendar = document.querySelector('#calendar');

    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    let row = document.createElement('tr');

    // Инициализируем шапку таблицы
    calendar.textContent = '';

    weekNames.forEach((day) => {
        const th = document.createElement('th');
        th.textContent = day;
        row.appendChild(th);
    });

    tableHead.appendChild(row);
    table.appendChild(tableHead);
    calendar.appendChild(table);

    // Построение и отрисовка самого календаря
    const weeks = Math.ceil(daysInMonth / 7);
    const cells = weeks * 7;
    let start = false;

    row = document.createElement('tr');

    for (let i = 0; i < week; i++) {
        const cell = document.createElement('td');
        cell.textContent = '';
        row.appendChild(cell);
    }

    for (let i = week + 1; i <= cells; i++) {
        if (!start && i == week + 1) {
            start = true;
        }

        const cell = document.createElement('td');
        cell.textContent = start ? i - week : '';
        row.appendChild(cell);

        if (i % 7 === 0) {
            tableBody.appendChild(row);
            row = document.createElement('tr');
        }
    }

    table.appendChild(tableBody);
});