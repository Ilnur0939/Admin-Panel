let clicked = document.querySelectorAll('.navbar__item')
// console.log(clicked[0].children[0]);
let img = document.querySelector('.navbar__img')
let link = document.querySelector('.navber__link')

// Array.from(clicked[0].children[0])

// clicked.addEventListener('click', (clicked) => {
//         console.log(clicked.id);
//         // item.toggle = img.classList('navbar__item--btn')
//     })
// link.setAttribute('style', 'color: #1ab369') 

clicked.forEach(item => {
    item.addEventListener('click', function(){
        // item.children[1].setAttribute('style', 'color: #1ab369')
        clicked.forEach(rem => rem.classList.remove('navbar__item--btn'))
        item.classList.toggle('navbar__item--btn')

        clicked.forEach(item => item.children[0].classList.remove('navbar__img--color'))
        item.children[0].classList.toggle('navbar__img--color')

        clicked.forEach(item => item.children[1].classList.remove('navbar__link--color'))
        item.children[1].classList.toggle('navbar__link--color')

        clicked.forEach(item => item.children[1].setAttribute('style', 'color: white'))
        item.children[1].setAttribute('style', 'color: #1ab369')

    })
}) 


