let sliderNumber = Math.floor(Math.random() * 21) + 1;
let company = document.querySelector(".company");

const opacityAdd = () => {
  company.classList.remove("opc_del");
  company.classList.add("opc_add");
};

const opacityDel = () => {
  company.classList.remove("opc_add");
  company.classList.add("opc_del");
};

const newSlider = () => {
  sliderNumber++;
  if (sliderNumber > 21) sliderNumber = 1;
  let slider =
    '<a href="#' +
    sliderNumber +
    '"><img src="images/brands/s' +
    sliderNumber +
    '.png"></a>';
  company.innerHTML = slider;
  setTimeout("opacityAdd()", 3000);
  setTimeout("newSlider()", 4000);
  setTimeout("opacityDel()", 5000);
};

window.addEventListener("load", newSlider(sliderNumber));
