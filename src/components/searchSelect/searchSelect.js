import Choices from 'choices.js';

if (document.querySelector('.header-search__select')) {
  const selectArr = document.querySelectorAll('.header-search__select select');

  selectArr.forEach((item) => {
    const choices = new Choices(item, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
  });
}

if (document.querySelector('.header-search__input')) {
  const header = document.querySelector('.header');
  const input = header.querySelector('.header-search__input');
  const inputClear = header.querySelector('.header-search__close');

  input.addEventListener('input', (e) => {
    const { target } = e;

    if (target.value.length > 0) {
      inputClear.classList.add('_visible');
    } else {
      inputClear.classList.remove('_visible');
    }
  });

  inputClear.addEventListener('click', () => {
    input.value = '';
    inputClear.classList.remove('_visible');
  });
}
