const hamburger = document.getElementById('hamberger');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(link => link.addEventListener('click', () => { 
    navMenu.classList.add('hidden')   
}
))
hamburger.addEventListener('click', () => {
    navMenu.classList.add('hidden')
})
hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden')
})