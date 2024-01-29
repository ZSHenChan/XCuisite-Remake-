import loader from '../animations/loader.js';

export default class Component {
  _parentEl;
  _data;
  _errorMsg = 'something went wrong when fetching data';

  render(data) {
    this._data = data;
    this._clear();
    this._parentEl.insertAdjacentHTML(
      'beforeend',
      this._generateMarkups(this._data)
    );
  }

  renderSpinner = function () {
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', loader);
  };

  renderError = function () {
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', this._errorMsg);
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
