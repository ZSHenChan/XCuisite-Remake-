class GridAnimations {
  _gridItemsNum = [9];

  _gridItemObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
      }
    });
  });

  addHandlerGridAnimation = function () {
    this._gridItemsNum.forEach(gridItemNum => {
      const gridItem = document.querySelector(`.grid-item--${gridItemNum}`);
      this._gridItemObserver.observe(gridItem);
    });
  };
}

export default new GridAnimations();
