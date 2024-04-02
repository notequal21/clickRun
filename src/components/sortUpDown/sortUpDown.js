if (document.querySelector('._up-down')) {
  const sortItem = document.querySelector('._up-down');
  const sortItemBtn = document.querySelector('._up-down .btn');
  const sortItemInput = sortItem.querySelector('input');

  sortItemBtn.addEventListener('click', () => {
    if (sortItemInput.checked) {
      if (sortItem.classList.contains('_up')) {
        sortItem.classList.remove('_up');
      } else {
        sortItem.classList.add('_up');
      }
    }
  });
}
