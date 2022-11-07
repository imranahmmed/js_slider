let slides = document.querySelectorAll(".slide");
let slidesArr = Array.from(slides);

let nextArrow = document.querySelector(".next");
let prevArrow = document.querySelector(".prev");


let dots = document.querySelectorAll(".dot");
let dotsArr = Array.from(dots);


function nextPrevDots() {
    let currentdot = document.querySelector(".dot.active");
    let currentdotIndex = dotsArr.indexOf(currentdot);
    console.log(currentdotIndex);

    let nextDot;
    let prevDot;

    if (currentdotIndex == 0) {
        prevDot = dotsArr[dotsArr.length - 1];
    } else {
        prevDot = dotsArr[currentdotIndex - 1];
    }

    if (currentdotIndex == dotsArr.length - 1) {
        nextDot = dotsArr[0];
    } else {
        nextDot = dotsArr[currentdotIndex + 1];
    }

    console.log("next", nextDot);
    console.log("prev", prevDot);
    return [nextDot, prevDot];
}

function nextPrev() {
    let currentSlide = document.querySelector(".slide.active");
    let currentIndex = slidesArr.indexOf(currentSlide);

    let prev;
    let next;

    if (currentIndex == 0) {
        prev = slidesArr[slidesArr.length - 1];
    } else {
        prev = slidesArr[currentIndex - 1];
    }

    if (currentIndex == slidesArr.length - 1) {
        next = slidesArr[0];
    } else {
        next = slidesArr[currentIndex + 1];
    }

    console.log("next", next);
    console.log("prev", prev);
    return [next, prev];
}

function slidePosition() {
    let currentSlide = document.querySelector(".slide.active");
    let currentIndex = slidesArr.indexOf(currentSlide);
    let [next, prev] = nextPrev();

    slidesArr.map((slide, index) => {
        if (currentIndex == index) {
            slide.style.transform = "translateX(0)";
        } else if (slide == prev) {
            slide.style.transform = "translateX(-100%)";
        } else if (slide == next) {
            slide.style.transform = "translateX(100%)";
        }

        slide.addEventListener("transitionend", () => {
            slide.classList.remove("smooth");
        });
    });
};


nextArrow.addEventListener("click", () => {
    let currentSlide = document.querySelector(".slide.active");
    let currentdot = document.querySelector(".dot.active");
    let [next, prev] = nextPrev();
    let [nextDot, prevDot] = nextPrevDots();

    currentSlide.classList.remove("active");
    currentdot.classList.remove("active");

    currentSlide.classList.add("smooth");
    currentSlide.style.transform = "translateX(-100%)";

    next.classList.add("active");
    nextDot.classList.add("active");
    next.classList.add("smooth");
    next.style.transform = "translateX(0)";
    slidePosition()
});


prevArrow.addEventListener("click", () => {
    let currentSlide = document.querySelector(".slide.active");
    let currentdot = document.querySelector(".dot.active");
    let [next, prev] = nextPrev();
    let [nextDot, prevDot] = nextPrevDots();

    console.log(prev);
    console.log(currentSlide);

    currentSlide.classList.add("smooth");
    currentSlide.classList.remove("active");
    currentdot.classList.remove("active");
    currentSlide.style.transform = "translateX(0)";

    prev.classList.add("active");
    prevDot.classList.add("active");
    prev.classList.add("smooth");
    prev.style.transform = "translateX(100%)";
    slidePosition()
});