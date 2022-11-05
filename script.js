let slides = document.querySelectorAll(".slide");
let slidesArr = Array.from(slides);
console.log(slidesArr)

function nextPrev() {
    let currentSlide = document.querySelector(".slide.active");
    let currentIndex = slidesArr.indexOf(currentSlide);
    console.log(currentIndex)
}
nextPrev()