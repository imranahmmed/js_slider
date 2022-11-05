let slides = document.querySelectorAll(".slide");
let slidesArr = Array.from(slides);
console.log(slidesArr)

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
    return next, prev
}
nextPrev();