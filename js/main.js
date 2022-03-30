let burgerIcon = document.querySelector(".burger-icon");
let closeNav = document.querySelector(".nav-close");
let navBar = document.querySelector(".main-nav_links");
let navLinks = document.querySelectorAll(".main-nav_links li");
let toTop = document.querySelector(".to-top");

burgerIcon.addEventListener("click", () => {
  navBar.style.cssText = "transform:translateX(0)";
  burgerIcon.style.display = "hidden";
  document.body.style.overflowY = "hidden";
});

closeNav.addEventListener("click", () => {
  navBar.style.cssText = "transform:translateX(100%)";
  burgerIcon.style.display = "flex";
  document.body.style.overflowY = "auto";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.style.cssText = "transform:translateX(100%)";
    burgerIcon.style.display = "flex";
    document.body.style.overflowY = "auto";
  });
});

window.onscroll = () => {
  if (window.scrollY >= 500) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
};

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
