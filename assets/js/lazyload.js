// Function to check if section is near the bottom of the viewport
const isSectionNearViewportBottom = section => {
  const rect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  return (rect.top = viewportHeight);
};

// Lazy load JavaScript file
const lazyLoadJS = src => {
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  document.head.appendChild(script);
};

// Lazy load CSS file
const lazyLoadCSS = href => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.onload = () => {
    link.onload = null;
    link.removeAttribute("onload");
  };
  document.head.appendChild(link);
};

// Check if each section is near the bottom of the viewport and lazy load corresponding files
const handleScroll = () => {
  const home = document.getElementById("home");
  // const personality = document.getElementById("personality");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");
  const portfolio = document.getElementById("portfolio");
  const qualifications = document.getElementById("qualifications");
  const services = document.getElementById("services");
  const testimonial = document.getElementById("testimonial");
  const blog = document.getElementById("blog");
  // if (
  //   home &&
  //   isSectionNearViewportBottom(home) &&
  //   /!home.classList.contains("lazy-loaded")
  // ) {
  //   lazyLoadCSS("assets/css/home.css");
  //   lazyLoadCSS("assets/css/style.css");
  //   lazyLoadCSS("assets/css/responsive.css");

  //   home.classList.add("lazy-loaded");
  // }
  // if (
  //   personality &&
  //   isSectionNearViewportBottom(personality) &&
  //   /!personality.classList.contains("lazy-loaded")
  // ) {
  //   // lazyLoadCSS("assets/css/combine.css");
  //   // lazyLoadCSS("assets/css/style.css");
  //   // lazyLoadCSS("assets/css/responsive.css");
  //   personality.classList.add("lazy-loaded");
  // }
  if (
    about &&
    isSectionNearViewportBottom(about) &&
    !about.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/style.css");
    lazyLoadCSS("assets/css/responsive.css");
    lazyLoadCSS("assets/css/combine.css");
    about.classList.add("lazy-loaded");
  }

  if (
    skills &&
    isSectionNearViewportBottom(skills) &&
    !skills.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/style.css");
    lazyLoadCSS("assets/css/responsive.css");
    lazyLoadJS("assets/js/combine.js");
    lazyLoadCSS("assets/css/combine.css");

    skills.classList.add("lazy-loaded");
  }
  if (
    portfolio &&
    isSectionNearViewportBottom(portfolio) &&
    !portfolio.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/combine.css");
    lazyLoadCSS("assets/css/style.css");
    lazyLoadCSS("assets/css/responsive.css");

    lazyLoadJS("assets/js/combine.js");

    portfolio.classList.add("lazy-loaded");
  }
  if (
    qualifications &&
    isSectionNearViewportBottom(qualifications) &&
    !qualifications.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/combine.css");
    lazyLoadCSS("assets/css/style.css");
    lazyLoadCSS("assets/css/responsive.css");

    qualifications.classList.add("lazy-loaded");
  }
  if (
    services &&
    isSectionNearViewportBottom(services) &&
    services.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/combine.css");
    lazyLoadCSS("assets/css/style.css");
    lazyLoadCSS("assets/css/responsive.css");

    services.classList.add("lazy-loaded");
  }
  if (
    testimonial &&
    isSectionNearViewportBottom(testimonial) &&
    !testimonial.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/combine.css");
    lazyLoadCSS("assets/css/style.css");
    lazyLoadCSS("assets/css/responsive.css");

    lazyLoadJS("assets/js/swiper.js");
    lazyLoadJS("assets/js/combine.js");
    testimonial.classList.add("lazy-loaded");
  }
  if (
    blog &&
    isSectionNearViewportBottom(blog) &&
    !blog.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/combine.css");
    lazyLoadCSS("assets/css/style.css");
    lazyLoadCSS("assets/css/responsive.css");

    lazyLoadJS("assets/js/combine.js");
    blog.classList.add("lazy-loaded");
  }
};

// Attach event listener for scroll event
window.addEventListener("scroll", handleScroll);
