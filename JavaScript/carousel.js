const carousel = document.querySelector('.shops__carousel')
const leftBtn = document.querySelector('.shops__left')
const rightBtn = document.querySelector('.shops__right')

const shop = document.querySelectorAll('.shops__carousel .shops__info')


let idx = 0

carousel.addEventListener('click', function(){

})

function carouselList(){
    if(idx > shop.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = shop.length -1
    }
    carousel.style.transform = `translateX(${-idx * 1000}px)`
}

rightBtn.addEventListener('click', function change(){
    idx++;
    carouselList()
})
leftBtn.addEventListener('click', function change(){
    idx--;
    carouselList()
})