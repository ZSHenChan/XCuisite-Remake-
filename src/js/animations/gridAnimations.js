class GridAnimations {
  _gridItemsNum = [2, 4, 5, 7];

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
      const gridItem = document.querySelector(`.grid-item-${gridItemNum}`);
      this._gridItemObserver.observe(gridItem);
    });
  };
}

export default new GridAnimations();
