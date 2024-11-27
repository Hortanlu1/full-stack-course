const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

nextBtn.addEventListener('click', () => {
    const menu = document.querySelector('menu');
    const cards = document.querySelectorAll('li');

    menu.appendChild(cards[0]);
});

prevBtn.addEventListener('click', () => {
    const menu = document.querySelector('menu');
    const cards = document.querySelectorAll('li');

    menu.prepend(cards[cards.length - 1]);
});