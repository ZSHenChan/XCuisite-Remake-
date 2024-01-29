import Controller from './controller.js';

import 'bootstrap';
import 'regenerator-runtime/runtime';

import * as model from '../model.js';
import offers from '../components/offers.js';

class ControllerOffers extends Controller {
  constructor() {
    super();
    offers.render(model.products);
    this._init();
    this.addHandlers();
  }

  controlModal = function (targetID) {
    model.state.modalProduct = model.products[targetID];
    offers.modalWindow(model.state.modalProduct);
  };

  controlAddToCart = function () {
    const qty = offers.getQtyFromModal();
    offers.closeModal();
    model.addToCart(+qty);
  };

  addHandlers() {
    offers.addHandlerCards(this.controlModal);
    offers.addHandlerAddToCart(this.controlAddToCart);
  }
}

export default new ControllerOffers();
