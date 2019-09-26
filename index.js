let attachSvg = require('./lib/attachSvg.js');

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.svg-highlight').forEach(attachSvg);
});
