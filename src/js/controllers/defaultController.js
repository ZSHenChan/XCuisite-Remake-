import Controller from './controller';

class DefaultController extends Controller {
  constructor() {
    super();
    this._init();
  }
}

export default new DefaultController();
