window.addEventListener(
  "scroll",
  () => {
    menuHeight(), greyWelcome(), menuColor();
  },
  false
);

const menuHeight = () => {
  const scrollValue = document.documentElement.scrollTop;
  if (scrollValue <= document.querySelector("#ms_project").offsetTop - 50) {
    document.querySelector(".header__logo-image").style.height = "3em";
    document.querySelector("header").style.padding = "20px 0";
    document.querySelector("header").style.transition = "all .2s linear";
  } else {
    document.querySelector(".header__logo-image").style.height = "2em";
    document.querySelector("header").style.padding = "0";
    document.querySelector("header").style.transition = "all .2s linear";
  }
};

const greyWelcome = () => {
  const headHeight = document.querySelector(".welcome").getBoundingClientRect();
  if (headHeight.y < -100) {
    document.querySelector(".welcome").style.filter = "grayscale(80%)";
  } else {
    document.querySelector(".welcome").style.filter = "grayscale(0%)";
  }
};

function menuColor() {
  const heightS1 = document.querySelector("#ms_project").offsetTop,
    heightS2 = document.querySelector("#project_management").offsetTop,
    heightS3 = document.querySelector("#ms_excel").offsetTop,
    heightS4 = document.querySelector("#consulting").offsetTop,
    heightS5 = document.querySelector("#contact").offsetTop,
    heightS6 = document.querySelector("#about").offsetTop;
  let scrollValue = document.documentElement.scrollTop;

  if (scrollValue < heightS1) {
    // document
    //   .querySelectorAll(".scroll li")
    //   .forEach(e => e.classList.remove("active"));
    document
      .querySelectorAll(".menu__link")
      .forEach(e => e.classList.remove("menu--active"));
  } else if (scrollValue < heightS2) {
    // document
    //   .querySelectorAll(".scroll li:not(.M1)")
    //   .forEach(e => e.classList.remove("active"));
    // document.querySelector(".S1").classList.add("active");
    document
      .querySelectorAll(".menu__link")
      .forEach(e => e.classList.remove("menu--active"));
    document.querySelectorAll(".menu__link")[0].classList.add("menu--active");
  } else if (scrollValue < heightS3) {
    // document
    //   .querySelectorAll(".scroll li:not(.M2)")
    //   .forEach(e => e.classList.remove("active"));
    // document.querySelector(".S2").classList.add("active");
    document
      .querySelectorAll(".menu__link")
      .forEach(e => e.classList.remove("menu--active"));
    document.querySelectorAll(".menu__link")[1].classList.add("menu--active");
  } else if (scrollValue < heightS4) {
    // document
    //   .querySelectorAll(".scroll li:not(.M3)")
    //   .forEach(e => e.classList.remove("active"));
    // document.querySelector(".S3").classList.add("active");
    document
      .querySelectorAll(".menu__link")
      .forEach(e => e.classList.remove("menu--active"));
    document.querySelectorAll(".menu__link")[2].classList.add("menu--active");
  } else if (scrollValue < heightS5) {
    // document
    //   .querySelectorAll(".scroll li:not(.M4)")
    //   .forEach(e => e.classList.remove("active"));
    // document.querySelector(".S4").classList.add("active");
    document
      .querySelectorAll(".menu__link")
      .forEach(e => e.classList.remove("menu--active"));
    document.querySelectorAll(".menu__link")[3].classList.add("menu--active");
  } else if (scrollValue < heightS6) {
    // document
    //   .querySelectorAll(".scroll li:not(.M5)")
    //   .forEach(e => e.classList.remove("active"));
    // document.querySelector(".S5").classList.add("active");
    document
      .querySelectorAll(".menu__link")
      .forEach(e => e.classList.remove("menu--active"));
    document.querySelectorAll(".menu__link")[4].classList.add("menu--active");
  } else {
    // document
    //   .querySelectorAll(".scroll li:not(.M6)")
    //   .forEach(e => e.classList.remove("active"));
    // document.querySelector(".S6").classList.add("active");
    document
      .querySelectorAll(".menu__link")
      .forEach(e => e.classList.remove("menu--active"));
    document.querySelectorAll("nav ul li a")[5].classList.add("menu--active");
  }
}
