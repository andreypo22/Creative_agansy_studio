import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.testimonials__swiper', {
  slidesPerView: 1.5,
  slidesPerGroup: 1,
  spaceBetween: 0,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.testimonials__btn-next',
    prevEl: '.testimonials__btn-prev',
  },
  breakpoints: {
    360: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    576: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
});

