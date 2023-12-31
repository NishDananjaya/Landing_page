const navMenu = document.getElementById("nav-menu"),
            navToggle = document.getElementById("nav-toggle"),
            navclose = document.getElementById("nav-close")


if(navToggle){
    navToggle.addEventListener("click" , () =>{
        navMenu.classList.add("show-menu")
    })
}

 
if(navclose){
    navclose.addEventListener("click" , () =>{
        navMenu.classList.remove("show-menu")
    })
}

const navLink=document.querySelectorAll("nav-menu")

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")

    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))


const scrollHeader = () =>{
    const header= document.getElementById("header")

    this.scrollY >= 40 ? header.classList.add("header-bg")
                                    : header.classList.remove("header-bg")

}
window.addEventListener("scroll",scrollHeader)


const sr = ScrollReveal ({
    origin: "bottom",
    distance: "60px",
    duration: 2500,
})

sr.reveal(`.home__images`, {distance:"120px", delay:400})
sr.reveal(`.home__title`, { delay:1000})
sr.reveal(`.home__description`, { delay:1200})
sr.reveal(`.home__button`, { delay:1400})
sr.reveal(`.home__footer`, { delay:1600})
sr.reveal(`.home__data div`, {origin:"right", interval: 100, delay:1800})