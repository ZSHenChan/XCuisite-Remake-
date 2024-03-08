import Controller from './controller.js';

import 'regenerator-runtime/runtime';

import * as model from '../model.js';
import viewCheckOut from '../components/viewCheckOut.js';

class ControllerCheckOut extends Controller {
  constructor() {
    super();
    this._initCheckOut();
    this.init();
  }

  _initCheckOut() {
    viewCheckOut.render(model.state.cart.items);
    viewCheckOut._calcGrandTotalAmount();
    viewCheckOut._renderTotalAmount();
    viewCheckOut._renderMinFreeShipping();
  }
}

export default new ControllerCheckOut();
