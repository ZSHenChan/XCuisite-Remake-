import Controller from './controller.js';
import * as model from '../model.js';

import 'regenerator-runtime/runtime';

import viewStores from '../components/viewStores.js';
import viewStoreResult from '../components/viewStoreResult.js';

class ControllerStores extends Controller {
  constructor() {
    super();
    viewStores.init(model.stores);
    viewStoreResult.addHandlerStoreResult(this._controlStoreResult);
  }

  _controlStoreResult = function () {
    const resultStore = model.filterStoreByName(
      viewStoreResult.getResultStoreName()
    );
    viewStoreResult.render(resultStore);
    viewStores._locateStore(resultStore[0].coords);
  };
}

export default new ControllerStores();
