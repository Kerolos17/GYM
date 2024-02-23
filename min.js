let nav = document.querySelector('#nav')
let nav1 = document.querySelector('#nav1')
let btnScroll = document.querySelector('.btnScroll')
window.onscroll = hide
function hide() {
    if (window.scrollY > 50) {
        nav.classList.add('navbar_1')
        nav1.style.display = 'none'
        btnScroll.style.opacity = '1'
    } else{
        nav1.style.display = 'flex'
        nav.classList.remove('navbar_1')
        btnScroll.style.opacity = '0'
    }
}
btnScroll.addEventListener('click',btnUp)
function btnUp () {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
    
}