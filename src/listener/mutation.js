const innerContainer = document.getElementById('innerContainer');
const firstCheckBox = document.getElementById('firstCheckbox');
const secondCheckBox = document.getElementById('secondCheckbox');

firstCheckBox.addEventListener('click', firstCheckBoxHandler);
function firstCheckBoxHandler(event) {
  const newLabel = document.createElement('label');
  newLabel.textContent = 'Новый элемент';

  const innerContainer = document.getElementById('innerContainer');
  innerContainer.append(newLabel);
}

secondCheckBox.addEventListener('click', secondCheckBoxHandler);
function secondCheckBoxHandler(event) {
  const innerContainer = document.getElementById('innerContainer');
  innerContainer.lastElementChild.textContent = 'Последний элемент';
}

const mutationObserver = new MutationObserver(mutationHandler);
function mutationHandler(mutationRecords) {
  // console.log(mutationRecords);
  addLog("Изменения в объекте.");
}

const options = {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true,
}
mutationObserver.observe(innerContainer, options);

/**
 * Функция добавления лога сообщений событий
 */
function addLog(message) {
  const logElement = document.getElementById('log');
  const logItem = document.createElement('li');
  logItem.textContent = message;
  logElement.append(logItem);
}