const inputRef = document.querySelector('#name-input');

const outputRef = document.querySelector('#name-output');

inputRef.addEventListener(
  'input',
  input => (outputRef.textContent = input.target.value),
);
