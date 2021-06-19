new Swiper('.slider-sertificate__container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   slidesPerView: 3,
   breakpoints: {
      576: {
         slidesPerView: 3,
         spaceBetween: 15,
      },

      680: {
         slidesPerView: 3,
         spaceBetween: 15,
      },

      768: {
         slidesPerView: 3,
         spaceBetween: 15,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 7,
      },
   }
});