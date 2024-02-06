import 'bootstrap';
// import 'regenerator-runtime/runtime';

import gridAnimations from '../animations/gridAnimations.js';
import introVideo from '../components/introVideo.js';

import * as model from '../model.js';
import carousel from '../components/carousel.js';

import Controller from './controller.js';

class ControllerIndex extends Controller {
  constructor() {
    super();
    this._initIndex();
    this._init();
    introVideo.addHandlerIntoCtaBtn();
  }

  _initIndex() {
    introVideo.addHandlerVideoScrolling();
    introVideo.addHandlerLoadVideo(this._controlLoadVideo);

    gridAnimations.addHandlerGridAnimation();

    carousel.addHandlerCarousel(this._controlCarouselSlides);
    carousel.addHandlerDots(this._controlCarouselSlides);
  }

  _controlCarouselSlides = function (slideNum) {
    model.state.curSlide = slideNum;
    carousel.showSlide(slideNum);
  };

  _controlLoadVideo = function (isdesktop) {
    introVideo.loadVideo(isdesktop);
  };
}

export default new ControllerIndex();
