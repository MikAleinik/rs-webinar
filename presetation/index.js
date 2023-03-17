import Reveal from './reveal/dist/reveal.esm.js';
import Markdown from './reveal/plugin/markdown/markdown.esm.js';
import Highlight from './reveal/plugin/highlight/highlight.esm.js';

window.addEventListener('load', () => {
  Reveal.initialize({
    plugins: [Markdown, Highlight]
  });

  const elementsClear = document.querySelectorAll('.button__clear');
  elementsClear.forEach((element) => element.addEventListener('click', clearAllConsoles));

  document.getElementById('syncBtn').addEventListener('click', runSync);
  document.getElementById('asyncBtn').addEventListener('click', runAsync);
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