/******************************Hamburger****************************** */
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

/******************************End Hamburger****************************** */
/******************************Neural****************************** */
const canvas = document.querySelector("#neural-network"),
  context = canvas.getContext("2d");
let width, height;
const numParticles = 110,
  particleRadius = 2,
  maxDistance = 100,
  lineWidth = 0.2,
  particles = [],
  resizeCanvas = () => {
    (width = window.innerWidth),
      (height = window.innerHeight),
      (canvas.width = width),
      (canvas.height = height);
  },
  initializeParticles = () => {
    for (let t = 0; t < 110; t++)
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5
      });
  },
  updateParticles = () => {
    for (let t = 0; t < 110; t++) {
      let e = particles[t];
      (e.x += e.vx),
        (e.y += e.vy),
        e.x < 0 && (e.x += width),
        e.x > width && (e.x -= width),
        e.y < 0 && (e.y += height),
        e.y > height && (e.y -= height);
    }
  },
  renderParticles = () => {
    context.clearRect(0, 0, width, height), (context.lineWidth = 0.2);
    for (let t = 0; t < 110; t++) {
      let e = particles[t];
      for (let i = t + 1; i < 110; i++) {
        let a = particles[i],
          n = e.x - a.x,
          r = e.y - a.y,
          l = n * n + r * r;
        if (l < 1e4) {
          let c = 1 - l / 1e4;
          (context.strokeStyle = `rgba(255, 255, 255, ${c})`),
            context.beginPath(),
            context.moveTo(e.x, e.y),
            context.lineTo(a.x, a.y),
            context.stroke();
        }
      }
      (context.fillStyle = "#fff"),
        context.beginPath(),
        context.arc(e.x, e.y, 2, 0, 2 * Math.PI),
        context.fill();
    }
  },
  animate = () => {
    updateParticles(), renderParticles(), requestAnimationFrame(animate);
  },
  startAnimation = () => {
    resizeCanvas(), initializeParticles(), animate();
  },
  throttle = (t, e) => {
    let i;
    return () => {
      i ||
        (i = setTimeout(() => {
          t(), (i = null);
        }, e));
    };
  };
window.addEventListener("resize", throttle(startAnimation, 200)),
  startAnimation();

/******************************End Neural****************************** */
/****************************** TypeWriter****************************** */
const typewriterElement = document.getElementById("typewriter"),
  words = ["Wordpress", "PHP", "Javascript", "HTML5", "CSS", "React"];
let currentWordIndex = 0,
  currentCharIndex = 0,
  isDeleting = !1;
function type() {
  let e = words[currentWordIndex],
    r = isDeleting
      ? e.substring(0, currentCharIndex - 1)
      : e.substring(0, currentCharIndex + 1);
  (typewriterElement.textContent = r),
    isDeleting ? currentCharIndex-- : currentCharIndex++,
    isDeleting || currentCharIndex !== e.length
      ? isDeleting &&
        0 === currentCharIndex &&
        (typewriterElement.classList.remove("typewriter-cursor"),
        setTimeout(() => {
          (isDeleting = !1),
            typewriterElement.classList.add("typewriter-cursor"),
            ++currentWordIndex === words.length && (currentWordIndex = 0);
        }, 500))
      : (typewriterElement.classList.remove("typewriter-cursor"),
        setTimeout(() => {
          (isDeleting = !0),
            typewriterElement.classList.add("typewriter-cursor");
        }, 1e3));
  let t = isDeleting ? 100 : 150;
  setTimeout(type, t);
}
type();

/******************************End TypeWriter****************************** */
/******************************Skills****************************** */
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

/******************************End Skills****************************** */
/******************************Portfolio****************************** */
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

/******************************End Portfolio****************************** */
/******************************Swiper****************************** */

/******************************End Swiper****************************** */
/******************************Testimonials****************************** */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/******************************End Testimonial****************************** */
/******************************Blog****************************** */
// var swiper = new Swiper(".blog-slider", {
//   spaceBetween: 20,
//   loop: !0,
//   autoplay: { display: 2500, disableOnInteraction: !1 },
//   pagination: { el: ".swiper-pagination2", clickable: !0 },
//   breakpoints: {
//     0: { slidesPerView: 1 },
//     768: { slidesPerView: 2 },
//     1024: { slidesPerView: 3 }
//   }
// });

/******************************End Blog****************************** */
/******************************Worker****************************** */

/******************************End Worker****************************** */
/******************************Script****************************** */
function updateActiveLink(e) {
  e.forEach(e => {
    let t = e.target.getAttribute("id"),
      a = document.querySelector(`.navbar a[href="#${t}"]`);
    a &&
      (e.isIntersecting
        ? a.classList.add("active")
        : a.classList.remove("active"));
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".rounded-image"),
    t = e.dataset.src,
    a = new Image();
  (a.src = t),
    (a.onload = function () {
      e.src = t;
    });
});
const observer = new IntersectionObserver(updateActiveLink, { threshold: 0.5 }),
  sections = document.querySelectorAll("section");
function updateNavigationStyle() {
  var e = document.querySelector(".header");
  window.scrollY > 0 ? e.classList.add("active") : e.classList.remove("active");
}
sections.forEach(e => {
  observer.observe(e);
}),
  window.addEventListener("scroll", updateNavigationStyle),
  updateNavigationStyle();
/****************Defer facebook messenger******************** */
// function loadFacebookMessengerChat() {

//   if (window.loadFacebookMessengerChat.loaded) return;
//   window.loadFacebookMessengerChat.loaded = true;

//   const script = document.createElement("script");
//   script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//   script.defer = true;
//   script.onload = () => {

//     window.FB.init({
//       xfbml: true,
//       version: "v12.0"
//     });
//     window.FB.CustomerChat.showDialog();
//   };

//   document.body.appendChild(script);
// }

// window.addEventListener("load", loadFacebookMessengerChat);
/****************Defer facebook messenger******************** */
/****************Official FACEBOOK SDK****************** */
window.fbAsyncInit = function () {
  FB.init({
    appId: "591873306363263",
    autoLogAppEvents: true,
    xfbml: true,
    version: "v13.0"
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

/****************end Official FACEBOOK SDK****************** */

/******************************End Script****************************** */
/******************************Contact Form****************************** */
(function () {
  function validEmail(email) {
    var re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function validateHuman(honeypot) {
    if (honeypot) {
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }
  function getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements)
      .filter(function (k) {
        return elements[k].name !== "honeypot";
      })
      .map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

    var formData = {};
    fields.forEach(function (name) {
      var element = elements[name];
      formData[name] = element.value;
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(", ");
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "Sheet1"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(formData);
    return formData;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var data = getFormData(form);
    if (data.email && !validEmail(data.email)) {
      var invalidEmail = form.querySelector(".email-invalid");
      if (invalidEmail) {
        invalidEmail.style.display = "block";
        return false;
      }
    } else {
      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);
        var formElements = form.querySelector(".form-elements");
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
        return;
      };
      var encoded = Object.keys(data)
        .map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");
      xhr.send(encoded);
    }
  }

  function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  }
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
/******************************End Contact Form****************************** */
/******************************Map****************************** */

/******************************End Map****************************** */
