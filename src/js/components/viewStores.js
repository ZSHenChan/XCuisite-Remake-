import Component from './component';
import map from './map';

class ViewStores extends Component {
  _parentEl = document.querySelector('.find__select');
  _input = document.getElementById('find__name');
  _msg = 'Default message';

  init(stores) {
    map.init(stores);
    this.render(stores);
  }

  _generateMarkup(data) {
    return `<option value="${data.storeName}" class="find__option">${data.storeName}</option>`;
  }

  _locateStore(coords) {
    map.locateMarker(coords);
  }
}

export default new ViewStores();
