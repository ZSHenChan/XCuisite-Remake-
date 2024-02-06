import Component from './component';

class IntroVideo extends Component {
  _parentEl = document.querySelector('.video');
  _postIntro = document.querySelector('.section-post-intro');
  _gridGallery = document.querySelector('.section-grid');
  _introCtaBtn = document.querySelector('.intro-cta-btn');
  _videoPlaceholder = document.getElementById('video-placeholder');
  _introCaption = document.querySelector('.hero-caption');
  _videoDesktop = document.getElementById('video-desktop');
  _videoMobile = document.getElementById('video-mobile');

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

  addHandlerVideoScrolling = function (offSetHeight) {
    window.addEventListener(
      'scroll',
      function () {
        const elementHeight = this._parentEl.offsetHeight;
        let scrollTop = window.scrollY;
        let offset = Math.min(elementHeight, scrollTop);
        let opacity = 1 - offset / 300;
        this._parentEl.style.opacity = opacity;
      }.bind(this)
    );
  };

  addHandlerIntoCtaBtn = function () {
    this._introCtaObserver.observe(this._postIntro);
    this._gridGalleryObs.observe(this._gridGallery);
  };

  addHandlerLoadVideo = function (handler) {
    const isDesktop = screen.width >= 768;
    const targetVideo = isDesktop ? this._videoDesktop : this._videoMobile;
    targetVideo.style.display = 'block';
    targetVideo.addEventListener('loadeddata', function () {
      handler(isDesktop);
    });
  };

  loadVideo = function (isdesktop) {
    this._videoPlaceholder.style.display = 'none';
    this._introCaption.style.display = 'block';
    this._introCtaBtn.style.display = 'block';
  };
}

export default new IntroVideo();
