function toggle() {
    var bg = document.querySelector("body");
    bg.classList.toggle("active");
}

// GSAP Timeline
const tl = gsap.timeline({
    defaults: {
        ease: "power2.out"
    }
});


tl.fromTo(".h1animate", {
    y: "100%",
    opacity: 0
}, {
    duration: 2,
    y: "0%",
    opacity: 1,
    ease: "power1.out"
});
tl.to(".animation", {
    duration: 2.5,
    opacity: 0,
    display: "none",
    ease: "power1.out"
}, "+=1");
tl.fromTo(".p", {
    y: "100%",
    opacity: 0
}, {
    duration: 1.5,
    y: "0%",
    opacity: 1
}, "-=1");
tl.fromTo(".logo", {
    y: "100%",
    opacity: 0
}, {
    duration: 1,
    y: "0%",
    opacity: 1
}, "-=0.5");
tl.fromTo(".theme", {
    y: "100%",
    visibilty: "none"
}, {
    duration: 2,
    y: "0%",
    visibilty: "visible"
}, "-=1.5");
tl.fromTo(".social , .ul", {
    y: "100%",
    opacity: 0
}, {
    duration: 2,
    y: "0%",
    opacity: 1,
    delay: 0.25,
    stagger: 0.25
}, "-=1");
tl.fromTo(".main-nav", {  // Assuming '.main-nav' is the menu container
    y: "-100%",
    opacity: 0
}, {
    duration: 1.5,
    y: "0%",
    opacity: 1,
    ease: "ease-in-out"
});const mainImg = document.querySelector(".mainImg");

mainImg.addEventListener('mouseover', () => {
    confetti({ // Initialize with some basic options
        particleCount: 100,
        spread: 70,
        origin: {
            x: 0.5, // Confetti will originate from the center horizontally
            y: 0.3  // Adjust for starting position from top
        }
    });
});


// Menu Toggle
const hamburgerMenu = document.querySelector('.open-main-nav');
const slideInMenu = document.querySelector('.main-nav');

hamburgerMenu.addEventListener('click', function() {
    slideInMenu.classList.toggle('is-open');
});