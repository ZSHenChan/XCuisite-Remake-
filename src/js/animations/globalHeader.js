class GlobalHeader {
  _parentEl = document.querySelector('.global-header');
  _globalNav = document.querySelector('.navbar');
  _globalCurtain = document.querySelector('.global-curtain');
  _globalCurtainBottom = document.querySelector('.global-curtain-bottom');

  _cartIcon = document.getElementById('cart-icon');
  _cartQty = document.getElementById('cart-qty');

  _data;

  curtainFlyout = function () {
    this._globalCurtain.classList.add('curtain-flyout');
    this._globalCurtainBottom.classList.add('curtain-bottom-flyout');
  };

  curtainFlyin = function () {
    this._globalCurtainBottom.classList.remove('curtain-bottom-flyout');
    this._globalCurtain.classList.remove('curtain-flyout');
  };

  addHandlerCurtain = function (handler) {
    this._cartIcon.addEventListener('click', function () {
      handler();
    });
    this._globalCurtainBottom.addEventListener(
      'mouseover',
      this.curtainFlyin.bind(this)
    );
  };
}

export default new GlobalHeader();
