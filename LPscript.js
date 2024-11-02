// dark mode toggle //
//-----------------------------------------//

function toggle() {
    var bg = document.querySelector("body");
    bg.classList.toggle("active");
}
//-----------------------------------------//


// apply will-change property to elements that will be animated (no idea what this actually does, but fixes js console yelling at me) //
//-----------------------------------------//

document.querySelectorAll('.h1animate, .animation, .p, .logo, .theme, .social, .ul, .main-nav').forEach(el => {
    el.style.willChange = 'transform, opacity';
});
//-----------------------------------------//


// gsap timeline that animates html attributes on page load //
//-----------------------------------------//

const tl = gsap.timeline({
    defaults: {
        ease: "power2.out"
    }
   
});

tl.fromTo(".h1animate", {
    y: "100%",
    opacity: 0
}, {
    duration: 1.5,
    y: "0%",
    opacity: 1,
    ease: "power1.out"
});
tl.to(".animation", {
    duration: 1.5,
    opacity: 0,
    display: "none",
    ease: "power1.out"
}, "+=0.5");
tl.fromTo(".p", {
    y: "100%",
    opacity: 0
}, {
    duration: 1,
    y: "0%",
    opacity: 1
}, "-=0.5");
tl.fromTo(".logo", {
    y: "100%",
    opacity: 0
}, {
    duration: 0.75,
    y: "0%",
    opacity: 1
}, "-=0.25");
tl.fromTo(".theme", {
    y: "100%",
    visibility: "hidden"
}, {
    duration: 1,
    y: "0%",
    visibility: "visible"
}, "-=0.75");
tl.fromTo(".social , .ul", {
    y: "100%",
    opacity: 0
}, {
    duration: 1,
    y: "0%",
    opacity: 1,
    delay: 0.25,
    stagger: 0.25
}, "-=0.5");
tl.fromTo(".main-nav", {
    y: "-100%",
    opacity: 0
}, {
    duration: 1,
    y: "0%",
    opacity: 1,
    ease: "ease-in-out"
});
//-----------------------------------------//


// confetti effect //
//-----------------------------------------//

const mainImg = document.querySelector(".mainImg");
mainImg.addEventListener('mouseover', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            x: 0.5,
            y: 0.3
        }
    });
});

//-----------------------------------------//


// remove js until body (DOM) is loaded //
//-----------------------------------------//

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.overflowY = 'auto'; // Enable vertical scrolling after DOM is loaded
    document.body.classList.remove("no-js");
});


    document.addEventListener("DOMContentLoaded", function() {
        let lastScrollY = window.scrollY;
        const threshold = 650; // Adjust this value as needed
        const mobileThreshold = 100; // Adjust this value for mobile devices

        function isMobile() {
            return window.innerWidth <= 768; // Define mobile screen width threshold
        }

        document.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            const currentThreshold = isMobile() ? mobileThreshold : threshold;

            // Check if the user is scrolling up and is within the threshold
            if (currentScrollY < lastScrollY && currentScrollY <= currentThreshold) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Update the last scroll position
            lastScrollY = currentScrollY;
        });
    });
