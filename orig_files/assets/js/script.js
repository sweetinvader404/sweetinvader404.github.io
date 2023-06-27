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
