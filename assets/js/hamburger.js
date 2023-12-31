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
