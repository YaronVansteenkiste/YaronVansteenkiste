function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-links-active');
    navLinks.classList.toggle('nav-links-inactive');
    
    if (navLinks.classList.contains('nav-links-active')) {
        navLinks.classList.remove('nav-links-inactive');
        document.body.style.overflow = 'hidden';

    } else {
        navLinks.classList.remove('nav-links-active');
        document.body.style.overflow = 'visible';
    }
}
