/**
 * Пример делегирования обработки события
 */
const firstСontainer = document.getElementById('firstContainer');

firstСontainer.addEventListener('change', (event) => {
    const container = event.currentTarget.id;
    const element = event.target.id;
    const message =`На контейнере id=${container} обработано событие возникшее на элементе id=${element}.`;
    console.log(message);
    addLog(message);
});


