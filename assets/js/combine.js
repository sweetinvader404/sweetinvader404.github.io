/******************************Hamburger****************************** */
const hamburger = document.querySelector(".hamburger"),
  mobileMenu = document.querySelector(".mobile-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"), mobileMenu.classList.toggle("active");
  let e = mobileMenu.classList.contains("active");
  (document.body.style.overflow = e ? "hidden" : ""),
    (mobileMenu.style.transform = e ? "translateX(0)" : "translateX(-100%)"),
    (hamburger.textContent = e ? "X" : ""),
    (hamburger.innerHTML = e ? "X" : "<span></span><span></span><span></span>");
});
const mobileMenuItems = document.querySelectorAll(".mobile-menu a");
mobileMenuItems.forEach(e => {
  e.addEventListener("click", () => {
    mobileMenu.classList.remove("active"),
      hamburger.classList.remove("active"),
      (document.body.style.overflow = ""),
      (mobileMenu.style.transform = "translateX(-100%)"),
      (hamburger.innerHTML = "<span></span><span></span><span></span>");
  });
});

/******************************End Hamburger****************************** */
/******************************Neural****************************** */

/******************************End Neural****************************** */
/****************************** TypeWriter****************************** */
const typewriterElement = document.getElementById("typewriter"),
  words = ["Wordpress", "PHP", "Javascript", "HTML5", "CSS", "React"];
let currentWordIndex = 0,
  currentCharIndex = 0,
  isDeleting = !1;
function type() {
  let e = words[currentWordIndex],
    r = isDeleting
      ? e.substring(0, currentCharIndex - 1)
      : e.substring(0, currentCharIndex + 1);
  (typewriterElement.textContent = r),
    isDeleting ? currentCharIndex-- : currentCharIndex++,
    isDeleting || currentCharIndex !== e.length
      ? isDeleting &&
        0 === currentCharIndex &&
        (typewriterElement.classList.remove("typewriter-cursor"),
        setTimeout(() => {
          (isDeleting = !1),
            typewriterElement.classList.add("typewriter-cursor"),
            ++currentWordIndex === words.length && (currentWordIndex = 0);
        }, 500))
      : (typewriterElement.classList.remove("typewriter-cursor"),
        setTimeout(() => {
          (isDeleting = !0),
            typewriterElement.classList.add("typewriter-cursor");
        }, 1e3));
  let t = isDeleting ? 100 : 150;
  setTimeout(type, t);
}
type();

/******************************End TypeWriter****************************** */
/******************************Skills****************************** */
if (typeof RocketLoader === "undefined") {
  window.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".skills");
    e.getBoundingClientRect().top;
    var t = window.innerHeight,
      r = !1;
    function n(e) {
      e.forEach(function (e) {
        e.isIntersecting &&
          !r &&
          (document.querySelectorAll(".progress-bar").forEach(function (e) {
            var t = e.querySelector(".progress-fill"),
              r = e.querySelector(".progress-text");
            (t.style.width = e.getAttribute("data-progress") + "%"),
              (r.textContent = e.getAttribute("data-progress") + "%");
          }),
          (r = !0));
      });
    }
    window.addEventListener("scroll", function o() {
      e.getBoundingClientRect().top < t &&
        !r &&
        new IntersectionObserver(n, {
          root: null,
          rootMargin: "0px",
          threshold: 0
        }).observe(e);
    });
  });
}

/******************************End Skills****************************** */
/******************************Portfolio****************************** */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".button").forEach(function (e) {
    e.addEventListener("click", function () {
      this.classList.add("active"),
        Array.from(this.parentNode.children)
          .filter(function (e) {
            return e !== this;
          }, this)
          .forEach(function (e) {
            e.classList.remove("active");
          });
      var e = this.getAttribute("data-filter");
      document.querySelectorAll(".gallery .image").forEach(function (t) {
        "all" === e
          ? (t.style.display = "block")
          : t.classList.contains(e)
          ? (t.style.display = "block")
          : (t.style.display = "none");
      });
    });
  });
  var e = document.querySelector(".gallery");
  e &&
    e.addEventListener("click", function (e) {
      var t = e.target;
      if ("A" === t.tagName) {
        e.preventDefault();
        var a = {
          type: "image",
          removalDelay: 500,
          gallery: { enabled: !0 },
          callbacks: {
            beforeOpen: function () {
              (this.st.image.markup = this.st.image.markup.replace(
                "mfp-figure",
                "mfp-figure mfp-with-anim"
              )),
                (this.st.mainClass = this.st.el.getAttribute("data-effect"));
            }
          },
          closeOnContentClick: !0,
          midClick: !0
        };
        void 0 !== t.dataset.magnificPopup &&
          Object.assign(a, JSON.parse(t.dataset.magnificPopup)),
          new MagnificPopup(t, a).open();
      }
    });
});

/******************************End Portfolio****************************** */
/******************************Swiper****************************** */

/******************************End Swiper****************************** */
/******************************Testimonials****************************** */
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

/******************************End Testimonial****************************** */
/******************************Blog****************************** */
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

/******************************End Blog****************************** */
/******************************Worker****************************** */

/******************************End Worker****************************** */
/******************************Script****************************** */
function updateActiveLink(e) {
  e.forEach(e => {
    let t = e.target.getAttribute("id"),
      a = document.querySelector(`.navbar a[href="#${t}"]`);
    a &&
      (e.isIntersecting
        ? a.classList.add("active")
        : a.classList.remove("active"));
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".rounded-image"),
    t = e.dataset.src,
    a = new Image();
  (a.src = t),
    (a.onload = function () {
      e.src = t;
    });
});
const observer = new IntersectionObserver(updateActiveLink, { threshold: 0.5 }),
  sections = document.querySelectorAll("section");
function updateNavigationStyle() {
  var e = document.querySelector(".header");
  window.scrollY > 0 ? e.classList.add("active") : e.classList.remove("active");
}
sections.forEach(e => {
  observer.observe(e);
}),
  window.addEventListener("scroll", updateNavigationStyle),
  updateNavigationStyle();

/***************************Facebook live chat************ */
/****************Official FACEBOOK SDK****************** */

/******************************End Script****************************** */
/******************************Leaflet****************************** */

/******************************End Leaflet****************************** */
/******************************Map****************************** */

/******************************End Map****************************** */
