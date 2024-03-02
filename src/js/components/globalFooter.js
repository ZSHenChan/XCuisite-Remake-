class GlobalFooter {
  _parentEl = document.querySelector('.globalfooter');

  addHandlerExpandSection = function () {
    this._parentEl.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target.classList.contains('bi-arrows-angle-expand')) {
        const list = e.target.closest('.globalfooter-column-section');
        list.classList.toggle('expand');
      }
    });
  };
}

export default new GlobalFooter();
