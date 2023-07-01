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

/***************************Facebook live chat************ */
/****************Official FACEBOOK SDK****************** */
// window.fbAsyncInit = function () {
//   FB.init({
//     appId: "591873306363263",
//     autoLogAppEvents: true,
//     xfbml: true,
//     version: "v13.0"
//   });
// };

// (function (d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");

/*******************End Customize FACEBOOK SDK****************** */
function loadFacebookChat() {
  var fbChat = document.getElementById("fb-customerchat-wrapper");
  fbChat.setAttribute("fb-xfbml-state", "RENDERED");
  fbChat.innerHTML =
    '<div class="fb-customerchat" attribution="setup_tool" page_id="113810161758805" theme_color="#084E8A" logged_in_greeting="Hello! How can we assist you today?" logged_out_greeting="Hello! How can we assist you today?"></div>';

  // Load the Facebook SDK asynchronously
  window.fbAsyncInit = function () {
    FB.init({
      appId: "591873306363263",
      autoLogAppEvents: true,
      xfbml: true,
      version: "v13.0"
    });
    FB.XFBML.parse(fbChat);
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
}

function loadFacebookChatLazy() {
  if (window.requestIdleCallback) {
    requestIdleCallback(function () {
      loadFacebookChat();
    });
  } else {
    setTimeout(function () {
      loadFacebookChat();
    }, 500);
  }
}

// Trigger the lazy loading of the Facebook chat plugin when the window finishes loading
window.addEventListener("load", loadFacebookChatLazy);
