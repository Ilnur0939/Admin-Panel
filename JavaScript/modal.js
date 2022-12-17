let modalList = document.querySelector('.announ__modal')
let clickModal = document.querySelectorAll('.announ__edit')
let close = document.querySelector('.modal__close')



clickModal.forEach(item => {
    item.addEventListener('click', function(){
        modalList.classList.remove('announ__modal--box')
        
    })
    
})
close.addEventListener('click', function(){
    modalList.classList.add('announ__modal--box')
})


let delet = document.querySelectorAll('.announ__delete').values;
let list = document.querySelectorAll('.announ__main')
let line = document.querySelector('.shops__line')

list.forEach(del => {
    del.children[6].addEventListener('click', function(){
        del.remove()
        line.remove()
    })
})
