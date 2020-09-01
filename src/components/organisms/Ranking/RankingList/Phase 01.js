scrolling = () => {
  const container = document.querySelector('.listWrapper');
  for (let i = 0; i <= 704; i += 20) {
    setTimeout(() => {
      this.scroll(container, i);
    }, 10000);
    const fps = 100;
    const speedFactor = 0.003;
    const minDelta = 0.5;
    let autoScrollSpeed = 10;
    let autoScrollTimer;
    const restartTimer = null;
    let isScrolling = false;
    let prevPos = 0;
    let currentPos = 0;
    let currentTime;
    let prevTime;
    let timeDiff;
    const setAutoScroll = (newValue) => {
      window.onscroll = (ev) => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          setTimeout(() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }, 5000);
        }
      };
      if (newValue) {
        autoScrollSpeed = speedFactor * newValue;
      }
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
      }
      autoScrollTimer = setInterval(() => {
        currentTime = Date.now();
        if (prevTime) {
          if (!isScrolling) {
            timeDiff = currentTime - prevTime;
            currentPos += autoScrollSpeed * timeDiff;
            if (Math.abs(currentPos - prevPos) >= minDelta) {
              isScrolling = true;
              window.scrollTo(0, currentPos);
              isScrolling = false;
              prevPos = currentPos;
              prevTime = currentTime;
            }
          }
        } else {
          prevTime = currentTime;
        }
      }, 1000 / fps);
    };
    this.backToTop(container);
  }
  const scroll = (el, step) => {
    el.scrollBy(0, step);
  };
  const backToTop = (el) => {
    el.scrollTop = 0;
    window.addEventListener('scroll', (e) => {
    // window.pEageYOffset is the fallback value for IE
      currentPos = window.scrollY || window.pageYOffset;
    });
    handleManualScroll = () => {
    // window.pageYOffset is the fallback value for IE
      currentPos = window.scrollY || window.pageYOffset;
      clearInterval(autoScrollTimer);
      if (restartTimer) {
        clearTimeout(restartTimer);
      }
      restartTimer = setTimeout(() => {
        prevTime = null;
        this.setAutoScroll();
      }, 50);
    };
    window.addEventListener('wheel', handleManualScroll);
    window.addEventListener('touchmove', handleManualScroll);
    this.setAutoScroll(15);
  };
};
