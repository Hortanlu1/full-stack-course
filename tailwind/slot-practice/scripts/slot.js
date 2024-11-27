/* Image Slider */
const activeSlide = document.querySelectorAll('.currentSlide');
let currentSlide = 0;

function showCurrentSlide(index){
   activeSlide.forEach((slide) => {
       slide.classList.remove('activeImage');
   });
   activeSlide[index].classList.add('activeImage');
}

function nextSlider(){
   currentSlide++;
 
   if(currentSlide === activeSlide.length) {
       currentSlide = 0;
   }
   showCurrentSlide(currentSlide);   
}

function prevSlider(){
   currentSlide--;

   if(currentSlide < 0) {
       currentSlide = activeSlide.length - 1;
   }
   showCurrentSlide(currentSlide);
}

document.querySelector('.prevBtn').addEventListener('click', prevSlider);
document.querySelector('.nextBtn').addEventListener('click', nextSlider);

/* Automatic Slider Desktop*/
 setInterval(() => {
    currentSlide++;
 
    if(currentSlide === activeSlide.length) {
        currentSlide = 0;
    }
    showCurrentSlide(currentSlide);  
 }, 3000)

/* Automatic Slider Mobile*/
const slider = document.querySelectorAll('.slides');
let currentPair = 0;

function showActiveSlide(index){
    slider.forEach((pair) => {
        pair.classList.remove('activeSlides');
    });
    slider[index].classList.add('activeSlides');
 }

 setInterval(() => {
    currentPair++;
 
    if(currentPair === slider.length) {
        currentPair = 0;
    }
    showActiveSlide(currentPair);  
 }, 4000)
