import * as model from '../model.js';
import Component from './component.js';
import image from '../../images/products/banana.jpg';
import icon from 'url:../../images/sprite.svg';

class Carousel extends Component {
  _parentEl = document.querySelector('.card-container');
  _dotsContainer = document.querySelector('.dots');

  _data;

  constructor() {
    super();
    this._data = model.products;
    this.createCards();
    this._carouselCards = document.querySelectorAll('.carousel-card');
    this.createDots();
    this._dots = document.querySelectorAll('.dots-dot');
    this.showSlide(model.state.curSlide);
  }

  createCards = function () {
    this._data.forEach((product, i) => {
      this._parentEl.insertAdjacentHTML(
        'beforeend',
        this._generateMarkup(product, i)
      );
    });
  };

  _generateMarkup = function (product, i) {
    return `<div
                class="card text-center rounded-5 carousel-card"
                data-slide="${i}"
              >
              
                <img
                  src="${image}"
                  alt="${product.imgAlt}"
                  class="card-image-top rounded-top-5"
                />
                <div class="card-body justify-content-center">
                  <p class="card-title">${product.productName}</p>
                  <p class="card-text">${product.description}</p>
                  <div class="cta-links mt-4">
                    <a class="icon-link" href="./html/offers.html">
                      <svg class="card-icon">
                    <use
                      xlink:href="${icon}#icon-chevron-right"
                    ></use>
                  </svg>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>`;
  };

  generateMarkupDots = function (slideNum) {
    return `<button class="dots-dot" data-slide="${slideNum}" aria-label="carousel button"></button>`;
  };

  createDots = function () {
    this._carouselCards.forEach((_, i) => {
      this._dotsContainer.insertAdjacentHTML(
        'beforeend',
        this.generateMarkupDots(i)
      );
    });
  };

  removeActiveDots = function () {
    this._dots.forEach(dot => {
      dot.classList.remove('dots-dot-active');
    });
  };

  addActiveDot = function (slideNum) {
    document
      .querySelector(`.dots-dot[data-slide="${slideNum}"]`)
      .classList.add('dots-dot-active');
  };

  updateDots = function (slideNum) {
    this.removeActiveDots();
    this.addActiveDot(slideNum);
  };

  showSlide = function (slideNum) {
    this._carouselCards.forEach((card, i) => {
      card.style.transform = `translateX(${(i - slideNum) * 110}%)`;
      card.classList.remove('carousel-card-active');
    });
    document
      .querySelector(`.carousel-card[data-slide="${slideNum}"]`)
      .classList.add('carousel-card-active');
    this.updateDots(slideNum);
  };

  updateSlides = function (slideNum) {
    this.showSlide(slideNum);
  };

  addHandlerCarousel(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const targetCard = e.target.closest('.carousel-card');
      if (!targetCard) return;
      const slideNum = targetCard.dataset.slide;
      handler(slideNum);
    });
  }

  addHandlerDots(handler) {
    this._dotsContainer.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target.classList.contains('dots-dot')) {
        const slideNum = e.target.dataset.slide;
        handler(slideNum);
      }
    });
  }
}

export default new Carousel();
