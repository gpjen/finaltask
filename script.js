// nav active handler
const showNavMenu = document.getElementById("isShow");
const navBrand = document.getElementsByClassName("navBrand");
const navMenu = document.querySelector(".navMenu");
const btnMenu = document.querySelectorAll(".btnMenu a");
const containerContent = document.querySelector("main");
const content = document.querySelectorAll(".content");

navMenu.addEventListener("click", (e) => {
  btnMenu.forEach((x) => {
    x.className = "btnMenu";
  });
  e.target.classList.toggle("active");
});

showNavMenu.addEventListener("click", (e) => {
  navMenu.classList.toggle("showNavOnMobile");
});

containerContent.addEventListener("scroll", () => {});
