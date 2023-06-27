window.addEventListener("DOMContentLoaded", function () {
  var skillsSection = document.querySelector(".skills");
  var skillsSectionPosition = skillsSection.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  var animated = false;

  function animateProgressBars(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !animated) {
        var progressBars = document.querySelectorAll(".progress-bar");

        progressBars.forEach(function (bar) {
          var progressFill = bar.querySelector(".progress-fill");
          var progressText = bar.querySelector(".progress-text");

          progressFill.style.width = bar.getAttribute("data-progress") + "%";
          progressText.textContent = bar.getAttribute("data-progress") + "%";
        });

        animated = true;
      }
    });
  }

  function createObserver() {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    var observer = new IntersectionObserver(animateProgressBars, options);
    observer.observe(skillsSection);
  }

  function checkScroll() {
    var skillsSectionPosition = skillsSection.getBoundingClientRect().top;

    if (skillsSectionPosition < windowHeight && !animated) {
      createObserver();
    }
  }

  window.addEventListener("scroll", checkScroll);
});
