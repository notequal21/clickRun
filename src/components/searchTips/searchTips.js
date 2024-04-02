if (document.querySelector('.header-search__tips')) {
  const header = document.querySelector('.header');
  const searchInput = header.querySelector(
    '.header-search .header-search__input'
  );
  const searchTips = header.querySelector('.header-search__tips');

  searchInput.addEventListener('input', (e) => {
    const { target } = e;
    if (target.value.length >= 3) {
      searchTips.classList.add('_open');
    } else {
      searchTips.classList.remove('_open');
    }
  });
  searchInput.addEventListener('focus', (e) => {
    const { target } = e;

    if (target.value.length >= 3) {
      searchTips.classList.add('_open');
    } else {
      searchTips.classList.remove('_open');
    }
  });
  searchInput.addEventListener('focusout', (e) => {
    const { target } = e;
    searchTips.classList.remove('_open');
  });
}
