window.onload = () => {
  render(window.location.hash || '#activity');
};

window.onhashchange = () => {
  render(decodeURIComponent(window.location.hash));
};

function render(hash) {
  const app = document.getElementById('main-content');
  switch(hash) {
    case '#activity':
      fetch('activity.html')
          .then(response => response.text())
          .then(html => app.innerHTML = html)
          .catch(error => console.error('Failed to load the activity page', error));
      break;
      case '#map':
          fetch('map.html')
              .then(response => response.text())
              .then(html => {
                app.innerHTML = html;
                ymaps.ready(init);
              })
              .catch(error => console.error('Failed to load the map page', error));
          break;
      case '#timer':
          fetch('timer.html')
              .then(response => response.text())
              .then(html => app.innerHTML = html)
              .catch(error => console.error('Failed to load the timer page', error));
          break;
      default:
          app.innerHTML = '<h1>404 Страница не найдена</h1>';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.header-nav-item-link');

  links.forEach(link => {
      link.addEventListener('click', function() {
          links.forEach(l => l.classList.remove('header-nav-pages-item-link_active'));
          link.classList.add('header-nav-pages-item-link_active');
      });
  });
});