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
