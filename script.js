const slide = document.querySelector(".carousel-slide");
const originImages = document.querySelectorAll(".carousel-slide img.origin");

originImages.forEach((img) => {
  const clone = img.cloneNode(true);
  clone.classList.remove("origin");
  slide.appendChild(clone);
});

let counter = 0;
const gap = 15;
const delay = 3000; // 3초

function moveSlide() {
  const isMobile = window.innerWidth <= 768;
  const showCount = isMobile ? 1 : 3;
  const currentGap = isMobile ? 0 : gap;

  counter++;

  slide.style.transition = "transform 0.5s ease-in-out";
  const size = originImages[0].clientWidth + currentGap;
  slide.style.transform = `translateX(${-size * counter}px)`;

  if (counter >= originImages.length) {
    setTimeout(() => {
      slide.style.transition = "none";
      counter = 0;
      slide.style.transform = `translateX(0px)`;
    }, 500);
  }
}

setInterval(moveSlide, delay);
