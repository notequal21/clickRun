import Choices from 'choices.js';

if (document.querySelector('.lk_layout-create__select')) {
  const select = document.querySelector('.lk_layout-create__select select');

  const choices = new Choices(select, {
    itemSelectText: '',
    removeItemButton: true,
    renderSelectedChoices: 'always',
    noResultsText: 'Ничего не найдено',
  });

  const selectItemsListHTML = Array.from(
    choices.choiceList.element.querySelectorAll('.choices__item')
  );
  let selectItemsList = selectItemsListHTML.map((item) => {
    return {
      value: item.dataset.value,
      checked: false,
    };
  });

  choices.passedElement.element.addEventListener('choice', (e) => {
    const { detail } = e;

    const currentItem = selectItemsList.find(
      (item) => item.value === detail.choice.value
    );

    if (currentItem.checked) {
      currentItem.checked = false;
      setTimeout(() => {
        choices.removeActiveItemsByValue(detail.choice.value);
      }, 0);
    } else {
      currentItem.checked = true;
    }
  });
}
