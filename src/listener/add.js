/**
 * Использование в качестве обработчика события функцию переданную в свойство
 */
let button = document.getElementById('buttonProperty');
button.onclick = function propertyHandler() {
  addLog('Сработал обработчик добавленный на свойство (2).');
}

/**
 * Использование в качестве обработчика события функцию с методом addEventListener
 */
button = document.getElementById('buttonTargetFunc');
button.addEventListener('click', () => {
  addLog('Сработала функция обработчик (3.1).');
});
button.addEventListener('click', clickHandler);
function clickHandler() {
  addLog('Сработала функция обработчик (3.2).');
}

/**
 * Использование в качестве обработчика события объект с методом handleEvent
 */
const clickObject = {
  handleEvent: function (event) {
    addLog('Сработал объект обработчик с методом handleEvent (4).');
    addLog(event);
    console.log(event);
  }
}
button = document.getElementById('buttonTargetObj');
button.addEventListener('click', clickObject);

/**
 * Удаление всех обработчиков событий
 */
button = document.getElementById('buttonRemove');
button.addEventListener('click', () => {
  let button = document.getElementById('buttonInline');
  button.onclick = null;

  button = document.getElementById('buttonProperty');
  button.onclick = null;

  button = document.getElementById('buttonTargetFunc');
  button.removeEventListener('click', () => {
    addLog('Сработал обработчик (1) добавленный методом addEventListener.');
  });
  button.removeEventListener('click', clickHandler);

  button = document.getElementById('buttonTargetObj');
  button.removeEventListener('click', clickObject); 
});

/**
 * Функция добавления лога сообщений событий
 */
function addLog(message) {
  const logElement = document.getElementById('log');
  const logItem = document.createElement('li');
  logItem.textContent = message;
  logElement.append(logItem);
}