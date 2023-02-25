function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const allNewDivEl = [];
  let dimension = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newDivEl = document.createElement("div");
    newDivEl.style.width = `${dimension}px`;
    newDivEl.style.height = `${dimension}px`;
    newDivEl.style.backgroundColor = getRandomHexColor();
    dimension += 10;
    allNewDivEl.push(newDivEl);
  }

  boxesEl.append(...allNewDivEl);
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls").firstElementChild;
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");

function handleClickCreateBtn() {
  createBoxes(inputEl.value);
}
function handleClickDestroyBtn() {
  boxesEl.innerHTML = "";
  // метод 'boxesEl.childNodes.remove()' нажаль не працює, в чому помилка?
}

createBtnEl.addEventListener("click", handleClickCreateBtn);
destroyBtnEl.addEventListener("click", handleClickDestroyBtn);
