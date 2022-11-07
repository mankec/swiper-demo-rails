import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper-bundle.css';

window.addEventListener('load', (e) => {
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
      swiper.slideTo(index, 500, true)
  })


  // swiper.on('slideChange', function () {
  //   console.log('slide changed');
  // });





  function modifyState(activeSlide) {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,
      "Page", `${activeSlide.getAttribute('page')}`);

  }

  // Select the node that will be observed for mutations
  const targetNode = document.querySelector('.mySwiper')

  // Callback function to execute when mutations are observed
  const callback = (mutationList) => {
    let executed = false;
    for (const mutation of mutationList) {

      if (mutation.attributeName === 'aria-label') {
        const activeSlide = document.querySelector('.swiper-slide-active')
        modifyState(activeSlide)
        return executed = true;
      }
      if (executed) break;
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, {
    attributes: true,
    childList: true,
    subtree: true
  });





})
