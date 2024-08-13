/*
Документация слайдера: https://swiperjs.com/
*/

import Swiper from 'swiper';
import {
  A11y,
  Pagination,
  Navigation,
  Thumbs,
  EffectFade,
  Controller,
  Autoplay,
} from 'swiper/modules';
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

  const mainImg = new Swiper('.main-body__img', {
    modules: [EffectFade, Controller],
    effect: 'fade',
    slidesPerView: 1,
    watchSlidesProgress: true,
    spaceBetween: 0,
    speed: 2000,
    on: {
      init: function () {
        const slides = document.querySelectorAll(
          '.main-body__img .swiper-slide'
        );
        slides.forEach((slide) => {
          slide.style.display = 'block';
        });
      },

      // navigationNext: (swiper) => swiper.speed(5000),
      // navigationPrev: (swiper) => swiper.speed(5000),
    },
  });

  const mainSlider = new Swiper('.main-body__slider', {
    modules: [Pagination, Controller, Autoplay],
    slidesPerView: 1,
    autoHeight: false,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.main-body__pagination',
      clickable: true,
    },
    on: {
      init: function () {
        const slides = document.querySelectorAll(
          '.main-body__slider .swiper-slide'
        );
        slides.forEach((slide) => {
          slide.style.display = 'block';
        });
      },
      slideChange: function (swiper) {
        mainImg.slideTo(swiper.activeIndex, 2000);
      },
    },
  });

  // createSlider('.main-body__slider', {
  //   modules: [Pagination],
  //   slidesPerView: 1,
  //   autoHeight: false,
  //   pagination: {
  //     el: '.main-body__pagination',
  //     clickable: true,
  //   },
  // });

  // mainSlider.controller.control = mainImg;
  // mainImg.controller.control = mainSlider;

  createSlider('.main-body__category', {
    slidesPerView: 3,
    autoHeight: false,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 6,
      },
      // 920: {
      //   slidesPerView: 4,
      // },
      // 1100: {
      //   slidesPerView: 5,
      // },
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
        spaceBetween: 10,
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
