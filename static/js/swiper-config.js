var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    speed: 550,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});