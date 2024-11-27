const thumbnail = document.querySelectorAll('.js-thumbnail');
let slider = document.querySelector('#slider');
let slideLeft = document.querySelector('#slide-left');
let slideRight = document.querySelector('#slide-right');

slideLeft.addEventListener('click', () => {
    slider.scrollLeft -= 125;
});

slideRight.addEventListener('click', () => {
    slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

//alert(maxScrollLeft);

//Auto play Slider
function autoPlay(){
    if(slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 50);

//Pause Slider on hover
for(let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener('mouseover', () => {
        clearInterval(play);
    });

    thumbnail[i].addEventListener('mouseout', () => {
        return play = setInterval(autoPlay, 50);
    });
}