const mobileNav = document.getElementById('main-nav');
const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const closeIcon = document.getElementsByClassName('close-icon')[0];
const body = document.body;

hamburgerIcon.addEventListener('click', () => {
  mobileNav.classList.remove('hide');
  hamburgerIcon.classList.add('hide');
  closeIcon.classList.remove('hide');
  body.style.overflowY = "hidden";
});

closeIcon.addEventListener('click', () => {
  mobileNav.classList.add('hide');
  hamburgerIcon.classList.remove('hide');
  closeIcon.classList.add('hide');
  body.style.overflowY = "visible";
});
console.log(hamburgerIcon);
