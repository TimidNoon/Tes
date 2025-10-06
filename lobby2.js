document.addEventListener('DOMContentLoaded', () => {
  // Инициализация Telegram WebApp
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.expand();
    tg.ready();
  }

  // Элементы
  const sections = document.querySelectorAll('.section');
  const menuItems = document.querySelectorAll('.menu-item');

  // Переключение раздела
  function switchSection(sectionId) {
    // Скрыть все
    sections.forEach(section => section.classList.remove('active'));
    // Показать нужный
    document.getElementById(sectionId).classList.add('active');

    // Обновить активный пункт меню
    menuItems.forEach(item => {
      item.classList.toggle('active', item.dataset.section === sectionId);
    });
  }

  // Назначить обработчики
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.dataset.section;
      switchSection(sectionId);
    });
  });

  // Кнопка "В бой"
  const battleBtn = document.querySelector('.battle-btn');
  if (battleBtn) {
    battleBtn.addEventListener('click', () => {
      if (tg) {
        tg.showAlert('Бой начался! 🛡️\n(Это заглушка)');
      } else {
        alert('Бой начался! 🛡️\n(Это заглушка)');
      }
    });
  }
});
