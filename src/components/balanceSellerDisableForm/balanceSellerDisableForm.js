if (document.querySelector('.lk_layout-withdraw')) {
  const form = document.querySelector('.lk_layout-withdraw');
  const typeInputList = form.querySelectorAll(
    '.lk_layout-withdraw__top-type ._radio-type input'
  );
  const withdrawInputList = form.querySelectorAll(
    '.lk_layout-withdraw__inputs input'
  );
  const btn = form.querySelector('.lk_layout-withdraw__btn');

  const disableForm = () => {
    typeInputList.forEach((item) => (item.disabled = true));
    withdrawInputList.forEach((item) => (item.disabled = true));
    btn.disabled = true;
  };

  btn.addEventListener('click', disableForm);
}
