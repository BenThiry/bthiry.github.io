// script.js

document.addEventListener("DOMContentLoaded", function () {
  const videoFooter = document.getElementById("videoFooter");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Set a threshold for when to show the video (adjust as needed)
    const threshold = document.documentElement.scrollHeight - window.innerHeight - 200;

    if (scrollPosition >= threshold) {
      videoFooter.style.display = "block";
    } else {
      videoFooter.style.display = "none";
    }
  });
});
