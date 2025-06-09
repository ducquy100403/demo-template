const commentSwiper = new Swiper('.comment-swiper', {
  navigation: {
    nextEl: '.comment-swiper-next',
    prevEl: '.comment-swiper-prev',
  },
  pagination: {
    el: '.comment-swiper-pagination',
    clickable: true
  },
  breakpoints: {
    360: {
      slidesPerView: 1.4,
      spaceBetween: 16,
      slidesOffsetAfter: 30,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesOffsetAfter: 0
    }
  }
});

const swiper = new Swiper('.product-swiper', {
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  breakpoints: {

    360: {
      slidesPerView: 2.2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 2,
    }
  }
});
