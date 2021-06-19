const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.header__burger');
const burgerBtnClose = document.querySelector('.nav__icon-close')

burgerBtn.addEventListener('click', (evt) => {
   evt.preventDefault();
   nav.classList.add('nav--active');
   // burgerBtn.classList.remove('header__burger--opened');
});

burgerBtnClose.addEventListener('click', (evt) => {
   evt.preventDefault();
   nav.classList.remove('nav--active');
   burgerBtn.classList.add('header__burger--opened');
});