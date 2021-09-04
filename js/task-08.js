const controlsRefs = {
  input: document.querySelector('input'),
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
};
const { input, render, destroy } = controlsRefs;

const createBoxes = amount => {
  amount = Number(input.value);
  let boxSize = 30;

  boxes.innerHTML = [...Array(amount)]
    .map(() => {
      boxSize += 10;
      return `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${randomColor()};" ></div>`;
    })
    .join('');
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

render.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);

const randomColor = () =>
  'rgb(' +
  Math.round(Math.random() * 255) +
  ',' +
  Math.round(Math.random() * 255) +
  ',' +
  Math.round(Math.random() * 255) +
  ')';
