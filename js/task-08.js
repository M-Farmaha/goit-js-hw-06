const formEl = document.querySelector(".login-form");
const submitBtn = formEl.lastElementChild;
const emailEL = formEl.firstElementChild.lastElementChild;
const passwordEL = submitBtn.previousElementSibling.lastElementChild;

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (emailEL.value.length === 0 || passwordEL.value.length === 0) {
    alert("Please fill in all the fields!");
  } else {
    const formData = {};
    formData[emailEL.name] = emailEL.value;
    formData[passwordEL.name] = passwordEL.value;
    console.log(formData);
    event.target.reset();
  }
}
