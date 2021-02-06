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