const navBtn = document.getElementById("mobile-nav");
const navMenu = document.getElementById("nav-menu");

navBtn.addEventListener("click", () => {
  if (navMenu.style.display != "flex") {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
});
