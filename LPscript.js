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
    },
    onComplete: function() {
        document.body.style.overflow = 'auto';
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

//-----------------------------------------//


// script to only allow scrolling after a certain scrolling threshold //
//-----------------------------------------//

document.addEventListener("DOMContentLoaded", function() {
    let scrollThreshold = 78000;
    let scrollAmount = 0;

    window.addEventListener('wheel', function(event) {
        scrollAmount += event.deltaY;

        if (scrollAmount >= scrollThreshold) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    });
});
//-----------------------------------------//


// script to scroll to top of page when user scrolls up (top is like a magnet) //
//-----------------------------------------//

document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.querySelector('.main-content');
    const threshold = 0.65; // 65% of the main content is visible
    let isTrackpad = false;

    window.addEventListener('wheel', function(event) {
        if (Math.abs(event.deltaY) < 50) {
            isTrackpad = true;
        } else {
            isTrackpad = false;
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const scrollThreshold = isTrackpad ? 0.65 : 0.85; // Adjust threshold for mouse users
            if (entry.intersectionRatio < scrollThreshold) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }, {
        threshold: [threshold]
    });

    observer.observe(mainContent);
});

//-----------------------------------------//


