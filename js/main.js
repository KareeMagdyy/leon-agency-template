let burgerIcon = document.querySelector(".burger-icon");
let closeNav = document.querySelector(".nav-close");
let navBar = document.querySelector(".main-nav_links");

burgerIcon.addEventListener("click", () => {
  navBar.style.cssText = "transform:translateX(0)";
  burgerIcon.style.display = "hidden";
});

closeNav.addEventListener("click", () => {
  navBar.style.cssText = "transform:translateX(100%)";
  burgerIcon.style.display = "flex";
});
