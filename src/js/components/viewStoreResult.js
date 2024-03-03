import Component from './component';

class ViewStores extends Component {
  _parentEl = document.querySelector('.find__result');
  _select = document.querySelector('.find__select');
  _findBtn = document.querySelector('.find__btn');
  _msg = 'Default message';

  init(stores) {
    map.init(stores);
  }

  _generateMarkup(store) {
    return `<h2 class="find__result__name mb-sm">${store.storeName}</h2>
            <div class="find__result__road">${store.street}</div>
            <div class="find__result__address">${store.address}</div>
            <div class="find__result__tel">
              Tel: <span class="find__result__tel__content">${store.tel}</span>
            </div>
            <div class="find__result__time">${store.operateTime}</div>`;
  }

  addHandlerStoreResult(handler) {
    this._findBtn.addEventListener('click', handler);
  }

  getResultStoreName = function () {
    return this._select.value;
  };
}

export default new ViewStores();
