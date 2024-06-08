if (document.querySelector('.category_select')) {
  const categorySelectList = document.querySelectorAll('.category_select');

  categorySelectList.forEach((item) => {
    const selectTop = item.querySelector('.category_select__top');
    const selectDropdown = item.querySelector('.category_select__dropdown');
    const categorySelectList = item.querySelectorAll('._dropdown-item');

    selectTop.addEventListener('click', () => {
      if (item.classList.contains('_open')) {
        item.classList.remove('_open');
        selectDropdown.style.height = 0;

        categorySelectList.forEach((categorySelect) => {
          const categorySelectDropdown = categorySelect.querySelector(
            '._dropdown-item__list'
          );
          const categorySelectInputList =
            categorySelect.querySelectorAll('._checkbox input');
          const categorySelectInputListArr = Array.from(
            categorySelectInputList
          );

          const isSomeInputChecked = categorySelectInputListArr.some(
            (input) => input.checked
          );

          if (isSomeInputChecked) {
          } else {
            categorySelect.classList.remove('_open');
            categorySelectDropdown.style.height = 0;
          }
        });
      } else {
        item.classList.add('_open');
        selectDropdown.style.height = `${selectDropdown.scrollHeight + 60}px`;
      }
    });

    document.addEventListener('mouseup', function (e) {
      if (!item.contains(e.target)) {
        item.classList.remove('_open');
        selectDropdown.style.height = 0;
      }
    });

    categorySelectList.forEach((categorySelect) => {
      const categorySelectTop = categorySelect.querySelector(
        '._dropdown-item__top'
      );
      const categorySelectDropdown = categorySelect.querySelector(
        '._dropdown-item__list'
      );
      const categorySelectInputList =
        categorySelect.querySelectorAll('._checkbox input');

      categorySelectInputList.forEach((input) => {
        input.addEventListener('change', () => {
          if (
            Array.from(categorySelectInputList).filter((item) => item.checked)
              .length > 0
          ) {
            item.classList.add('_selected');
          } else {
            item.classList.remove('_selected');
          }
        });
      });

      categorySelectTop.addEventListener('click', () => {
        if (categorySelect.classList.contains('_open')) {
          const prevHeight = +selectDropdown.style.height.split('px')[0];
          selectDropdown.style.height = `${prevHeight - categorySelectDropdown.scrollHeight}px`;

          categorySelect.classList.remove('_open');
          categorySelectDropdown.style.height = 0;
        } else {
          categorySelect.classList.add('_open');
          categorySelectDropdown.style.height = `${categorySelectDropdown.scrollHeight + 40}px`;

          const prevHeight = +selectDropdown.style.height.split('px')[0];
          selectDropdown.style.height = `${prevHeight + categorySelectDropdown.scrollHeight + 60}px`;
        }
      });
    });
  });
}
