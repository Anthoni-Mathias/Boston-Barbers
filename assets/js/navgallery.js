// Scroll to nav function
$('a[href^="#services"]').click(function () {
  let findPage = document.getElementById("services");
  findPage.scrollIntoView();
});

$('a[href^="#gallery"]').click(function () {
  let findPage = document.getElementById("gallery");
  findPage.scrollIntoView();
});

$('a[href^="#book"]').click(function () {
  let findPage = document.getElementById("book");
  findPage.scrollIntoView();
});

$('a[href^="#contact"]').click(function () {
  let findPage = document.getElementById("contact");
  findPage.scrollIntoView();
});
// Scroll to nav function //

// Nav icon on smaller screens collapse when clicking a link
// Credit to Marta Szymanska at Mdbootstrap for hamburger collapse code: https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/
$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});
// Nav icon on smaller screens collapse when clicking a link //

// Gallery section
// Credit to freeCodeCamp for gallery section slideshow: https://www.youtube.com/watch?v=3PHXvlpOkf4&ab_channel=freeCodeCamp.org
// https://github.com/john-smilga/javascript-basic-projects/tree/master/15-slider
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
  } else {
      nextBtn.style.display = "none";
  }
  if (counter > 0) {
      prevBtn.style.display = "block";
  } else {
      prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";
// Gallery section //





