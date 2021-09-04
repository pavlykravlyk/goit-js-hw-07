const inputRef = document.querySelector('#name-input');

const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', input =>
  inputRef.value === ''
    ? (outputRef.textContent = 'незнайомець')
    : (outputRef.textContent = input.target.value),
);
