/**
 * Пример генерации пользовательских событий
 */
const EVENT_NAME = 'userEvent';
const CUSTOM_EVENT_NAME = 'userCustomEvent';

/**
 * Создаем и настраиваем объект события Event
 */
const optionsEvent = {
    bubbles: true,
    cancelable: true,
};
const userEvent = new Event(EVENT_NAME, optionsEvent);
/**
 * Создаем и настраиваем объект события CustomEvent
 */
const optionsCustomEvent = {
    bubbles: true,
    cancelable: true,
    detail: {
        message: 'Данные для передачи слушателю события',
    }
};
const customEvent = new CustomEvent(CUSTOM_EVENT_NAME, optionsCustomEvent);
/**
 * При кликах на чекбоксах будем выполнять генерацию созданных событий
 */
const firstCheckBox = document.getElementById('firstCheckbox');
const secondCheckBox = document.getElementById('secondCheckbox');

firstCheckBox.addEventListener('click', (event) => {
    event.target.dispatchEvent(userEvent);
});
secondCheckBox.addEventListener('click', (event) => {
    event.target.dispatchEvent(customEvent);
});
/**
 * В контейнере выполняем прослушивание на созданные события
 */
const firstСontainer = document.getElementById('firstContainer');

firstСontainer.addEventListener(EVENT_NAME, (event) => {
    const container = event.currentTarget.id;
    const typeEvent = event.type;
    const message =`Контейнер ${container} - обработано событие name=${typeEvent}.`;
    console.log(message);
    addLog(message);
});

firstСontainer.addEventListener(CUSTOM_EVENT_NAME, (event) => {
    const container = event.currentTarget.id;
    const typeEvent = event.type;
    const receivedData = event.detail.message;
    const message =`Контейнер ${container} - обработано событие name=${typeEvent}. Содержимое detail.message=${receivedData}`;
    console.log(message);
    addLog(message);
});
