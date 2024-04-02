if (document.querySelector('.cart_item-content__count')) {
  const counterArr = document.querySelectorAll('.cart_item-content__count');

  counterArr.forEach((item) => {
    const buttons = item.querySelectorAll('button');
    const input = item.querySelector('input');

    buttons[0].addEventListener('click', () => {
      if (input.value - 1 >= 0) {
        input.value -= 1;
      }
    });
    buttons[1].addEventListener('click', () => {
      input.value = +input.value + 1;
    });
  });
}
