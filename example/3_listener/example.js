/**
 * Пример множества слушателей одного и того же события на элементе
 */
const buttonMany = document.getElementById('buttonManyListener');
buttonMany.addEventListener('click', () => {
    const message = 'Первый обработчик. Стрелочная ф-ция.(1) Событие click';
    console.log(message);
    addLog(message);
});
buttonMany.addEventListener('click', buttonManyClickHandler);
function buttonManyClickHandler() {
    const message = 'Второй обработчик. Именованная ф-ция.(2) Событие click';
    console.log(message);
    addLog(message);
}
const objectHandler = {
    handleEvent: function (event) {
        const message = 'Третий обработчик. Объект-обработчик. (3) Событие click';
        console.log(message);
        addLog(message);
    }
}
buttonMany.addEventListener('click', objectHandler);

/**
 * Пример множества слушателей разных событий на элементе
 */
const buttonDifferent = document.getElementById('buttonDifferentEvent');
buttonDifferent.addEventListener('click', () => {
    const message = 'Первый обработчик.(4) Событие click';
    console.log(message);
    addLog(message);
});
buttonDifferent.addEventListener('mouseenter', () => {
    const message = 'Второй обработчик.(5) Событие mouseenter';
    console.log(message);
    addLog(message);
});
buttonDifferent.addEventListener('mouseout', () => {
    const message = 'Третий обработчик.(6) Событие mouseout';
    console.log(message);
    addLog(message);
});

/**
 * Пример удаления слушателей события
 */
const buttonRemove = document.getElementById('buttonRemoveFunc');
buttonRemove.addEventListener('mouseenter', mouseEnterHandler);
buttonRemove.addEventListener('mouseout', mouseOutHandler);
function mouseEnterHandler() {
    const message = 'Первый обработчик.(7) Событие mouseenter';
    console.log(message);
    addLog(message);
}
function mouseOutHandler() {
    const message = 'Второй обработчик.(8) Событие mouseout';
    console.log(message);
    addLog(message);
}
buttonRemove.addEventListener('click', () => {
    const message = 'Третий обработчик.(9) Событие click. Удаляем слушателей';
    console.log(message);
    addLog(message);

    buttonRemove.removeEventListener('mouseenter', mouseEnterHandler);
    buttonRemove.removeEventListener('mouseout', mouseOutHandler);
});