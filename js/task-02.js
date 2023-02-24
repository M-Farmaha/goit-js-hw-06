const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ingredientsList = document.querySelector("#ingredients");

const allElements = [];
ingredients.forEach((ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  allElements.push(ingredientsItem);
});

ingredientsList.append(...allElements);
