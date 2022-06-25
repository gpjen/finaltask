const btnNavMenu = document.getElementById("showNavMenu");
const navMenu = document.getElementsByClassName("navMenu");
const navBrand = document.getElementsByClassName("navBrand");

btnNavMenu.addEventListener("click", (e) => {
  navMenu[0].classList.toggle("showMenu");
  navBrand[0].classList.toggle("hideBrand");
});
