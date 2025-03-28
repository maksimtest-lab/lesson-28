// Задача. Создание игры "Найди пару"

// Создайте HTML-документ с сеткой из карточек, перевернутых лицом вниз. Напишите JavaScript-код, который будет реализовывать механику игры "Найди пару", при которой игрок должен открывать карточки и находить пары с одинаковыми изображениями.

const cards = document.querySelectorAll('.card');
const flippedCards = document.querySelectorAll('.flipped');

let previousCard = null;

cards.forEach((card) => {
    card.id = Math.floor(Math.random() * 100);

    card.addEventListener('click', () => {

        card.classList.add('flipped');

        if (previousCard === null) {
            previousCard = card;

        } else {

            // Если карты не совпадают нужно пользователю увидеть, что он выбрал
            setTimeout(() => {
                if (previousCard.querySelector('img').src === card.querySelector('img').src) {
                    document.getElementById(`${previousCard.id}`).classList.add('fixed');
                    document.getElementById(`${card.id}`).classList.add('fixed');
                    previousCard = null;

                } else {
                    console.log(Math.floor(Math.random() * 100));
                    previousCard.classList.remove('flipped');
                    card.classList.remove('flipped');
                    previousCard = null;
                }
            }, 1000);

        }
    });
});