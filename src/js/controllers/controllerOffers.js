import Controller from './controller.js';

import 'bootstrap';
import 'regenerator-runtime/runtime';

import * as model from '../model.js';
import cart from '../components/cart.js';
// import addToCart from '../components/addToCart.js';

import animations from '../animations/defaultAnimations.js';
import globalHeader from '../animations/globalHeader.js';

class ControllerOffers extends Controller {
  constructor() {
    super();
    addToCart.render();
  }

  _initOffers() {
    animations.observeAllAnimatedComponents();
    this._init();
  }
}

export default new ControllerOffers();
