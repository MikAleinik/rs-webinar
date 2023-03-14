const firstCheckBox = document.getElementById('firstCheckbox');
const secondCheckBox = document.getElementById('secondCheckbox');
const innerContainer = document.getElementById('innerContainer');

innerContainer.addEventListener('click', containerHandler);
function containerHandler(event) {
  addLog(`Внешний контейнер ${event.currentTarget.id}. Элемент ${event.target.id}.(1)`);
}

const firstOption = {
  passive: false,
}
firstCheckBox.addEventListener('click', firstCheckBoxHandler, firstOption);
function firstCheckBoxHandler(event) {
  // event.preventDefault();
  addLog('Первый чекбокс.(2)');
}

const secondOption = {
  passive: true,
}
secondCheckBox.addEventListener('click', secondCheckBoxHandler, secondOption);
function secondCheckBoxHandler(event) {
  // event.preventDefault();
  addLog('Второй чекбокс.(3)');
}

/**
 * Функция добавления лога сообщений событий
 */
function addLog(message) {
  const logElement = document.getElementById('log');
  const logItem = document.createElement('li');
  logItem.textContent = message;
  logElement.append(logItem);
}