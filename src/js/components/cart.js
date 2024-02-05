import Component from './component';
import imageTn from '../../images/products/banana_tn.jpg';

class Cart extends Component {
  _parentEl = document.querySelector('.in-cart-wrapper');

  _cartIcon = document.getElementById('cart-icon');
  _cartQty = document.getElementById('cart-qty');

  _data;
  _msg = '<span class="h4 mt-3">Your cart is empty</span>';

  renderCartQty = function (qty) {
    if (qty < 0) return;
    this._cartQty.textContent = `${qty === 0 ? '' : qty}`;
  };
  _generateMarkups() {
    return this._data
      .map(data => this._generateMarkup(data.product, data.qty))
      .join('');
  }

  _generateMarkup(product, qty) {
    return `<li class="item row">
          <span class="item-img col-1">
            <img
              src="${imageTn}"
              alt="${product.productName}"
              class="rounded top-5"
              width="64"
              height="64"
            />
          </span>
          <span class="item-name col-6"
            >${product.productName}<br><span class="item-qty"> x${qty}</span></span
          >
        </li>`;
  }
}

export default new Cart();
