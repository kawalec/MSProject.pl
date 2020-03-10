window.addEventListener(
  "scroll",
  () => {
    menuHeight();
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
