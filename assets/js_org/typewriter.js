/*******************Typewriter Effect*************************** */
const typewriterElement = document.getElementById("typewriter");
const words = ["Wordpress", "PHP", "Javascript", "HTML5", "CSS", "React"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[currentWordIndex];
  const currentText = isDeleting
    ? currentWord.substring(0, currentCharIndex - 1)
    : currentWord.substring(0, currentCharIndex + 1);
  typewriterElement.textContent = currentText;

  if (isDeleting) {
    currentCharIndex--;
  } else {
    currentCharIndex++;
  }

  if (!isDeleting && currentCharIndex === currentWord.length) {
    typewriterElement.classList.remove("typewriter-cursor");
    setTimeout(() => {
      isDeleting = true;
      typewriterElement.classList.add("typewriter-cursor");
    }, 1000);
  } else if (isDeleting && currentCharIndex === 0) {
    typewriterElement.classList.remove("typewriter-cursor");
    setTimeout(() => {
      isDeleting = false;
      typewriterElement.classList.add("typewriter-cursor");
      currentWordIndex++;
      if (currentWordIndex === words.length) {
        currentWordIndex = 0;
      }
    }, 500);
  }

  const typingSpeed = isDeleting ? 100 : 150;
  setTimeout(type, typingSpeed);
}

type(); // Start the typewriter effect immediately
