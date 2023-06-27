// const lazySections = document.querySelectorAll(".lazy-section");

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Add a class to make the section visible
//       entry.target.classList.add("visible");

//       // Load resources when section becomes visible
//       const lazyResources = entry.target.querySelectorAll("[data-lazy-src]");
//       lazyResources.forEach((resource) => {
//         if (resource.tagName === "IMG") {
//           // For images
//           const img = new Image();
//           img.src = resource.dataset.lazySrc;
//           img.addEventListener("load", () => {
//             resource.setAttribute("src", img.src);
//           });
//         } else {
//           // For other resources like videos or iframes
//           resource.setAttribute("src", resource.dataset.lazySrc);
//         }

//         resource.removeAttribute("data-lazy-src");
//       });

//       observer.unobserve(entry.target);
//     }
//   });
// });

// lazySections.forEach((section) => {
//   section.classList.add("hidden");
//   observer.observe(section);
// });
