const input = document.getElementById('validation-input');

input.addEventListener('blur', () =>
  Number(input.dataset.length) !== input.value.length
    ? input.classList.add('invalid') || input.classList.remove('valid')
    : input.classList.add('valid') || input.classList.remove('invalid'),
);
