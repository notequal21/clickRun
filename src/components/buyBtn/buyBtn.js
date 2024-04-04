if (document.querySelector('.to_cart-counter')) {
  const btnToCart = document.querySelector('.btn-to-cart');
  const counter = document.querySelector('.to_cart-counter');
  const counterBtnArr = document.querySelectorAll(
    '.to_cart-counter__content button'
  );
  const counterInput = document.querySelector(
    '.to_cart-counter__content input'
  );

  const openCounter = () => {
    btnToCart.classList.add('_hidden');
    counter.classList.remove('_hidden');
  };
  const closeCounter = () => {
    btnToCart.classList.remove('_hidden');
    counter.classList.add('_hidden');
    counterInput.value = 1;
  };

  btnToCart.addEventListener('click', openCounter);

  counterBtnArr[0].addEventListener('click', () => {
    counterInput.value = +counterInput.value + 1;
  });
  counterBtnArr[1].addEventListener('click', () => {
    if (counterInput.value > 0) {
      counterInput.value = +counterInput.value - 1;
    }
    if (counterInput.value <= 0) {
      closeCounter();
    }
  });
}
