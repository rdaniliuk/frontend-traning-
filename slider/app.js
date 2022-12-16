const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeSlideIndex = 0;

sidebar.style.left = `-${(slidesCount - 1) * 100}vw`;

leftBtn.addEventListener("click", () => {
  changeSlide("left");
});

rightBtn.addEventListener("click", () => {
  changeSlide("right");
});

function changeSlide(direction) {
  if (direction === "left") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "right") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const width = container.clientWidth;
  mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`;
  sidebar.style.transform = `translateX(${activeSlideIndex * width}px)`;
}
