// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const linkButtons = document.querySelectorAll('.link-btn');

  linkButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (button.getAttribute('href') === '#') {
        event.preventDefault();
      }
    });
  });
});
