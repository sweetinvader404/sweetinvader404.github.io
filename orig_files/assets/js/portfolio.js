document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      this.classList.add("active");
      var siblings = Array.from(this.parentNode.children).filter(function (
        element
      ) {
        return element !== this;
      },
      this);
      siblings.forEach(function (sibling) {
        sibling.classList.remove("active");
      });

      var filter = this.getAttribute("data-filter");

      var galleryImages = document.querySelectorAll(".gallery .image");
      galleryImages.forEach(function (image) {
        if (filter === "all") {
          image.style.display = "block";
        } else {
          if (!image.classList.contains(filter)) {
            image.style.display = "none";
          } else {
            image.style.display = "block";
          }
        }
      });
    });
  });

  //MAGNIFIC-POPUP
  var gallery = document.querySelector(".gallery");
  if (gallery) {
    gallery.addEventListener("click", function (event) {
      var target = event.target;
      if (target.tagName === "A") {
        event.preventDefault();

        var magnificPopupOptions = {
          type: "image",
          removalDelay: 500,
          gallery: {
            enabled: true,
          },
          callbacks: {
            beforeOpen: function () {
              this.st.image.markup = this.st.image.markup.replace(
                "mfp-figure",
                "mfp-figure mfp-with-anim"
              );
              this.st.mainClass = this.st.el.getAttribute("data-effect");
            },
          },
          closeOnContentClick: true,
          midClick: true,
        };

        if (typeof target.dataset.magnificPopup !== "undefined") {
          var options = JSON.parse(target.dataset.magnificPopup);
          Object.assign(magnificPopupOptions, options);
        }

        var popup = new MagnificPopup(target, magnificPopupOptions);
        popup.open();
      }
    });
  }
});
