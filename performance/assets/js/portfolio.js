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
