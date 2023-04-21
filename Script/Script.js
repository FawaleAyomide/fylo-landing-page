const toggler = document.querySelector('.navBarToggler');
const sideBar = document.querySelector('.top');

toggler.onclick = function () {
    toggler.classList.toggle('openMenu');
    sideBar.classList.toggle('animate');
};