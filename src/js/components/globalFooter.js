class GlobalFooter {
  _parentEl = document.querySelector('.globalfooter');

  addHandlerExpandSection = function () {
    this._parentEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('footer__expand-btn')) {
        e.target.classList.toggle('rotate');
        const list = e.target.closest('.globalfooter-column-section');
        list.classList.toggle('expand');
      }
      if (e.target.classList.contains('globalfooter-column-section-button')) {
        e.target
          .querySelector('.footer__expand-btn')
          .classList.toggle('rotate');
        const list = e.target.closest('.globalfooter-column-section');
        list.classList.toggle('expand');
      }
    });
  };
}

export default new GlobalFooter();
