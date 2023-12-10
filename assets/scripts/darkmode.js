// Geïnspireerd door:
// https://dev.to/ditarahma08/dark-mode-with-css-variable-1p57
// https://stackoverflow.com/questions/10564806/html-link-stylesheet-disabled-attribute

// Aanpassing voor Responsive Design: ik gebruik localstorage om de dark mode te onthouden

function toggleDarkMode() {
  const darkModeCSS = document.getElementById('dark-mode-css');
  const darkModeToggler = document.getElementById('dark-mode-toggler');

  const isDarkModeEnabled = darkModeCSS.disabled;


  if (darkModeCSS.disabled) {
      darkModeCSS.removeAttribute('disabled');
      darkModeToggler.classList.remove('ri-sun-fill');
      darkModeToggler.classList.add('ri-moon-fill');
  } else {
      darkModeCSS.setAttribute('disabled', 'disabled');
      darkModeToggler.classList.remove('ri-moon-fill');
      darkModeToggler.classList.add('ri-sun-fill');
  }

  localStorage.setItem('darkModeEnabled', isDarkModeEnabled);

}

document.addEventListener('DOMContentLoaded', function () {
  const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

  const darkModeCSS = document.getElementById('dark-mode-css');
  const darkModeToggler = document.getElementById('dark-mode-toggler');

  if (isDarkModeEnabled) {
      darkModeCSS.removeAttribute('disabled');
      darkModeToggler.classList.remove('ri-sun-fill');
      darkModeToggler.classList.add('ri-moon-fill');
  } else {
      darkModeCSS.setAttribute('disabled', 'disabled');
      darkModeToggler.classList.remove('ri-moon-fill');
      darkModeToggler.classList.add('ri-sun-fill');
  }
});
