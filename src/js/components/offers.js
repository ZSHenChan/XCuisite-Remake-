import * as model from '../model.js';
import Component from './component.js';
import image from '../../images/products/banana.jpg';

import * as model from '../model.js';

class Offers extends Component {
  _data;
  _parentEl = document.querySelector('.content-wrapper .row');

  _modal = document.querySelector('.modal');
  _modalBtn = this._modal.querySelector('.modal-btn');
  _overlay = document.querySelector('.modal-overlay');

  _generateMarkups() {
    return this._data.map(product => this._generateMarkup(product)).join('');
  }

  _generateMarkup(product) {
    return `<div class="col-section reveal">
      <div class="card-wrapper" data-id="${product.id}">
        <div class="card text-center rounded-5  face front">
          <img
            src="${image}"
            alt="${product.imgAlt}"
            class="card-image-top rounded-top-5"
          />
          <div class="card-body justify-content-center">
            <p class="card-title">${product.productName}</p>
            <p class="card-text">${product.description}</p>
            <div class="cta-links mt-4">
              <a class="icon-link" onclick="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-symmetry-horizontal"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376M11.539 10H3v4.658L11.54 10z"
                  />
                </svg>
                Ingredients
              </a>
              <button class="btn btn-primary text-secondary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="card text-center rounded-5 face back">
          <img
          src="${image}"
            alt="${product.imgAlt}"
            class="card-image-top rounded-top-5"
            style="transform: scaleX(-1)"
          />
          <div class="card-body justify-content-center">
            <p class="card-title">Ingredients</p>
            <p>${product.ingredients}</p>
            <div class="cta-links mt-4">
              <a class="icon-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-symmetry-horizontal"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376M11.539 10H3v4.658L11.54 10z"
                  />
                </svg>
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  getQtyFromModal = function () {
    const qty = this._modal.querySelector('.modal-item-qty');
    const quantity = qty.value;
    qty.value = '1';
    return quantity;
  };

  closeModal = function () {
    this._modal.classList.add('hidden');
  };

  modalWindow = function (data) {
    this.data = data;
    this._modal.classList.remove('hidden');
    // this._modal.querySelector('.card-img-top').setAttribute('src', data.img);
    this._modal.querySelector('.modal-item-name').innerHTML = data.productName;
  };

  addHandlerCards = function (handler) {
    this._parentEl.addEventListener('click', function (e) {
      const target = e.target;
      if (
        target.classList.contains('card-image-top') ||
        target.classList.contains('icon-link')
      ) {
        target.closest('.card-wrapper').classList.toggle('is-flipped');
      } else if (target.classList.contains('btn')) {
        const targetID = target.closest('.card-wrapper').dataset.id;
        handler(targetID);
      }
    });
  };

  addHandlerAddToCart = function (handler) {
    this._modalBtn.addEventListener('click', handler);
  };

  addHandlerCloseModal = function (handler) {
    this._overlay.addEventListener('click', handler);
  };
}

export default new Offers();
