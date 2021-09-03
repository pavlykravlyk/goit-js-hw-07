const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

document
  .querySelector('#ingredients')
  .append(...makeListIngredients(ingredients));
