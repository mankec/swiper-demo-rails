import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper-bundle.css';

window.addEventListener('turbo:load', (event) => {
  console.log("turbo:load")

  initializeSwipe(0)

})

function initializeSwipe(index) {
  console.log(`initializeSwipe ${index}`)

  //
  //TODO: Make page id in url to always be the same as the data-history attribute
  //

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    initialSlide: index,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    history: {
      key: 'pages',
      replaceState: true,
    },
  });

  let activeSlide = document.querySelector('.swiper-slide-active')
  let pageId = activeSlide.getAttribute('data-history')

  function appendSlide(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      swiper.appendSlide(this.responseText)
    }
    xhttp.open("GET", `../append/${id}`);
    xhttp.send();
  }

  swiper.on('slideChangeTransitionEnd', function () {

    let index = swiper.activeIndex
    let lastSlideIndex = swiper.slides.length - 1

    if (swiper.activeIndex == lastSlideIndex) {
      console.log('APPEND SLIDE')
      appendSlide(pageId)

    } else {
      swiper.destroy(false, false)
      setTimeout(() => {
        initializeSwipe(index)
      }, 0)
    }


  })


}


