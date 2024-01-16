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
  slideIndex = slideIndex + 1;
  replaceFull();

  console.log("giu", slideIndex);

  //   LOOP
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
    currentAdd();
  }
});

// ARROW UP
arrowUp.addEventListener("click", function () {
  slideIndex = slideIndex - 1;
  replaceFull();

  console.log("su", slideIndex);

  //   LOOP

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
    console.log(slideIndex, "loop meno");
    currentAdd();
  }
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

function currentAdd() {
  currentSlide = document.querySelectorAll(
    `[data-index="${slides[slideIndex]}"]`
  );
  for (i = 0; i < currentSlide.length; i++) {
    currentSlide[i].className += " active";
  }
}
