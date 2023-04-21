// const hamburger = document.querySelector('.hamburger');
// const navLink = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     hamburger.classlist.toggle('active');
//     navLink.classlist.toggle('active');
// });


const toggler = document.querySelector('.navBarToggler');
const sideBar = document.querySelector('.top');

toggler.onclick = function () {
    toggler.classList.toggle('openMenu');
    sideBar.classList.toggle('animate');
};


// function toggleMenu() {
    
// }