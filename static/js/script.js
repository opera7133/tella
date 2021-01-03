var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 550,
  autoplay: {
    delay: 6000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function toggleNav() {
  var hamburger = document.getElementById("hamburgerbtn");
  var overlay = document.getElementById("overlay");
  var body = document.body;

  hamburger.addEventListener("click", function () {
    overlay.classList.toggle("open");
    hamburger.classList.toggle("is-open");
    body.classList.toggle("scroll-lock");
  });
}
toggleNav();

document.querySelector('.scroll-top').addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});