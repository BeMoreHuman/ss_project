let arrowDown = document.querySelector('.arrow-down'),
    toAbout = document.getElementById('jsAbout'),
    toResume = document.getElementById('jsResume'),
    toWorks = document.getElementById('jsWorks'),
    toContact = document.getElementById('jsContact'),
    aboutSection = document.getElementById('about'),
    resumeSection = document.getElementById('resume'),
    worksSection = document.getElementById('works'),
    contactSection = document.getElementById('contact'),
    burgerButton = document.querySelector('.menu-burger__wrap'),
    mobileMenu = document.querySelector('.menu-mobile__wrap'),
    toAboutMobile = document.getElementById('jsAboutMobile'),
    toResumeMobile = document.getElementById('jsResumeMobile'),
    toWorksMobile = document.getElementById('jsWorksMobile'),
    toContactMobile = document.getElementById('jsContactMobile');

// functionality for navigation in Mobile_menu
toAboutMobile.addEventListener('click', function(e) {
  e.preventDefault();
  closeMobileMenu();
  scrollToElem({
    elem: aboutSection,
    duration: 600,
    timingFunc: null,
    margin: 0
  });
})
toResumeMobile.addEventListener('click', function(e) {
  e.preventDefault();
  closeMobileMenu();
  scrollToElem({
    elem: resumeSection,
    duration: 600,
    timingFunc: null,
    margin: 0
  });
})
toWorksMobile.addEventListener('click', function(e) {
  e.preventDefault();
  closeMobileMenu();
  scrollToElem({
    elem: worksSection,
    duration: 600,
    timingFunc: null,
    margin: 0
  });
})
toContactMobile.addEventListener('click', function(e) {
  e.preventDefault();
  closeMobileMenu();
  scrollToElem({
    elem: contactSection,
    duration: 600,
    timingFunc: null,
    margin: 0
  });
})
// functionality for navigation arrow_down
arrowDown.addEventListener('click', function() {
  scrollToElem({
      elem: aboutSection,
      duration: 600,
      timingFunc: null,
      margin: 0
  });
})
// functionality for navigation in Desktop_menu
toAbout.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToElem({
    elem: aboutSection,
    duration: 600,
    timingFunc: null,
    margin: 0
  });
})
toResume.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToElem({
    elem: resumeSection,
    duration: 600,
    timingFunc: null,
    margin: 0
  });
})
toWorks.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToElem({
    elem: worksSection,
    duration: 600,
    timingFunc: null,
    margin: 0
  });
})
toContact.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToElem({
    elem: contactSection,
    duration: 600,
    timingFunc: null,
    margin: 0
  });
})
// functionality for burger_btn > open/close Mobile_menu
burgerButton.addEventListener('click', function () {
  if (burgerButton.classList.contains('menu-burger__wrap--active')) {
      closeMobileMenu();
  }
  else {
      openMobileMenu();
  }
});
function openMobileMenu() {
  window.addEventListener('resize', onWindowResize);
  burgerButton.classList.add('menu-burger__wrap--active');
  mobileMenu.classList.add('menu-mobile__wrap--active');
  document.body.classList.add('overflow-hidden');
}
function closeMobileMenu() {
  window.removeEventListener('resize', onWindowResize);
  burgerButton.classList.remove('menu-burger__wrap--active');
  mobileMenu.classList.remove('menu-mobile__wrap--active');
  document.body.classList.remove('overflow-hidden');
}
function onWindowResize() {
  if (window.innerWidth > 767) {
      closeMobileMenu();
  }
}
// functions that are responsible for scrolling with smooth animation
function animation(options) {
  const start = Date.now();
  requestAnimationFrame(function animate() {
      let timePassed = Date.now() - start,
          timeFraction = timePassed / options.duration,
          progress;
      if (timeFraction > 1) timeFraction = 1;
      progress = options.timing(timeFraction);
      options.draw(progress);
      if (timeFraction < 1) {
          requestAnimationFrame(animate);
      }
  });
}
function scrollToElem(options) {
  /* options = {
            elem: NodeElem || Selector String,
            duration: Number,
            timingFunc: Function,
            margin: number
        }
   */
  let elem = options.elem,
      duration = options.duration || 1000,
      timingFunc = options.timingFunc || swing,
      margin = options.margin || 0;

  if (typeof elem === 'string') {
      elem = document.body.querySelector(elem);
  }
  if (!elem) return;

  const elemPos = elem.getBoundingClientRect(),
      startY = window.pageYOffset,
      stopY = startY + elemPos.top,
      way = stopY - startY - margin;

  animation({
      duration: duration,
      timing: timingFunc,
      draw: function (progress) {
          window.scrollTo(0, startY + progress * way);
      }
  });

  function swing(t) {
      return 0.5 - Math.cos( t * Math.PI ) / 2;
  }

  function linear(time) {
      return time;
  }

};
// This functions isn't using for now.
function pageScroll(elem) {
  const yOffset = getOffsetCoords(elem).top;

  window.scrollTo({
    top: yOffset,
    behavior: "smooth"
  }); 
}
function getOffsetCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}

(function () {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
})();


// console.log(toAbout);