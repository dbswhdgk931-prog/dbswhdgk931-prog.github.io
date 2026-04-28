document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".sidebar nav a");

  // Highlight active sidebar link on scroll
  function updateActive() {
    let current = "";
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id;
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current
      );
    });
  }

  window.addEventListener("scroll", updateActive);
  updateActive();

  // Smooth scroll on sidebar click
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var id = link.getAttribute("href").slice(1);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Image lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".img-box img").forEach(function (img) {
    img.addEventListener("click", function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("active");
    });
  });

  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("active");
  });

  // SVG lightbox
  var svgLightbox = document.getElementById("svg-lightbox");
  var svgLightboxContent = document.getElementById("svg-lightbox-content");

  document.querySelectorAll(".svg-box").forEach(function (box) {
    box.addEventListener("click", function () {
      var svg = box.querySelector("svg");
      if (svg) {
        svgLightboxContent.innerHTML = svg.outerHTML;
        svgLightbox.classList.add("active");
      }
    });
  });

  svgLightbox.addEventListener("click", function () {
    svgLightbox.classList.remove("active");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
      svgLightbox.classList.remove("active");
    }
  });
});
