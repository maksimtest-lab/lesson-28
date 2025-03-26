// const ul = document.querySelector('ul');
// let secondElement = ul.children[1];

// ul.appendChild(secondElement);

// console.log(ul.children);

// secondElement = ul.children[1].cloneNode(true);

// ul.appendChild(secondElement);
// ul.appendChild(secondElement.cloneNode(true));
// ul.appendChild(ul.children[1].cloneNode(true));

// console.log(ul.children);

// -------------------
// const ul = document.querySelector('ul');

// const li = document.createElement('li');
// li.textContent = "4";

// ul.insertBefore(li, ul.children[1]);

// -------------------
// const div = document.createElement('div');

// setTimeout(() => {
//     div.textContent = "Прошло 3 секунды";
// }, 3000);

// document.querySelector('#root').appendChild(div);

// -------------------
const fruits = ['Яблоко', 'Банан', 'Груша', 'Апельсин'];
const container = document.createElement('div');

const list = document.createElement('ul');

fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit;
    list.appendChild(li);
})

container.appendChild(list);

document.body.appendChild(container);