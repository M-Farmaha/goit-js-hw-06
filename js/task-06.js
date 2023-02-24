const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length > 0 && inputEl.value.length != inputEl.dataset.length) {
    inputEl.classList.add("invalid");
  } else inputEl.classList.remove("invalid");

  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
  } else inputEl.classList.remove("valid");
});
