const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const closeNav = document.querySelector('.nav__close');
const itemNav = document.querySelectorAll('.nav__item--active');


navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('nav__menu-visible')
})
    
closeNav.addEventListener('click',()=>{
    navMenu.classList.remove('nav__menu-visible')
})

itemNav.forEach(n => n.addEventListener('click', removeNav))
function removeNav() {
    navMenu.classList.remove('nav__menu-visible')
}