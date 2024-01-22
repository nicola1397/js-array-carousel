// CONTAINERS
const slideContainer = document.getElementById("slideContainer");
const hoverContainer = document.getElementById("hoverContainer");
const thumbnailContainer = document.getElementById("thumbnailContainer");

// CLICKS
const arrowUp = document.getElementById("up");
const arrowDown = document.getElementById("down");

// ARRAY SLIDES
const slides = ["01", "02", "03", "04", "05"];

// SLIDES
let thumbnailDOM = "";
let slidesDOM = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  slidesDOM += `<img src="./img/${slide}.webp" alt="${slide}" class="slide" data-index="${slide}"/>`;
  thumbnailDOM += `<img src="./img/${slide}.webp" alt="${slide}" class="thumbnail" data-index="${slide}" id="thumb-${slide}"/>`;
}

slideContainer.innerHTML = slidesDOM;
thumbnailContainer.innerHTML = thumbnailDOM;

// ACTIVE SLIDE MANAGEMENT
let thumbClick = 0;
let slideIndex = 0;

let currentSlide = document.querySelectorAll(
  `[data-index="${slides[slideIndex]}"]`
);
for (i = 0; i < currentSlide.length; i++) {
  currentSlide[i].className += " active";
}
// ARROW DOWN
arrowDown.addEventListener("click", function () {
  Down();
  console.log("giu", slideIndex);
});

// ARROW UP
arrowUp.addEventListener("click", function () {
  Up();
  console.log("su", slideIndex);
});

// THUMBNAIL NAVIGATION

const thumbnail = thumbnailContainer.querySelectorAll(`[id|="thumb"]`);

// TEST CICLO
for (let i = 0; i < slides.length; i++) {
  thumbnail[i].addEventListener("click", function () {
    slideIndex = i;
    console.log("new slide", slideIndex);
    replaceFull();
    i = slideIndex;
    console.log("valore index" + i);
  });
}

function replaceFull() {
  //   REMOVE OLD ACTIVE
  let oldSlide = document.querySelectorAll(`.active`);
  for (i = 0; i < oldSlide.length; i++) {
    oldSlide[i].classList.remove("active");
  }
  //   NEW SLIDE ACTIVE
  currentSlide = document.querySelectorAll(
    `[data-index="${slides[slideIndex]}"]`
  );
  for (i = 0; i < currentSlide.length; i++) {
    currentSlide[i].className += " active";
  }
}

function Down() {
  slideIndex = slideIndex + 1;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  replaceFull();
}

function Up() {
  slideIndex = slideIndex - 1;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
    console.log(slideIndex, "loop meno");
  }
  replaceFull();
}
// AUTO SCROLL
let timedScroll = setInterval(Down, 3000);

hoverContainer.addEventListener("mouseover", function () {
  clearInterval(timedScroll);
  console.log("Timer cleared");
});

hoverContainer.addEventListener("mouseout", function () {
  timedScroll = setInterval(Down, 3000);
  console.log("Timer restarted");
});
