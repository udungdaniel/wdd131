// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  const isVisible = nav.style.display === 'flex';

  if (isVisible) {
    nav.style.display = 'none';
    hamburger.innerHTML = '&#9776;'; // ☰
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.width = '100%'; // Ensure full width on mobile
    hamburger.innerHTML = '&#10006;'; // ✖
  }
});


