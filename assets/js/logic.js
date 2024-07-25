// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
// const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    document.body.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    document.body.setAttribute('class', 'dark');
  }
});

const allBlogEntries =localStorage.getItem('entry');
