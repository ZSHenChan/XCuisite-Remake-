import Component from './component';
import imageTn from '../../images/products/banana_tn.jpg';

class ViewCheckOut extends Component {
  _parentEl = document.querySelector('.section-products .items');
  _msg = '<span class="h4 mt-3">Your cart is empty</span>';

  _generateMarkups() {
    return this._data
      .map(data => this._generateMarkup(data.product, data.qty))
      .join('');
  }

  _generateMarkup(product, qty) {
    return `<li class="item">
          <div class="item-img-container">
            <img
              src="${imageTn}"
              alt="${product.productName}"
              class="item-img rounded top-5"
              width="64"
              height="64"
            />
          </div>
          <div class="item-qty"> x${qty}</div>
          <div class="item-name"
            >${product.productName}</div
          >
        </li>`;
  }
}

export default new ViewCheckOut();
