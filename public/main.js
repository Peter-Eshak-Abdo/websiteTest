const menu = document.querySelector("#mobileMenu");
const menuLinks = document.querySelector(".navbarMenu");

menu.addEventListener("click", (eo) => {
  menu.classList.toggle("isActive");
  menuLinks.classList.toggle("active");
});



