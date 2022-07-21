// nav active handler
const showNavMenu = document.getElementById("isShow");
const navMenu = document.querySelector(".navMenu");
const btnMenu = document.querySelectorAll(".btnMenu a");
const mainContent = document.querySelector("main");

const resetBtnMenu = () => {
  btnMenu.forEach((x) => {
    x.className = "btnMenu";
  });
};

navMenu.addEventListener("click", (e) => {
  if (e.target.parentElement.className == "btnMenu") {
    resetBtnMenu();
    e.target.classList.toggle("active");
  }
});

showNavMenu.addEventListener("click", (e) => {
  navMenu.classList.toggle("showNavOnMobile");
});

mainContent.addEventListener("scroll", () => {
  let scrollY = Math.floor(mainContent.scrollTop);
  const windowHight = window.innerHeight - 20;
  let scrollX = Math.floor(mainContent.scrollLeft);
  const windowWidth = window.innerWidth - 20;

  if (scrollY > windowHight * 4 || scrollX > windowWidth * 4) {
    resetBtnMenu();
    btnMenu[4].classList.toggle("active");
    document.querySelector("footer").classList = "showFooter";
  } else if (scrollY > windowHight * 3 || scrollX > windowWidth * 3) {
    resetBtnMenu();
    btnMenu[3].classList.toggle("active");
    document.querySelector("footer").classList = "";
  } else if (scrollY > windowHight * 2 || scrollX > windowWidth * 2) {
    resetBtnMenu();
    btnMenu[2].classList.toggle("active");
    document.querySelector("footer").classList = "";
  } else if (scrollY > windowHight || scrollX > windowWidth) {
    resetBtnMenu();
    btnMenu[1].classList.toggle("active");
    document.querySelector("footer").classList = "";
  } else if (scrollY < windowHight || scrollX < windowWidth) {
    resetBtnMenu();
    btnMenu[0].classList.toggle("active");
    document.querySelector("footer").classList = "";
  }
});
