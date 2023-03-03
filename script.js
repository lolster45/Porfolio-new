const slideInItemsLeft = document.querySelectorAll(".left");
const slideInItemsRight = document.querySelectorAll(".right");
const navMenu = document.querySelector("nav");
const hamMenuIcon = document.getElementById("ham-menu")
const navMobileRemove = document.querySelectorAll("nav > ul > li");

//once the page loads, it starts the fading in animation of the main h1 text...
window.addEventListener("load", (event) => {
    document.getElementById("introP").classList.add("animated", "animatedFadeInUp", "fadeInUp")
    document.getElementById("introP2").classList.add("animated", "animatedFadeInUp", "fadeInUp")
    document.getElementById("introP3").classList.add("animated", "animatedFadeInUp", "fadeInUp")
})

//Removes mobile nav when you click on one of the nav options...
navMobileRemove.forEach(li => {
    li.addEventListener("click", () => {
        navMenu.classList.remove("active")
    })
})

hamMenuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})

const options = {
    threshold: 0.50,
}

const aboutMeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("slide-in");
        aboutMeObserver.unobserve(entry.target)
    })
}, options)

slideInItemsLeft.forEach(item => {
    aboutMeObserver.observe(item)
})
slideInItemsRight.forEach(item => {
    aboutMeObserver.observe(item)
}) 

//-----------
const projLeft = document.querySelectorAll(".left-proj");
const projRight = document.querySelectorAll(".right-proj");

const projectsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("slide-in-proj");
        projectsObserver.unobserve(entry.target)
    })
}, options)

projLeft.forEach(item => {
    projectsObserver.observe(item)
})
projRight.forEach(item => {
    projectsObserver.observe(item)
})




