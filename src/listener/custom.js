// const EVENT_CLICK = "myCustomEvent";

// const firstCheckBox = document.getElementById('firstCheckbox');
// const secondCheckBox = document.getElementById('secondCheckbox');
// const innerContainer = document.getElementById('innerContainer');

// firstCheckBox.addEventListener('click', firstCheckBoxHandler);
// function firstCheckBoxHandler() {
//   addLog('Первый чекбокс.(1)');
//   const options = {
//     bubbles: true,
//     cancelable: false,
//     // detail: {
//     //   message: 'Пользовательское событие первого чекбокса.(2)',
//     // },
//   };
//   const customEvent = new CustomEvent(EVENT_CLICK, options);
//   this.dispatchEvent(customEvent);
// }

// secondCheckBox.addEventListener('click', secondCheckBoxHandler);
// function secondCheckBoxHandler() {
//   addLog('Второй чекбокс.(3)');
//   const options = {
//     bubbles: true,
//     cancelable: false,
//     // detail: {
//     //   message: 'Пользовательское событие второго чекбокса.(4)',
//     // },
//   };
//   const event = new Event(EVENT_CLICK, options);
//   this.dispatchEvent(event);
// }

// innerContainer.addEventListener(EVENT_CLICK, containerHandler);
// function containerHandler(event) {
//   if(event.detail && event.detail.message) {
//     addLog(`Внешний контейнер. ${event.detail.message}.(5)`);
//   } else {
//     addLog(`Внешний контейнер. event.detail = null.(6)`);
//   }
// }

/**
 * Функция добавления лога сообщений событий
 */
function addLog(message) {
  const logElement = document.getElementById('log');
  const logItem = document.createElement('li');
  logItem.textContent = message;
  logElement.append(logItem);
}