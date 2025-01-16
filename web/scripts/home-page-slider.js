const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const slidesToShow = 3;
const slideWidth = 100 / slidesToShow;
let currentIndex = 0;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

function showNextSlide() {
  currentIndex = currentIndex >= slideCount - slidesToShow ? 0 : currentIndex + 1;
  updateSlidePosition();
}

setInterval(showNextSlide, 5000);

updateSlidePosition();
