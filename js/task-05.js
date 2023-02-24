const inputEL = document.querySelector('[id="name-input"]');
const outputEL = document.querySelector('[id="name-output"]');

inputEL.addEventListener("input", (e) => {
  if (e.currentTarget.value !== "") {
    outputEL.textContent = e.currentTarget.value;
  } else outputEL.textContent = "Anonymous";
});
// не зрозумів різниці між 'e.currentTarget.value' та 'inputEL.value'
// працює одинаково в обох випадках, що використовувати ???
