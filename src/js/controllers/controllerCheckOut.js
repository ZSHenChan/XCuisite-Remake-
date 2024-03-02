import Controller from './controller.js';

import 'regenerator-runtime/runtime';

import * as model from '../model.js';
import viewCheckOut from '../components/viewCheckOut.js';

class ControllerCheckOut extends Controller {
  constructor() {
    super();
    this._initCheckOut();
    this._init();
  }

  _initCheckOut() {
    viewCheckOut.render(model.state.cart.items);
  }
}

export default new ControllerCheckOut();
