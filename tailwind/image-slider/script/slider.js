 const slideContainer = document.querySelector('.container');
 const slide = document.querySelector('.slides');
 const next = document.querySelector('.nextBtn');
 const prev = document.querySelector('.prevBtn');
 const interval = 3000;

 let slides = document.querySelectorAll('.slide');
 let index = 1;
 let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
   moveToNextSlide();
  }, interval);
}

const getSlides = () => document.querySelectorAll('.slide');


const moveToNextSlide = () => {
  slides = getSlides();
  if(index >= slides.length - 1) return;
  index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
}

/* const moveToNextSlide = () => {
  slides = getSlides();
  if(slides[index] >= slides.length - 1) {
    slides = 1;
  };
  index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
} */

const moveToprevSlide = () => {
  if(index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = '.7s';
}

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if(slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if(slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

slideContainer.addEventListener('mouseenter', () =>{
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

next.addEventListener('click', moveToNextSlide);
prev.addEventListener('click', moveToprevSlide);

startSlide();
