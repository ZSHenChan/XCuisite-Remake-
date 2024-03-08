import Controller from './controller.js';

import 'bootstrap';
import 'regenerator-runtime/runtime';

import * as model from '../model.js';
import offers from '../components/offers.js';
import cart from '../components/cart.js';

class ControllerOffers extends Controller {
  constructor() {
    super();
    offers.render(model.products);
    this.init();
    this._addHandlers();
  }

  _controlModal = function (targetID) {
    model.state.modalProduct = model.products[targetID];
    offers.modalWindow(model.state.modalProduct);
  };

  _controlAddToCart = function () {
    const qty = offers.getQtyFromModal();
    offers.closeModal();
    model.addToCart(+qty);
    cart.renderCartQty(model.state.cart.totalQty);
  };

  _controlCloseModal = function () {
    offers.closeModal();
  };

  _addHandlers() {
    offers.addHandlerCards(this._controlModal);
    offers.addHandlerAddToCart(this._controlAddToCart);
    offers.addHandlerCloseModal(this._controlCloseModal);
  }
}

export default new ControllerOffers();
