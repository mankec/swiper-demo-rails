import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper-bundle.css';

window.addEventListener('turbo:load', (event) => {
  console.log("turbo:load")
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let url = window.location.href
  const splitUrl = window.location.href.split('/')

  const [activeSlideNumber] = splitUrl.slice(-1)
  console.log(activeSlideNumber)
  console.log('Current url ' + url)

  const slides = document.querySelectorAll('.swiper-slide')

  slides.forEach(function (slide, index) {
    if ((index + 1) == activeSlideNumber)
      swiper.slideTo(index, 0, false)
  })
  // swiper.on('slideChange', function () {
  //   console.log('slide changed');
  // });

  function modifyState(pageNumber) {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,
      "Page", `${pageNumber}`);
  }

  swiper.on('slideNextTransitionEnd', function () {
    console.log('next')
    const activeSlide = document.querySelector('.swiper-slide-active')
    let pageNumber = activeSlide.getAttribute('page')
    modifyState(pageNumber)
  });

  swiper.on('slidePrevTransitionEnd', function () {
    console.log('prev')
    const activeSlide = document.querySelector('.swiper-slide-active')
    let pageNumber = activeSlide.getAttribute('page')
    modifyState(pageNumber)
  });

  swiper.on('slideChangeTransitionEnd', function (index, elem) {

  })



})


