import Component from './component';

class IntroVideo extends Component {
  _parentEl = document.querySelector('.video');
  _postIntro = document.querySelector('.section-post-intro');
  _gridGallery = document.querySelector('.section-grid');
  _introCtaBtn = document.querySelector('.intro-cta-btn');
  _videoPlaceholder = document.getElementById('video-placeholder');
  _introCaption = document.querySelector('.hero-caption');
  _videoDesktop = document.getElementById('video-desktop');
  // _videoMobile = document.getElementById('video-mobile');

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

  _lastKnownScrollPosition = 0;
  _ticking = false;

  addHandlerVideoScrolling = () => {
    window.addEventListener(
      'scroll',
      e => {
        this._lastKnownScrollPosition = window.scrollY;

        if (!this._ticking) {
          window.requestAnimationFrame(() => {
            this._updateOpacity(this._lastKnownScrollPosition);
            this._ticking = false;
          });

          this._ticking = true;
        }
      },
      { passive: true }
    );
  };

  _updateOpacity = function (scrollPos) {
    const elementHeight = this._parentEl.offsetHeight;
    let offset = Math.min(elementHeight, scrollPos);
    let opacity = 1 - offset / 300;
    this._parentEl.style.opacity = opacity;
  };

  addHandlerIntoCtaBtn = function () {
    this._introCtaObserver.observe(this._postIntro);
    this._gridGalleryObs.observe(this._gridGallery);
  };

  addHandlerLoadVideo = function (handler) {
    // const isDesktop = screen.width >= 768;
    // const targetVideo = isDesktop ? this._videoDesktop : this._videoMobile;
    // targetVideo.style.display = 'block';
    const targetVideo = this._videoDesktop;
    targetVideo.addEventListener('loadeddata', function () {
      handler(true);
    });
  };

  loadVideo = function (isdesktop) {
    this._videoPlaceholder.style.display = 'none';
    this._introCaption.style.display = 'block';
    this._introCtaBtn.style.display = 'block';
  };
}

export default new IntroVideo();
