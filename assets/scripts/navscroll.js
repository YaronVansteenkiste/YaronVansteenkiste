// Geïnspireerd door:
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

const navbar = document.getElementById('navbar');
const scrollOffset = 20; 

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollOffset) {
        navbar.classList.add('navbar-scrolled');
        // disable scroll
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});