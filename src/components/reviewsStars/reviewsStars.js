if (document.querySelector('[data-current-stat]')) {
  const statItems = document.querySelectorAll('[data-current-stat]');

  const starFill = `<img src="./img/icons/star.svg" alt="">`;
  const starFillHalf = `<img src="./img/icons/star-0.5.svg" alt="">`;
  const starNone = `<img src="./img/icons/star-grey.svg" alt="">`;

  statItems.forEach((item) => {
    const count = +item.dataset.currentStat;

    if (Number.isInteger(count)) {
      item.innerHTML = `${starFill.repeat(Math.floor(count))}${starNone.repeat(5 - count)}`;
    } else {
      item.innerHTML = `${starFill.repeat(Math.floor(count))}${starFillHalf}${starNone.repeat(5 - Math.round(count))}`;
    }

    // item.appendChild()
  });
}
