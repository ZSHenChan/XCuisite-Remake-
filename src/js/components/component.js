export default class Component {
  _parentEl;
  _data;

  render = function () {
    this._clear();
    this._parentEl.insertAdjacentHTML(
      'beforeend',
      this._generateMarkups(this._data)
    );
  };

  _clear = function () {
    this._parentEl.insertAdjacentHTML = '';
  };

  // _generateMarkups = function () {
  //   return this._data.map(dt => this._generateMarkupReview(dt)).join('');
  // };

  // _generateMarkup = function (data) {
  //   return `default markup`;
  // };
}
