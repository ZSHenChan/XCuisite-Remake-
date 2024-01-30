class VideoScrolling {
  _postIntro = document.querySelector('.section-post-intro');
  _gridGallery = document.querySelector('.section-grid');
  _introCtaBtn = document.querySelector('.intro-cta-btn');

  _expandCtaBtn = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      this._introCtaBtn.classList.add('expand-btn');
      this._introCtaBtn.classList.remove('contract-btn');
    }
  };

  _contractCtaBtn = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      this._introCtaBtn.classList.remove('expand-btn');
      this._introCtaBtn.classList.remove('delay-animation');
      this._introCtaBtn.classList.add('contract-btn');
    }
  };

  _introCtaObserver = new IntersectionObserver(this._expandCtaBtn.bind(this), {
    root: null,
    threshold: 0.3,
  });
  _gridGalleryObs = new IntersectionObserver(this._contractCtaBtn.bind(this), {
    root: null,
    threshold: 0.3,
  });

  addHandlerVideoScrolling = function () {
    let target = document.querySelector('.video');
    window.addEventListener('scroll', function () {
      const elementHeight = target.offsetHeight;
      let scrollTop = this.window.scrollY;
      let offset = Math.min(elementHeight, scrollTop);
      let opacity = 1 - offset / 300;
      target.style.opacity = opacity;
    });
  };

  addHandlerIntoCtaBtn = function () {
    this._introCtaObserver.observe(this._postIntro);
    this._gridGalleryObs.observe(this._gridGallery);
  };
}

// const postIntro = document.querySelector('.section-post-intro');
// const gridGallery = document.querySelector('.section-grid');

// const expandCtaBtn = function (entries) {
//   const [entry] = entries;
//   if (entry.isIntersecting) {
//     introCtaBtn.classList.add('expand-btn');
//     introCtaBtn.classList.remove('contract-btn');
//   }
// };

// const contractCtaBtn = function (entries) {
//   const [entry] = entries;
//   if (entry.isIntersecting) {
//     introCtaBtn.classList.remove('expand-btn');
//     introCtaBtn.classList.remove('delay-animation');
//     introCtaBtn.classList.add('contract-btn');
//   }
// };

// const introCtaObserver = new IntersectionObserver(expandCtaBtn, {
//   root: null,
//   threshold: 0.3,
// });
// const gridGalleryObs = new IntersectionObserver(contractCtaBtn, {
//   root: null,
//   threshold: 0.3,
// });
// introCtaObserver.observe(postIntro);
// gridGalleryObs.observe(gridGallery);

export default new VideoScrolling();
