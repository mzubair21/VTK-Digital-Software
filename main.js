import './style.css'



const hamburgerButton = document.getElementById("hamburger-button");
const navMenu = document.getElementById("nav-menu");
const closeMenuButton = document.getElementById("close-menu-button");

closeMenuButton.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

