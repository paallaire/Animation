export default function cursorCustomInit() {
  const links = document.querySelectorAll('a, button');
  const reveals = document.querySelector('[data-reveal-image]');
  const image = document.querySelector('#image');
  const elCustomCursor = document.querySelector('.js-custom-cursor');

  const gridImages = document.querySelectorAll('#grid2 li');

  const gridImagesDetail = document.querySelectorAll('#grid2 .img-detail');

  if (elCustomCursor) {
    elCustomCursor.setAttribute('data-module', 'custom-cursor');

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      elCustomCursor.style.left = `${x}px`;
      elCustomCursor.style.top = `${y}px`;

      image.style.left = `${x}px`;
      image.style.top = `${y}px`;

      gridImagesDetail.forEach((item) => {
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
      });
    });

    document.addEventListener('mousedown', () => {
      elCustomCursor.classList.add('is-click');
    });

    document.addEventListener('mouseup', () => {
      elCustomCursor.classList.remove('is-click');
    });

    if (links) {
      links.forEach((item) => {
        item.addEventListener('mouseover', () => {
          elCustomCursor.classList.add('is-hover');
        });
        item.addEventListener('mouseleave', () => {
          elCustomCursor.classList.remove('is-hover');
        });
      });
    }

    if (reveals) { }
    reveals.addEventListener('mouseover', () => {
      elCustomCursor.classList.add('is-hover');
      reveals.classList.add('is-active');
      image.classList.add('is-active');
    });
    reveals.addEventListener('mouseleave', () => {
      elCustomCursor.classList.remove('is-hover');
      reveals.classList.remove('is-active');
      image.classList.remove('is-active');
    });

    gridImages.forEach((item) => {
      item.addEventListener('mouseover', () => {
        elCustomCursor.classList.add('is-hover');
        item.classList.add('is-hover');
        item.querySelector('.img-detail').classList.add('is-active');
      });
      item.addEventListener('mouseleave', () => {
        elCustomCursor.classList.remove('is-hover');
        item.classList.remove('is-hover');
        item.querySelector('.img-detail').classList.remove('is-active');
      });
    });
  }
}
