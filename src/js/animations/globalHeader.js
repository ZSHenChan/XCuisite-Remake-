class GlobalHeader {
  _parentEl = document.querySelector('.global-header');
  _globalNav = document.querySelector('.navbar');
  _globalCurtain = document.querySelector('.global-curtain');
  _globalCurtainBottom = document.querySelector('.global-curtain-bottom');

  _cartIcon = document.getElementById('cart-icon');
  _cartQty = document.getElementById('cart-qty');
  _emptyCartBtn = document.querySelector('.empty-cart-btn');

  curtainFlyout = function () {
    this._globalCurtain.classList.add('curtain-flyout');
    this._globalCurtainBottom.classList.add('curtain-bottom-flyout');
  };

  curtainFlyin = function () {
    this._globalCurtainBottom.classList.remove('curtain-bottom-flyout');
    this._globalCurtain.classList.remove('curtain-flyout');
  };

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
