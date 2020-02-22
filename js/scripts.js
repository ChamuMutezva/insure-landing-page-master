const mobileNav = document.getElementById('main-nav');
const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const closeIcon = document.getElementsByClassName('close-icon')[0];
const navItems = Array.from(document.querySelectorAll(".main-nav-item"));
const body = document.body;

console.log(navItems);

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

//When nav a tag has been clicked
//the body must have a vertical scroll
navItems.forEach(nav => {
  nav.addEventListener("click", function() {
    console.log("Show body vertical scroll");
    mobileNav.classList.add('hide');
    hamburgerIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    body.style.overflowY = "visible";
  })
})