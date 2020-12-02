document.addEventListener('DOMContentLoaded', function(){
  const hero = new HeroSlider(".swiper-container");
  hero.start();
});

class HeroSlider {
  constructor(el){
    this.el = el;
    this.swiper = this._initSwiper();
  }
  _initSwiper(){
    new Swiper(this.el, {
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
  
      },
    });
}
  start(){
    this.swiper.params.autoplay = {
      delay: 4000,
        disableOnInteraction: false
    }
    this.swiper.autoplay.start();
  }
}


let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
  
  })