const purgecss = require("purgecss");

const content = ["index.html"]; // Add your HTML files here
const css = ["assets/css/all.min.css"]; // Add the path to your Font Awesome CSS file here

const result = purgecss.purge({
  content,
  css,
});

console.log(result[0].css);
