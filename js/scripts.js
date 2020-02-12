const mobileNav = document.getElementById('main-nav');
const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const closeIcon = document.getElementsByClassName('close-icon')[0];

hamburgerIcon.addEventListener('click', () => {
  mobileNav.classList.remove('hide');
  hamburgerIcon.classList.add('hide');
  closeIcon.classList.remove('hide');
});

closeIcon.addEventListener('click', () => {
  mobileNav.classList.add('hide');
  hamburgerIcon.classList.remove('hide');
  closeIcon.classList.add('hide');
});
console.log(hamburgerIcon);
