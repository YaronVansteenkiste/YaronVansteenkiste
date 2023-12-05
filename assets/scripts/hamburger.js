function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-links-active');
    navLinks.classList.toggle('nav-links-inactive');
    
    if (navLinks.classList.contains('nav-links-active')) {
        navLinks.classList.remove('nav-links-inactive');
    } else {
        navLinks.classList.remove('nav-links-active');
    }
}
