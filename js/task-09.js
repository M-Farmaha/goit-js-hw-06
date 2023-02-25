function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const colorIndexEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", () => {
  colorIndexEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
