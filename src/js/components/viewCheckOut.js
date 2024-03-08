import {
  PRICE_DP,
  SHIPPING_AMOUNT,
  FREE_DEVIVERY_AMOUNT,
  CURRENCY,
} from '../config';

import Component from './component';
import imageTn from '../../images/products/banana_tn.jpg';

class ViewCheckOut extends Component {
  _parentEl = document.querySelector('.section-products .items');
  _grandTotalEl = document.querySelectorAll('.grand-total__amount');
  _totalEl = document.querySelector('.total_amount');
  _shippingEl = document.querySelector('.shipping_amount');
  _minFreeShippingEl = document.querySelector(
    '.section-total__details__shipping'
  );

  _totalAmount;
  _shippingAmount;
  _grandTotalAmount;

  _msg = '<span class="h4 mt-3">Your cart is empty</span>';

  _calcTotalAmount() {
    this._totalAmount = parseFloat(
      this._data
        .reduce((acc, product) => acc + parseFloat(product.product.price), 0)
        .toFixed(PRICE_DP)
    );

    return this._totalAmount;
  }

  _calcShippingAmount() {
    this._shippingAmount =
      this._totalAmount >= FREE_DEVIVERY_AMOUNT
        ? 0
        : this._totalAmount == 0
        ? 0
        : SHIPPING_AMOUNT.toFixed(2);
    return this._shippingAmount;
  }

  _calcGrandTotalAmount() {
    this._calcTotalAmount();
    this._calcShippingAmount();
    this._grandTotalAmount =
      parseFloat(this._shippingAmount) + parseFloat(this._totalAmount);
    return this._grandTotalAmount;
  }

  _renderMinFreeShipping() {
    this._minFreeShippingEl.innerHTML = FREE_DEVIVERY_AMOUNT;
  }

  _renderTotalAmount() {
    this._grandTotalEl.forEach(el => {
      el.innerHTML = `${CURRENCY} ${this._grandTotalAmount}`;
    });
    this._shippingEl.innerHTML = `${CURRENCY} ${this._shippingAmount}`;
    this._totalEl.innerHTML = `${CURRENCY} ${this._totalAmount}`;
  }

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
          <div class="item-price"> ${CURRENCY} ${product.price}</div>
          <div class="item-name"
            >${product.productName} &nbsp;<strong>x${qty}</strong></div
          >
        </li>`;
  }
}

export default new ViewCheckOut();
