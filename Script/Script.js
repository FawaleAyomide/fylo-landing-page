const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classlist.toggle('active');
    navLink.classlist.toggle('active');
});