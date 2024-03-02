class GlobalHeader {
  _parentEl = document.querySelector('.global-header');
  _globalNav = document.querySelector('.navbar');
  _globalCurtain = document.querySelector('.global-curtain');
  _globalCurtainBottom = document.querySelector('.global-curtain-bottom');

  _nav = document.querySelector('.navbar-nav--left');
  _navBtn = document.querySelector('.navbar-nav-btn');
  _navBackground = document.querySelector('.navbar-nav-background');
  _navIcon = document.querySelector('.navbar-nav-icon');

  _cartIcon = document.getElementById('cart-icon');
  _cartQty = document.getElementById('cart-qty');
  _emptyCartBtn = document.querySelector('.empty-cart-btn');

  navFlyin = function () {
    this._nav.classList.toggle('nav--flyout');
    this._navBackground.classList.toggle('navbar-nav-background--flyout');
    this._navIcon.classList.toggle('navbar-nav-icon--active');
  };

  curtainFlyout = function () {
    this._globalCurtain.classList.toggle('curtain-flyout');
    this._globalCurtainBottom.classList.toggle('curtain-bottom-flyout');
  };

  curtainFlyin = function () {
    this._globalCurtainBottom.classList.remove('curtain-bottom-flyout');
    this._globalCurtain.classList.remove('curtain-flyout');
  };

  addHandlerNavCurtain(handler) {
    this._navBtn.addEventListener('click', handler);
  }

  addHandlerCurtain(handlerFlyout, handlerFlyin) {
    this._cartIcon.addEventListener('click', handlerFlyout);
    this._globalCurtainBottom.addEventListener('mouseover', handlerFlyin);
  }

  addHandlerEmptyCart = function (handler) {
    this._emptyCartBtn.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  };
}

export default new GlobalHeader();
