// Hamburger menu animation
let burger = document.querySelector('.burger')
let nav = document.querySelector('header nav ul')

burger.addEventListener('click', () => {

    if (nav.style.opacity == '1') {
        nav.style.opacity = '0'
        nav.style.transform = 'scale(0.7) translate(1200px, 0px)'
        console.log('none added')
    } else if (nav.style.opacity == '0' || nav.style.opacity.length < 1) {
        nav.style.opacity = '1'
        nav.style.transform = 'scale(1) translate(0px, 0px)'
        console.log('flex added')
    } 

    if (burger.classList.contains('clicked')) {
        burger.classList.remove('clicked')
    } else {
        burger.classList.add('clicked')
    }   
})




// Home page partners section animation & All pages loading animation 
 window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    const loaderimg = document.querySelector(".loader img")
    
    // const partners = document.getElementsByClassName("partner")

    loader.classList.add("loaded")
    loaderimg.classList.add("loaded")

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader")
    })

    // setTimeout(() => {
    //     console.log(partners)
    //     for (let i=0; i<partners.length; i++) {
    //         partners[i].classList.add("move")
    //         console.log(partners[i])
    //     }
    // }, 3000)
 })


