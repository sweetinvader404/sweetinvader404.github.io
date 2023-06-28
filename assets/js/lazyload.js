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

// Intersection Observer callback function
// function handleIntersection(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Load the image source from the data-src attribute
//       const image = entry.target.querySelector("img");
//       const src = image.getAttribute("data-src");
//       image.setAttribute("src", src);

//       // Stop observing the current entry
//       observer.unobserve(entry.target);
//     }
//   });
// }

// // Create a new Intersection Observer
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.1 // Trigger when 10% of the element is visible
// };

// const observer = new IntersectionObserver(handleIntersection, options);

// // Observe all elements with the 'section' class
// const sections = document.querySelectorAll(".section");
// sections.forEach(section => {
//   observer.observe(section);
// });
