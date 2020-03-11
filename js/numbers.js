function animateValue(id, start, end, duration) {
  const obj = document.querySelector(`.${id}`);
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("proj", 0, 104, 5000);
animateValue("hour", 0, 4357, 2000);
animateValue("flip", 0, 98, 4000);
