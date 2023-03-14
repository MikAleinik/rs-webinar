const firstCheckBox = document.getElementById('firstCheckbox');
const secondCheckBox = document.getElementById('secondCheckbox');

const container = document.getElementById('container');
const innerContainer = document.getElementById('innerContainer');
const firstField = document.getElementById('firstField');
const secondField = document.getElementById('secondField');

firstCheckBox.addEventListener('change', () => addLog('Первый чекбокс.(1)'));

secondCheckBox.addEventListener('change', firstCheckBoxHandler);
function firstCheckBoxHandler(event) {
  // event.stopPropagation();
  // event.stopImmediatePropagation();
  addLog('Второй чекбокс.(2.1)');
}
secondCheckBox.addEventListener('change', secondCheckBoxHandler);
function secondCheckBoxHandler(event) {
  addLog('Второй чекбокс.(2.2)');
}

firstField.addEventListener('change', () => addLog('Первое поле.(3)'));
secondField.addEventListener('change', () => addLog('Второе поле.(4)'));

innerContainer.addEventListener('change', () => addLog('Внутренний контейнер.(5)'));
const containerOption = {
  capture: false,
  once: false,
}
container.addEventListener('change', () => addLog('Внешний контейнер.(6)'), containerOption);

/**
 * Функция добавления лога сообщений событий
 */
function addLog(message) {
  const logElement = document.getElementById('log');
  const logItem = document.createElement('li');
  logItem.textContent = message;
  logElement.append(logItem);
}