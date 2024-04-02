if (document.querySelector('.reviews-card')) {
  const cards = document.querySelectorAll('.reviews-card');

  cards.forEach((element) => {
    const comment = element.querySelector('._comment-text');
    const btn = element.querySelector('.reviews-card__link');

    btn.addEventListener('click', () => {
      if (comment.classList.contains('_open')) {
        comment.classList.remove('_open');
        btn.classList.remove('_open');
      } else {
        comment.classList.add('_open');
        btn.classList.add('_open');
      }
    });
  });
}
