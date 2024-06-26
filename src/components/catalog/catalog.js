if (document.querySelector('.catalog')) {
  const catalog = document.querySelector('.catalog');
  const catalogBody = document.querySelector('.catalog-body');
  const catalogOpenBtn = document.querySelectorAll('._open-catalog');
  const catalogCloseBtn = catalog.querySelector('.catalog__close');
  const catalogColArr = catalog.querySelectorAll('.catalog-col');
  const catalogSubmenuArr = catalog.querySelectorAll('.catalog-col_submenu');
  const body = document.querySelector('body');
  const header = document.querySelector('.header');

  const closeCatalog = () => {
    catalog.classList.remove('_open');
    body.classList.remove('lock');
    catalogSubmenuArr.forEach((item) => item.classList.remove('_open'));
    catalogColArr.forEach((item) => {
      const submenuItems = item.querySelectorAll('._submenu');
      submenuItems.forEach((item) => item.classList.remove('_active'));
    });
  };

  const escClose = (e) => {
    if (e.key === 'Escape') {
      closeCatalog();
    }
  };

  catalogOpenBtn.forEach((item) =>
    item.addEventListener('click', () => {
      if (catalog.classList.contains('_open')) {
        closeCatalog();
      } else {
        catalog.classList.add('_open');
        body.classList.add('lock');

        catalog.style.padding = `${header.scrollHeight / 1.15}px 0 0`;
        catalogBody.style.height = `calc(100vh - ${header.scrollHeight / 1.15}px)`;

        document.addEventListener('keydown', escClose);
        document.removeEventListener('keyup', escClose);
      }
    })
  );

  catalogCloseBtn.addEventListener('click', closeCatalog);

  catalogColArr.forEach((item, index) => {
    const submenuItems = item.querySelectorAll('._submenu');

    submenuItems.forEach((submenuItem, submenuIndex) => {
      submenuItem.addEventListener('mouseover', () => {
        const catalogSubmenuItems =
          catalogSubmenuArr[index].querySelectorAll('.catalog-submenu');

        // deactivate prev items
        submenuItems.forEach((item) => item.classList.remove('_active'));
        if (index === 0) {
          catalogSubmenuArr.forEach((item) => item.classList.remove('_open'));
          catalogColArr.forEach((item) => {
            const submenuItemsReset = item.querySelectorAll('._submenu');
            submenuItemsReset.forEach((item) =>
              item.classList.remove('_active')
            );
          });
        } else if (index === 1) {
          catalogSubmenuArr[1].classList.remove('_open');
        }
        catalogSubmenuItems.forEach((item) => item.classList.remove('_active'));

        // activate current item
        submenuItem.classList.add('_active');
        catalogSubmenuArr[index].classList.add('_open');
        catalogSubmenuItems[submenuIndex].classList.add('_active');
      });
    });
  });
}
