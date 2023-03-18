import Reveal from './reveal/dist/reveal.esm.js';
import Markdown from './reveal/plugin/markdown/markdown.esm.js';
import Highlight from './reveal/plugin/highlight/highlight.esm.js';

window.addEventListener('load', () => {
  Reveal.initialize({
    plugins: [Markdown, Highlight]
  });

  const elementsClear = document.querySelectorAll('.button__clear');
  elementsClear.forEach((element) => element.addEventListener('click', clearAllConsoles));

});

function addLog(id, message) {
  const logElement = document.getElementById(id);
  const logItem = document.createElement('li');
  logItem.textContent = message;
  logElement.append(logItem);
}
function clearAllConsoles() {
  const elementsLog = document.querySelectorAll('.console__log');
  elementsLog.forEach((element) => {
    element.innerHTML = '';
  });
}

let buttonRemoveFuncTwo = document.getElementById('buttonRemoveFuncTwo');
buttonRemoveFuncTwo.addEventListener('mouseenter', () => {
  addLog('removeFuncTwoLog', 'Первый обработчик.(1)');
});
buttonRemoveFuncTwo.addEventListener('mouseout', mouseOutTwoHandler);
function mouseOutTwoHandler() {
  addLog('removeFuncTwoLog', 'Второй обработчик.(2)');
}
buttonRemoveFuncTwo.addEventListener('click', () => {
  buttonRemoveFuncTwo.removeEventListener('mouseenter', () => {
    addLog('removeFuncTwoLog', 'Первый обработчик.(1)');
  });
  buttonRemoveFuncTwo.removeEventListener('mouseout', mouseOutTwoHandler);
});

let buttonRemoveFunc = document.getElementById('buttonRemoveFunc');
buttonRemoveFunc.addEventListener('mouseenter', mouseEnterHandler);
buttonRemoveFunc.addEventListener('mouseout', mouseOutHandler);
function mouseEnterHandler() {
  addLog('removeFuncLog', 'Первый обработчик.(1)');
}
function mouseOutHandler() {
  addLog('removeFuncLog', 'Второй обработчик.(2)');
}
buttonRemoveFunc.addEventListener('click', () => {
  buttonRemoveFunc.removeEventListener('mouseenter', mouseEnterHandler);
});

let buttonDifferentEvent = document.getElementById('buttonDifferentEvent');
buttonDifferentEvent.addEventListener('click', () => {
  addLog('differentEventLog', 'Первый обработчик.(1)');
});
buttonDifferentEvent.addEventListener('mouseenter', () => {
  addLog('differentEventLog', 'Второй обработчик.(2)');
});
buttonDifferentEvent.addEventListener('mouseout', () => {
  addLog('differentEventLog', 'Третий обработчик.(3)');
});

let buttonManyListener = document.getElementById('buttonManyListener');
buttonManyListener.addEventListener('click', () => {
  addLog('addManyListenerLog', 'Первый обработчик.(1)');
});
buttonManyListener.addEventListener('click', () => {
  addLog('addManyListenerLog', 'Второй обработчик.(2)');
});
buttonManyListener.addEventListener('click', () => {
  addLog('addManyListenerLog', 'Третий обработчик.(3)');
});

document.getElementById('timerBtn').addEventListener('click', runAsyncTimer);
function runAsyncTimer() {
  function timer() {
    setTimeout(() => {
      addLog('timerLog', 'Завершение длительных вычислений.(2)');
    }, 1000);
  }
  addLog('timerLog', 'Начало выполнения кода.(1)');
  timer();
  addLog('timerLog', 'Завершение выполнения кода.(3)');
}

document.getElementById('asyncBtn').addEventListener('click', runAsync);
function runAsync() {
  async function summ() {
    let result = await function () {
      let counter = 0;
      for (let i = 0; i < 100000; i += 1) {
        //Какие-то вычисления
        counter += 1;
      }
      return counter;
    }();
    addLog('asyncLog', 'Завершение длительных вычислений.(2) 100000');
  }
  addLog('asyncLog', 'Начало выполнения кода.(1)');
  summ();
  addLog('asyncLog', 'Завершение выполнения кода.(3)');
}

document.getElementById('syncBtn').addEventListener('click', runSync);
function runSync() {
  function summ() {
    let counter = 0;
    for (let i = 0; i < 100000; i += 1) {
      //Какие-то вычисления
      counter += 1;
    }
    addLog('syncLog', 'Завершение длительных вычислений.(2) 100000');
  }
  addLog('syncLog', 'Начало выполнения кода.(1)');
  summ();
  addLog('syncLog', 'Завершение выполнения кода.(3)');
}

document.getElementById('callbackBtn').addEventListener('click', runCallback);
function runCallback() {
  function summ(numberOne, numberTwo) {
    addLog('callbackLog', `${numberOne} + ${numberTwo}`);
    return numberOne + numberTwo;
  }
  function difference(numberOne, numberTwo) {
    addLog('callbackLog', `${numberOne} - ${numberTwo}`);
    return numberOne - numberTwo;
  }
  function action(numbers, callbacks) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {
      const currentCallback = callbacks[i - 1];
      const number = numbers[i];
      result = currentCallback(result, number);
      addLog('callbackLog', `${result}`);
    }
    return result;
  }
  const numbers = [1, 2, 3, 4];
  const callbacks = [summ, difference, summ];
  addLog('callbackLog', `Результат = ${action(numbers, callbacks)}`);
}