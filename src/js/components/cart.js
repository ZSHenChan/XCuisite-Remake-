import Component from './component';

class Cart extends Component {
  _parentEl = document.querySelector('.in-cart-wrapper');

  _cartIcon = document.getElementById('cart-icon');
  _cartQty = document.getElementById('cart-qty');

  render(data) {
    // if (!data) return;
    // if (Array.isArray(data) && data.length == 0) return this.renderMessage();
    // this._data = data;
    // const markup = this._generateMarkups();
    // this._clear();
    // this._parentEl.insertAdjacentHTML('afterbegin', markup);
    console.log(data);
  }

  _generateMarkups = function () {
    console.log(this._data);
  };

  _generateMarkup = function (product, qty) {
    return `<li class="item row">
          <span class="item-img col-1">
            <img
              src=""
              alt="${product.imgAlt}"
              class="rounded top-5"
              width="64"
              height="64"
            />
          </span>
          <span class="item-name col-6"
            >${product.productName}<br><span class="item-qty"> x${qty}</span></span
          >
        </li>`;
  };
}

export default new Cart();
