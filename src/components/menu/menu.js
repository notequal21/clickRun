if (document.querySelector('.mobile_nav')) {
  const body = document.querySelector('body');
  const nav = document.querySelector('.mobile_nav');
  const menu = document.querySelector('.menu');
  const openMenuBtn = document.querySelector('.mobile_nav__item_menu');

  window.onscroll = function () {
    myFunction();
  };

  // let navbar = document.querySelector('.header');
  // let sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset > 50) {
      menu.classList.add('_sticky');
    } else {
      menu.classList.remove('_sticky');
    }

    // console.log(sticky);
    // if (window.pageYOffset >= sticky) {
    //   navbar.classList.add('sticky');
    // } else {
    //   navbar.classList.remove('sticky');
    // }
  }

  window.addEventListener('scroll', myFunction);

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
