// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  // Инициализация Telegram WebApp
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.expand();
    tg.ready();
  }

  // Кэшируем элементы
  const sections = document.querySelectorAll('.section');
  const menuButtons = document.querySelectorAll('.menu-btn');
  const battleButton = document.getElementById('battle-btn');

  // Функция переключения секции
  function switchSection(sectionId) {
    // Скрыть все секции
    sections.forEach(section => section.classList.remove('active'));
    // Показать нужную
    document.getElementById(sectionId).classList.add('active');

    // Обновить активную кнопку в меню
    menuButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.section === sectionId);
    });
  }

  // Назначаем обработчики на кнопки меню
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.dataset.section;
      switchSection(sectionId);
    });
  });

  // Обработчик кнопки "В бой"
  if (battleButton) {
    battleButton.addEventListener('click', () => {
      alert('Бой начался! (Это заглушка)');
      // Здесь можно добавить логику: отправку запроса, открытие модалки и т.д.
    });
  }
});
