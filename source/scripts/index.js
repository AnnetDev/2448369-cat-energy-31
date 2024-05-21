document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.main-header__toggle');
  const menu = document.querySelector('.main-navigation');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('main-navigation--open');
    menu.classList.toggle('main-navigation--closed');
    menuToggle.classList.toggle('main-header__toggle--opened');
  });
});
