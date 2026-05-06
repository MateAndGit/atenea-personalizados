const slide = document.querySelector(".carousel-slide");
const originImages = document.querySelectorAll(".carousel-slide img.origin");

// 1. 무한 루프를 위해 앞부분 이미지들을 복제해서 뒤에 붙임
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

  // 부드러운 애니메이션 적용
  slide.style.transition = "transform 0.5s ease-in-out";
  const size = originImages[0].clientWidth + currentGap;
  slide.style.transform = `translateX(${-size * counter}px)`;

  // 2. 마지막 원본을 지나 복제본 첫 장에 도달했을 때
  if (counter >= originImages.length) {
    setTimeout(() => {
      // 애니메이션을 끄고 순식간에 0번 위치로 이동
      slide.style.transition = "none";
      counter = 0;
      slide.style.transform = `translateX(0px)`;
    }, 500); // 0.5초(transition 시간) 후에 실행
  }
}

setInterval(moveSlide, delay);
