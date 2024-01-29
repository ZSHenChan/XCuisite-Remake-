import 'bootstrap';
import 'regenerator-runtime/runtime';

import animations from '../animations/defaultAnimations.js';
import globalHeader from '../animations/globalHeader.js';

import cart from '../components/cart.js';
import * as model from '../model.js';

export default class Controller {
  _controlCurtainFlyout = function () {
    cart.render(model.state.cart.items);
    globalHeader.curtainFlyout();
  };

  _controlCurtainFlyin = function () {
    globalHeader.curtainFlyin();
  };

  _init = function () {
    animations.observeAllAnimatedComponents();
    globalHeader.addHandlerCurtain(
      this._controlCurtainFlyout,
      this._controlCurtainFlyin
    );
    globalHeader.addHandlerEmptyCart(this._controlEmptyCart);
  };

  _controlEmptyCart = function () {
    // cart.renderSpinner();
    model.emptyCart();
    setTimeout(function () {
      globalHeader.curtainFlyin();
    }, 300);
  };
}
