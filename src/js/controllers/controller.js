import 'bootstrap';
import 'regenerator-runtime/runtime';

import animations from '../animations/defaultAnimations.js';
import globalHeader from '../components/globalHeader.js';
import globalFooter from '../components/globalFooter.js';

import cart from '../components/cart.js';
import * as model from '../model.js';
import * as helper from '../helper.js';

import { CURTAIN_FLYIN_DELAY } from '../config.js';

export default class Controller {
  constructor() {
    globalHeader.addHandlerNavCurtain(this._controlNavFlyin);
    globalHeader.addHandlerCurtain(
      this._controlCurtainFlyout,
      this._controlCurtainFlyin
    );
    globalHeader.addHandlerEmptyCart(this._controlEmptyCart);
    globalFooter.addHandlerExpandSection();
  }

  _controlNavFlyin = function () {
    globalHeader.navFlyin();
  };

  _controlCurtainFlyout = function () {
    cart.render(model.state.cart.items);
    globalHeader.curtainFlyout();
  };

  _controlCurtainFlyin = function () {
    globalHeader.curtainFlyin();
  };

  _init = function () {
    animations.observeAllAnimatedComponents();
    helper.addCopyRightYear();
    cart.renderCartQty(model.state.cart.totalQty);
  };

  _controlEmptyCart = function () {
    cart.renderSpinner();
    model.emptyCart();
    setTimeout(function () {
      cart.render(model.state.cart.items);
      cart.renderCartQty(model.state.cart.totalQty);
    }, CURTAIN_FLYIN_DELAY * 1000);
    setTimeout(function () {
      globalHeader.curtainFlyin();
    }, CURTAIN_FLYIN_DELAY * 1000);
  };
}
