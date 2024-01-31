import spinner from '../animations/spinner.js';

export default class Component {
  _parentEl;
  _data;
  _errorMsg = 'something went wrong when fetching data';
  _msg = 'Default message';

  render(data) {
    if (!data) {
      return this.renderError();
    }
    this._data = data;
    if (data.length == 0) return this.renderMsg();
    this._clear();
    this._parentEl.insertAdjacentHTML(
      'beforeend',
      this._generateMarkups(this._data)
    );
  }

  renderSpinner = function () {
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', spinner);
  };

  renderError = function () {
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', this._errorMsg);
  };

  renderMsg = function () {
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', this._msg);
  };

  _clear() {
    this._parentEl.innerHTML = '';
  }

  _generateMarkups() {
    return this._data.map(dt => this._generateMarkupReview(dt)).join('');
  }

  _generateMarkup(data) {
    return `default markup`;
  }
}
