import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper-bundle.css';

window.addEventListener('turbo:load', (event) => {
  console.log("turbo:load")

  initializeSwipe(0)

})

function initializeSwipe(index) {
  console.log(`initializeSwipe ${index}`)

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    initialSlide: index,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function appendSlide() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      swiper.appendSlide(this.responseText)
    }
    xhttp.open("GET", `append`);
    xhttp.send();
  }

  swiper.on('slideChangeTransitionEnd', function () {

    let index = swiper.activeIndex
    let lastSlideIndex = swiper.slides.length - 1

    if (index == lastSlideIndex) {
      console.log('APPEND SLIDE')
      appendSlide()
      swiper.update()
    }


    setTimeout(() => {
      swiper.destroy()
      initializeSwipe(index)
    }, 100)

  })
}


