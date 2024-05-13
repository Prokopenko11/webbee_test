function showPage(pageId) {
  // Скрываем все страницы
  document.querySelectorAll('.page').forEach(page => {
      page.style.display = 'none';
  });

  // Показываем нужную страницу
  document.getElementById(pageId).style.display = 'block';
}