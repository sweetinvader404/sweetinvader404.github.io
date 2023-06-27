/*****************Home image blurred technique to avoid large contentful paint */
document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".rounded-image");
  const highResSrc = img.dataset.src;

  const image = new Image();
  image.src = highResSrc;
  image.onload = function () {
    img.src = highResSrc;
  };
});

/******************Change the navigation link color when the sections are in viewport**************** */
// Function to update the active link based on the current viewport
function updateActiveLink(entries) {
  entries.forEach((entry) => {
    const targetId = entry.target.getAttribute("id");
    const link = document.querySelector(`.navbar a[href="#${targetId}"]`);
    if (link) {
      if (entry.isIntersecting) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(updateActiveLink, { threshold: 0.5 });

// Observe all sections on the page
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
});

/*********************** Function to update the navigation styles based on scrolling******************/
function updateNavigationStyle() {
  var navbar = document.querySelector(".header");

  if (window.scrollY > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

// Event listener for scroll event
window.addEventListener("scroll", updateNavigationStyle);

// Initial call to set the navigation style on page load
updateNavigationStyle();
