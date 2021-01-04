'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');
  const about = document.getElementById('overlay-about');
  const works = document.getElementById('overlay-works');
  const location = document.getElementById('overlay-location');
  const instagram = document.getElementById('overlay-instagram');

  function overlayClose(link) {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    }); 
  };

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  overlayClose(close);
  overlayClose(mask);
  overlayClose(about);
  overlayClose(works);
  overlayClose(location);
  overlayClose(instagram);
}