"use strict";

const mobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav");

// Toggle mobile nav
mobileNavBtn?.addEventListener("click", (e) => {
  const isOpen = mobileNav.dataset.isOpen === "true";
  mobileNav.dataset.isOpen = !isOpen;
});
