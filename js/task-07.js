const inputEL = document.querySelector("#font-size-control");
const textEL = document.querySelector("#text");

inputEL.addEventListener("input", (event) => {
  textEL.style.fontSize = `${event.currentTarget.value}px`;
});
