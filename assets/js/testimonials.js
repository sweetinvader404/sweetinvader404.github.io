// var swiper = new Swiper(".testimonial-slider", {
//   spaceBetween: 20,
//   loop: !0,
//   autoplay: { delay: 3e3, disableOnInteraction: !1 },
//   pagination: { el: ".swiper-pagination1", clickable: !0 },
//   breakpoints: {
//     0: { slidesPerView: 1 },
//     768: { slidesPerView: 2 },
//     1024: { slidesPerView: 3 }
//   }
// });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
