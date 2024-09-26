document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("header nav ul li a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      menuLinks.forEach((l) => l.classList.remove("active"));
      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("header nav ul li a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Smooth scroll to the target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Remove active class from all links
      menuLinks.forEach((l) => l.classList.remove("active"));
      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});
