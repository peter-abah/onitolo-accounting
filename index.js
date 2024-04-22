"use strict";

const mobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

// Toggle mobile nav
mobileNavBtn?.addEventListener("click", (e) => {
  const isOpen = mobileNav.dataset.isOpen === "true";
  mobileNav.dataset.isOpen = !isOpen;
});

// Close mobile nav when link in nav is clicked
mobileNavLinks.forEach((link) =>
  link.addEventListener("click", () => {
    mobileNav.dataset.isOpen = false;
  })
);
