/*
Документация слайдера: https://swiperjs.com/
*/

import Swiper from 'swiper';
import { A11y, Pagination, Navigation, Thumbs } from 'swiper/modules';
/*
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
*/

import '../../scss/base/swiper.scss';
// import "../../scss/libs/swiper.scss";
// import 'swiper/css';
export const createSlider = (el, options) => {
  let mergedOptions;
  const defaultOptions = {
    modules: [A11y],
    slidesPerView: 'auto',
    speed: 300,
    a11y: true,
  };

  if (options && typeof options === 'object') {
    mergedOptions = { ...defaultOptions, ...options };
    if (options.modules) {
      mergedOptions.modules = [
        ...new Set([...defaultOptions.modules, ...options.modules]),
      ];
    }
  }
  sliders.push([el, mergedOptions || defaultOptions]);
};

const sliders = [];
// Инициализация слайдеров
function initSliders() {
  // Список слайдеров
  // Проверяем, есть ли слайдер на странице
  sliders.forEach((element) => {
    new Swiper(element[0], element[1]);
  });
}

window.addEventListener('load', function (e) {
  const catalogItemSliderMin = new Swiper('.catalog_item-body__slider-min', {
    modules: [Pagination, Thumbs],
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    spaceBetween: 10,
  });

  createSlider('.catalog_item-body__slider-big', {
    modules: [Pagination, Thumbs],
    slidesPerView: 1,
    // spaceBetween: 20,
    thumbs: {
      swiper: catalogItemSliderMin,
    },
  });

  createSlider('.main-body__slider', {
    modules: [Pagination],
    slidesPerView: 1,
    autoHeight: false,
    pagination: {
      el: '.main-body__pagination',
      clickable: true,
    },
  });

  if (document.querySelector('.card_slider')) {
    const blockArr = document.querySelectorAll('.card_slider');

    blockArr.forEach((item) => {
      const slider = item.querySelector('.card_slider-body');
      const sliderPrevBtn = item.querySelector('._prev');
      const sliderNextBtn = item.querySelector('._next');

      createSlider(slider, {
        modules: [Navigation],
        slidesPerView: 2,
        spaceBetween: 2,
        navigation: {
          prevEl: sliderPrevBtn,
          nextEl: sliderNextBtn,
        },

        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
          },
        },
      });
    });
  }

  initSliders();
});

// Бинд слайдеров на window для беков
window.initSliders = initSliders;
