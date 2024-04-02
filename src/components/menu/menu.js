if (document.querySelector('.mobile_nav')) {
  const body = document.querySelector('body');
  const nav = document.querySelector('.mobile_nav');
  const menu = document.querySelector('.menu');
  const openMenuBtn = document.querySelector('.mobile_nav__item_menu');

  openMenuBtn.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      nav.classList.remove('open');
      body.classList.remove('lock');
    } else {
      menu.classList.add('open');
      nav.classList.add('open');
      body.classList.add('lock');
    }
  });
}
