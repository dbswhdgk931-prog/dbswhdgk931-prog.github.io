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
});
