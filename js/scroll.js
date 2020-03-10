window.addEventListener(
  "scroll",
  () => {
    menuHeight(), greyWelcome();
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
