class Animations {
  _reveals;

  _revealFunc = function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('reveal');
      observer.unobserve(entry.target);
    });
  };

  _defaultObs = new IntersectionObserver(this._revealFunc, {
    root: null,
    threshold: 0.1,
  });

  observeAllAnimatedComponents = function () {
    this._reveals = document.querySelectorAll('.reveal');
    this._reveals.forEach(re => this._defaultObs.observe(re));
  };
}

export default new Animations();
