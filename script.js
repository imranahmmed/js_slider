let slides = document.querySelectorAll(".slide");
let slidesArr = Array.from(slides);

let nextArrow = document.querySelector(".next");
let prevArrow = document.querySelector(".prev");
console.log(slidesArr)
console.log(nextArrow)
console.log(prevArrow)

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
        })

    });

}

nextArrow.addEventListener("click", () => {
    let currentSlide = document.querySelector(".slide.active");
    let [next] = nextPrev();

    currentSlide.classList.remove("active");
    currentSlide.classList.add("smooth");
    currentSlide.style.transform = "translateX(-100%)";
    next.classList.add("active");
    next.classList.add("smooth");
    next.style.transform = "translateX(0)";
    slidePosition()
});