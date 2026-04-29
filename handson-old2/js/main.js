document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const subSections = document.querySelectorAll("h3[id]");
  const navLinks = document.querySelectorAll(".sidebar nav a");

  // Highlight active sidebar link on scroll
  function updateActive() {
    var currentSection = "";
    var currentSub = "";

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 100) {
        currentSection = section.id;
      }
    });

    subSections.forEach(function (h3) {
      if (window.scrollY >= h3.offsetTop - 100) {
        currentSub = h3.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (link.classList.contains("nav-sub")) {
        link.classList.toggle("active", currentSection === "step8" && href === "#" + currentSub);
      } else {
        link.classList.toggle("active", href === "#" + currentSection);
      }
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

  // Copy button for all <pre> blocks
  document.querySelectorAll("pre").forEach(function (pre) {
    pre.style.position = "relative";
    var btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "복사";
    pre.appendChild(btn);

    btn.addEventListener("click", function () {
      var code = pre.querySelector("code");
      var text = code ? code.textContent : pre.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = "복사됨!";
        setTimeout(function () {
          btn.textContent = "복사";
        }, 1500);
      });
    });
  });
});
