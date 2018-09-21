let arrowDown = document.querySelector('.arrow-down'),
    toAbout = document.getElementById('jsAbout'),
    toResume = document.getElementById('jsResume'),
    toWorks = document.getElementById('jsWorks'),
    toContact = document.getElementById('jsContact'),
    aboutSection = document.getElementById('about'),
    resumeSection = document.getElementById('resume'),
    worksSection = document.getElementById('works'),
    contactSection = document.getElementById('contact');

arrowDown.addEventListener('click', function() {
  scrollToElem({
      elem: aboutSection,
      duration: 600,
      timingFunc: null,
      margin: 0
  });
})
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

function animation(options) {
  var start = Date.now();
  requestAnimationFrame(function animate() {
      var timePassed = Date.now() - start,
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
  var elem = options.elem,
      duration = options.duration || 1000,
      timingFunc = options.timingFunc || swing,
      margin = options.margin || 0;

  if (typeof elem === 'string') {
      elem = document.body.querySelector(elem);
  }
  if (!elem) return;

  var elemPos = elem.getBoundingClientRect(),
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
function pageScroll(elem) {
  let yOffset = getOffsetCoords(elem).top;

  window.scrollTo({
    top: yOffset,
    behavior: "smooth"
  }); 
}
function getOffsetCoords(elem) {
  var box = elem.getBoundingClientRect();

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