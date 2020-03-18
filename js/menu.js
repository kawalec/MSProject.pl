const hamburger = document.querySelector(".menu__hamburger");
const menu = document.querySelector(".menu__list");

const handleClick = () => {
  hamburger.classList.toggle("menu__hamburger--active");
  menu.classList.toggle("menu__list--active");
};

hamburger.addEventListener("click", handleClick, false);

document
  .querySelectorAll(".menu__link")
  .forEach(e => e.addEventListener("click", handleClick, false));
