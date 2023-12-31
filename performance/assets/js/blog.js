var swiper = new Swiper(".blog-slider", {
  spaceBetween: 20,
  loop: !0,
  autoplay: { display: 2500, disableOnInteraction: !1 },
  pagination: { el: ".swiper-pagination2", clickable: !0 },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
