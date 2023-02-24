const categoriesList = document.querySelector("#categories");
const categoriesItemsAmount = categoriesList.children.length;
console.log(`Number of categories: ${categoriesItemsAmount}`);

const categoriesItemsArray = document.querySelectorAll(".item");
categoriesItemsArray.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}
  `);
});
