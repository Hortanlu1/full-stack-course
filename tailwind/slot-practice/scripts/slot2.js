const logoSlider = document.querySelectorAll('.logoSlider');
const sliders = document.querySelector('.slider');

const left = document.querySelector('.slide-left');
const right = document.querySelector('.slide-right');

left.addEventListener('click', () => {
    sliders.scrollLeft -= 100;
});

right.addEventListener('click', () => {
    sliders.scrollLeft += 100;
});

const maxScrollLeft = sliders.scrollWidth - sliders.clientWidth;

function autoScroll () {
    if(sliders.scrollLeft > (maxScrollLeft - 1)) {
        sliders.scrollLeft -= maxScrollLeft;
    } else {
        sliders.scrollLeft += 1;
    }
}

let scroll = setInterval(autoScroll, 50);

for(let i = 0; i < logoSlider.length; i++) {
    logoSlider[i].addEventListener('mouseover', () => {
        clearInterval(scroll);
    });

    logoSlider[i].addEventListener('mouseout', () => {
        return scroll = setInterval(autoScroll, 50);
    });
}