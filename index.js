document.querySelector(".nav__button").addEventListener("click", () => {
    document.querySelector(".nav__list").classList.toggle("active")
})

document.querySelectorAll(".nav__link").forEach(item => item.addEventListener("click", () => { document.querySelector(".nav__list").classList.toggle("active") }))

const sections = document.querySelectorAll(".section__container");

sections.forEach(item => {
    gsap.fromTo(item.children, { y: '+=100', opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
            trigger: item,
            start: 'top 70%'
        }
    })


})

const header = document.querySelector('.header')

gsap.fromTo(header.children, { y: '+=100', opacity: 0 }, {
    y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
        trigger: '.nav',
        start: 'top 110%'
    }
})

