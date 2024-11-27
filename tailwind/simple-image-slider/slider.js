 const slides = document.querySelectorAll('.slide');

 /* tracker variable */
 let currentSlide = 0;

 function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
 }

 function nextSlide(){
    currentSlide++;
    if(currentSlide === slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
 }

 function prevSlide(){
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
 }

 document.querySelector('.next').addEventListener('click', nextSlide); 
 document.querySelector('.prev').addEventListener('click', prevSlide); 