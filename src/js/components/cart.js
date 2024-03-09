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
    const productMarkups = this._data
      .slice(0, 3)
      .map(data => this._generateMarkup(data.product, data.qty))
      .join('');
    if (this._data.length > 3) {
      return (
        productMarkups +
        '<li class="item" role="listitem"><div></div><strong>and more...</strong></li>'
      );
    }
    return productMarkups;
  }

  _generateMarkup(product, qty) {
    return `<li class="item" role="listitem">
          <div class="item-img-container">
            <img
              src="${imageTn}"
              alt="${product.productName}"
              class="item-img rounded top-5"
              width="64"
              height="64"
            />
          </div>
          <div class="item-name"
            >${product.productName}<br><span class="item-qty"> x${qty}</span></div
          >
        </li>`;
  }
}

export default new Cart();
