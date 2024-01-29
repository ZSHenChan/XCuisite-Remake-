class VideoScrolling {
  addHandlerVideoScrolling = function () {
    let target = document.querySelector('.video');
    window.addEventListener('scroll', function () {
      const elementHeight = target.offsetHeight;
      let scrollTop = this.window.scrollY;
      let offset = Math.min(elementHeight, scrollTop);
      let opacity = 1 - offset / 300;
      target.style.opacity = opacity;
    });
  };
}

export default new VideoScrolling();
