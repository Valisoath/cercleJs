const slideContainer = document.querySelector(".slide-container");
const slideItems = document.querySelectorAll(".slide-item");

let currentSlide = 0;

function nextSlide() {
    slideItems[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slideItems.length;
    slideItems[currentSlide].classList.add("active");
}

setInterval(nextSlide, 4000);