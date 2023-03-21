let menuBtn = document.querySelector('.main__btn');
let menu = document.querySelector('.header__left');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})