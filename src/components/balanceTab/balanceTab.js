if (document.querySelector('.lk_layout-withdraw__top-type')) {
  const radioBtns = document.querySelectorAll(
    '.lk_layout-withdraw__top-type input[type=radio]'
  );
  const inputsLists = document.querySelectorAll('.lk_layout-withdraw__inputs');

  radioBtns.forEach((item) => {
    item.addEventListener('change', () => {
      inputsLists.forEach((item) => item.classList.remove('active'));

      Array.from(inputsLists)
        .filter((inputItem) => {
          return item.dataset.type === inputItem.dataset.type;
        })[0]
        .classList.add('active');
    });
  });
}
