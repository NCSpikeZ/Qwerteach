document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navigation = document.querySelector('.navigation');
  const navLinks = document.querySelector('.nav-links');
  const buttons = document.querySelector('.buttons');

  burgerMenu.addEventListener('click', function() {
    if (burgerMenu.textContent === '\u2630') {
      burgerMenu.textContent = '\u2715';
    } else {
      burgerMenu.textContent = '\u2630';
    }
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    buttons.classList.toggle('active');
    navigation.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
});
