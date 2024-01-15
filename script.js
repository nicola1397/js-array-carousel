// CONTAINERS
const carousel = document.getElementById("carousel");
const slideContainer = document.getElementById("slideContainer");
const hoverContainer = document.getElementById("hoverContainer");
const thumbnailContainer = document.getElementById("thumbnailContainer");

// CLICKS
const arrowUp = document.getElementById("up");
const arrowDown = document.getElementById("down");

// ARRAY SLIDES
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
const slidesAltArray = ["01", "02", "03", "04", "05"];

// SLIDES
let slidesDOM = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  const customIndex = slidesAltArray[i];
  slidesDOM += `<img src="./img/${slide}" alt="${slide}" class="slide" data-index="${customIndex}"/>`;
}

slideContainer.innerHTML = slidesDOM;

// THUMBNAILS
let thumbnailDOM = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  const customIndex = slidesAltArray[i];
  thumbnailDOM += `<img src="./img/${slide}" alt="${slide}" class="thumbnail" data-index="${customIndex}"/>`;
}

thumbnailContainer.innerHTML = thumbnailDOM;

// ACTIVE SLIDE MANAGEMENT

console.log("cotoletta");

let slideIndex = 0;

let currentSlide = document.querySelectorAll(
  `[data-index="${slidesAltArray[slideIndex]}"]`
);
console.log("slide ottenuta", currentSlide);
for (i = 0; i < currentSlide.length; i++) {
  currentSlide[i].className += " active";
}

// ARROW DOWN
arrowDown.addEventListener("click", function () {
  slideIndex = slideIndex + 1;
  //   REMOVE ACTIVE CLASS
  let oldSlide = document.querySelectorAll(`.active`);
  for (i = 0; i < oldSlide.length; i++) {
    oldSlide[i].classList.remove("active");
  }

  //   NEW SLIDE ACTIVE
  currentSlide = document.querySelectorAll(
    `[data-index="${slidesAltArray[slideIndex]}"]`
  );
  for (i = 0; i < currentSlide.length; i++) {
    currentSlide[i].className += " active";
  }
  console.log("giu", slideIndex);

  //   LOOP
  if (slideIndex > slidesAltArray.length - 1) {
    slideIndex = 0;
    currentSlide = document.querySelectorAll(
      `[data-index="${slidesAltArray[slideIndex]}"]`
    );
    console.log("slide ottenuta", currentSlide);
    for (i = 0; i < currentSlide.length; i++) {
      currentSlide[i].className += " active";
    }
    console.log("looped");
  }
});

// ARROW UP
arrowUp.addEventListener("click", function () {
  slideIndex = slideIndex - 1;
  //   REMOVE ACTIVE CLASS
  let oldSlide = document.querySelectorAll(`.active`);
  for (i = 0; i < oldSlide.length; i++) {
    oldSlide[i].classList.remove("active");
  }

  //   NEW SLIDE ACTIVE
  currentSlide = document.querySelectorAll(
    `[data-index="${slidesAltArray[slideIndex]}"]`
  );
  for (i = 0; i < currentSlide.length; i++) {
    currentSlide[i].className += " active";
  }
  console.log("su", slideIndex);

  //   LOOP

  if (slideIndex < 0) {
    slideIndex = slidesAltArray.length - 1;
    console.log(slideIndex, "loop meno");
    currentSlide = document.querySelectorAll(
      `[data-index="${slidesAltArray[slideIndex]}"]`
    );
    for (i = 0; i < currentSlide.length; i++) {
      currentSlide[i].className += " active";
    }
    console.log("looped");
  }
});
