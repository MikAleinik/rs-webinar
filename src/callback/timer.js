function log() {
  console.log('Таймер завершился.(1)');
}

console.log('Начало работы.');

setTimeout(log, 1000);

setTimeout(() => {
  console.log('Таймер завершился.(2)');
}, 1000);

console.log('Завершение работы.');