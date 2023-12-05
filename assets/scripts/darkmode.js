// Geïnspireerd door:
// https://dev.to/ditarahma08/dark-mode-with-css-variable-1p57
// https://stackoverflow.com/questions/10564806/html-link-stylesheet-disabled-attribute

function toggleDarkMode() {
    const darkModeCSS = document.getElementById('dark-mode-css');
    const darkModeToggler = document.getElementById('dark-mode-toggler')
  
    if (darkModeCSS.disabled) {
      darkModeCSS.removeAttribute('disabled');
      darkModeToggler.classList.remove('ri-sun-fill');
      darkModeToggler.classList.add('ri-moon-fill');
    } else {
      darkModeCSS.setAttribute('disabled', 'disabled');
      darkModeToggler.classList.remove('ri-moon-fill');
      darkModeToggler.classList.add('ri-sun-fill');
    }
  }