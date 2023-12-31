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
