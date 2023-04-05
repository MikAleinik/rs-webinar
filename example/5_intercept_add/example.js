/**
 * Пример отмены у элемента поведения по умолчанию
 */
const firstCheckBox = document.getElementById('firstCheckbox');
const secondCheckBox = document.getElementById('secondCheckbox');
const threeCheckBox = document.getElementById('threeCheckbox');

firstCheckBox.addEventListener('click', (event) => { 
    event.preventDefault();
    const message = 'Первый чекбокс.(1) Чекбокс не закрасился';
    console.log(message);
    addLog(message);
});
/**
 * Пример отмены всплытия события после данного элемента
 */
secondCheckBox.addEventListener('change', (event) => { 
    event.stopPropagation();
    const message = 'Второй чекбокс.(2.1) Обработчики на следующих элементах не работают';
    console.log(message);
    addLog(message);
});
secondCheckBox.addEventListener('change', () => { 
    const message = 'Второй чекбокс.(2.2)';
    console.log(message);
    addLog(message);
});
/**
 * Пример отмены всплытия события после данного обработчика
 */
threeCheckBox.addEventListener('change', (event) => { 
    event.stopImmediatePropagation();
    const message = 'Третий чекбокс.(3.1) Все последующие обработчики не работают';
    console.log(message);
    addLog(message);
});
threeCheckBox.addEventListener('change', () => { 
    const message = 'Третий чекбокс.(3.2)';
    console.log(message);
    addLog(message);
});

const secondField = document.getElementById('secondField');
const threeField = document.getElementById('threeField');

const firstСontainer = document.getElementById('firstContainer');

secondField.addEventListener('change', () => {
    const message = 'Второй контейнер.(4)';
    console.log(message);
    addLog(message);
});
threeField.addEventListener('change', () => {
    const message = 'Третий контейнер.(5)';
    console.log(message);
    addLog(message);
});

firstСontainer.addEventListener('change', () => {
    const message = 'Внешний контейнер.(6)';
    console.log(message);
    addLog(message);
});
