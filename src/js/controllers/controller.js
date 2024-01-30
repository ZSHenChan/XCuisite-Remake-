import 'bootstrap';
import 'regenerator-runtime/runtime';

import animations from '../animations/defaultAnimations.js';
import globalHeader from '../animations/globalHeader.js';

import cart from '../components/cart.js';
import * as model from '../model.js';

import { CURTAIN_FLYIN_DELAY } from '../config.js';

export default class Controller {
  constructor() {
    globalHeader.addHandlerCurtain(
      this._controlCurtainFlyout,
      this._controlCurtainFlyin
    );
    globalHeader.addHandlerEmptyCart(this._controlEmptyCart);
  }

  _controlCurtainFlyout = function () {
    cart.render(model.state.cart.items);
    globalHeader.curtainFlyout();
  };

  _controlCurtainFlyin = function () {
    globalHeader.curtainFlyin();
  };

  _init = function () {
    animations.observeAllAnimatedComponents();
  };

  _controlEmptyCart = function () {
    cart.renderSpinner();
    model.emptyCart();
    setTimeout(function () {
      cart.render(model.state.cart.items);
    }, CURTAIN_FLYIN_DELAY * 1000);
    setTimeout(function () {
      globalHeader.curtainFlyin();
    }, CURTAIN_FLYIN_DELAY * 1000);
  };
}
