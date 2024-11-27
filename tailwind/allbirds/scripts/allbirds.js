 const menuBar = document.querySelector('.menu');
 const menuItem = document.querySelector('.menu-item');

          menuBar.addEventListener('click', () => {
              menuItem.classList.toggle('top-[50px]');
          });

 const activeBorder = document.querySelectorAll('.active');

 
    activeBorder.forEach((borders, i) => {
       
        borders.addEventListener('click', () => {
            currentSlide = i;
            showCurrentSlide(currentSlide);   
            removeBorder();
            borders.classList.add('showBorder');
        });
    });
  

 function removeBorder() {
    activeBorder.forEach((borders) => {
        borders.classList.remove('showBorder');
    });
 }

 const dark = document.querySelectorAll('.dark');

 dark.forEach((darks) => {
    darks.addEventListener('click', () => {
        removeDarkBgClass();
        darks.classList.add('darkBg');
    });
 });

 function removeDarkBgClass() {
    dark.forEach((darks) => {
        darks.classList.remove('darkBg');
    });
 }

 /* Image Slider */
 const activeSlide = document.querySelectorAll('.currentImg');
 let currentSlide = 0;

 function showCurrentSlide(index){
    activeSlide.forEach((slide) => {
        slide.classList.remove('activeImage');
    });
    activeSlide[index].classList.add('activeImage');
    activeBorder[index].classList.add('showBorder');
 }

 function nextSlider(){
    currentSlide++;
    activeBorder.forEach((borders) => borders.classList.remove('showBorder'));
  
    if(currentSlide === activeSlide.length) {
        currentSlide = 0;
    }
    showCurrentSlide(currentSlide);   
 }

 function prevSlider(){
    currentSlide--;
    activeBorder.forEach((borders) => borders.classList.remove('showBorder'));

    if(currentSlide < 0) {
        currentSlide = activeSlide.length - 1;
    }
    showCurrentSlide(currentSlide);
}

 document.querySelector('.prevBtn').addEventListener('click', prevSlider);
 document.querySelector('.nextBtn').addEventListener('click', nextSlider);