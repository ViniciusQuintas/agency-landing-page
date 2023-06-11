const bars = document.querySelector('.fa-bars')
const xmark = document.querySelector('.fa-xmark')
const menuMobile = document.querySelector('.menu-mobile')

bars.addEventListener('click', ()=> menuMobile.style.right = 0)
xmark.addEventListener('click', ()=> menuMobile.style.right = '-300px')