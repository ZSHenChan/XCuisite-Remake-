import 'bootstrap';
import 'regenerator-runtime/runtime';

import gridAnimations from '../animations/gridAnimations.js';
import videoScrolling from '../animations/videoScrolling.js';

import * as model from '../model.js';
import carousel from '../components/carousel.js';

import Controller from './controller.js';

class ControllerIndex extends Controller {
  constructor() {
    super();
    this._initIndex();
  }

  _initIndex() {
    videoScrolling.addHandlerVideoScrolling();
    this._init();
    gridAnimations.addHandlerGridAnimation();

    carousel.addHandlerCarousel(this._controlCarouselSlides);
    carousel.addHandlerDots(this._controlCarouselSlides);
  }

  _controlCarouselSlides = function (slideNum) {
    model.state.curSlide = slideNum;
    carousel.showSlide(slideNum);
  };
}

export default new ControllerIndex();
