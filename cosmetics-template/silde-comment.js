
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


