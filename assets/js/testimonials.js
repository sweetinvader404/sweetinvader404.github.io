var swiper = new Swiper(".testimonial-slider", {
  spaceBetween: 20,
  loop: !0,
  autoplay: { delay: 3e3, disableOnInteraction: !1 },
  pagination: { el: ".swiper-pagination1", clickable: !0 },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
