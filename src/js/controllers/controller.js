import 'bootstrap';
import 'regenerator-runtime/runtime';

import animations from '../animations/defaultAnimations.js';
import globalHeader from '../animations/globalHeader.js';

import cart from '../components/cart.js';
import * as model from '../model.js';

export default class Controller {
  _controlCurtainFlyout = function () {
    cart.render([
      {
        product: {
          productName: 'Strawberry&nbsp;Indulgence',
          description: 'Strawberry Beast',
          img: 'images/products/strawberry-indulgence.jpg',
          thumbnail: 'images/products/strawberry-indulgence_tn.jpg',
          imgAlt: 'Strawberry Indulgence',
          ingredients: 'strawberry',
        },
        qty: 1,
      },
      {
        product: {
          productName: 'Hazelnut',
          description: 'Nuts&nbsp;Kraze',
          img: '/images/products/hazelnut.jpg',
          thumbnail: '/images/products/hazelnut_tn.jpg',
          imgAlt: 'Hazelnut Doughnut',
          ingredients: 'sugar',
        },
        qty: 2,
      },
    ]);
    globalHeader.curtainFlyout();
  };

  _init = function () {
    animations.observeAllAnimatedComponents();
    globalHeader.addHandlerCurtain(this._controlCurtainFlyout());
  };
}

const displayCart = function () {
  inCartWrapper.innerHTML = '';

  let itemQty = 0;
  Object.entries(localStorage).forEach(item => {
    const product = products[+item[0]];
    const qty = +item[1];
    itemQty += qty;
    inCartWrapper.insertAdjacentHTML(
      'beforeend',
      `<li class="item row">
          <span class="item-img col-1">
            <img
              src="${product.thumbnail}"
              alt="${product.imgAlt}"
              class="rounded top-5"
              width="64"
              height="64"
            />
          </span>
          <span class="item-name col-6"
            >${product.productName}<br><span class="item-qty"> x${qty}</span></span
          >
        </li>`
    );
  });

  itemQtyTracker = itemQty;
  if (itemQty == 0) {
    inCartWrapper.insertAdjacentHTML(
      'beforeend',
      `<span class="h4 mt-3">Your cart is empty</span>`
    );
    cartQty.innerHTML = '';
  } else cartQty.innerHTML = itemQtyTracker;
};
