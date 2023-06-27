// Toggle mobile menu when hamburger icon is clicked
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  const isMenuActive = mobileMenu.classList.contains("active");
  document.body.style.overflow = isMenuActive ? "hidden" : "";
  mobileMenu.style.transform = isMenuActive
    ? "translateX(0)"
    : "translateX(-100%)";
  hamburger.textContent = isMenuActive ? "X" : "";
  hamburger.innerHTML = isMenuActive
    ? "X"
    : "<span></span><span></span><span></span>";
});

// Close mobile menu when a menu item is clicked
const mobileMenuItems = document.querySelectorAll(".mobile-menu a");
mobileMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = "";
    mobileMenu.style.transform = "translateX(-100%)";
    hamburger.innerHTML = "<span></span><span></span><span></span>";
  });
});
