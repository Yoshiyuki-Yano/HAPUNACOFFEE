'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');
  const instagram = document.getElementById('overlay-instagram');
  const Concept = document.getElementById('overlay-Concept');
  const Menu = document.getElementById('overlay-Menu');
  const Access = document.getElementById('overlay-Access');
  const Gallery = document.getElementById('overlay-Gallery');
  const Contact = document.getElementById('overlay-Contact');

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
  overlayClose(instagram);
  overlayClose(Concept);
  overlayClose(Menu);
  overlayClose(Access);
  overlayClose(Gallery);
  overlayClose(Contact);
  
  const menuItems = document.querySelectorAll('.Course-Menu li a');
  const contents = document.querySelectorAll('.Content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('Active');
      });
      clickedItem.classList.add('Active');

      contents.forEach(content => {
        content.classList.remove('Active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('Active');
    });
  });
}