const prev = document.getElementById('prev');
const next = document.getElementById('next');

const img0 = document.getElementById('img0');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

let sum = 0;

prev.addEventListener('click', function() {
    sum = sum - 1;

    document.getElementById('imgCont').style.transition = 'all linear .3s'
});

next.addEventListener('click', function() {
    sum = sum + 1;

    document.getElementById('imgCont').style.transition = 'all linear .3s'
});

setInterval(() => {
    sum = sum + 1;
}, 3000)

setInterval(() => {
    if(sum === 0){
        img0.style.opacity = '1';
        img1.style.opacity = '0';
        img2.style.opacity = '0';
        img3.style.opacity = '0';
    }
    
    if(sum === 1){
        img0.style.opacity = '0';
        img1.style.opacity = '1';
        img2.style.opacity = '0';
        img3.style.opacity = '0';
    }
    
    if(sum === 2){
        img0.style.opacity = '0';
        img1.style.opacity = '0';
        img2.style.opacity = '1';
        img3.style.opacity = '0';
    }
    
    if(sum === 3){
        img0.style.opacity = '0';
        img1.style.opacity = '0';
        img2.style.opacity = '0';
        img3.style.opacity = '1';
    }
    
    if(sum === 4){
        sum = 0;
    }
    if(sum === -1){
        sum = 3;
    }
});

