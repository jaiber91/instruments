const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close')
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('nav__menu-visible')
})
    


/*navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('nav__menu-visible')
})*/