/**
 * Пример перехвата события на целевой стадии и стадии всплытия
 */
const firstCheckBox = document.getElementById('firstCheckbox');
const firstField = document.getElementById('firstField');
const firstСontainer = document.getElementById('firstContainer');

firstCheckBox.addEventListener('change', () => { 
    const message = 'Первый чекбокс.(1)';
    console.log(message);
    addLog(message);
});
firstField.addEventListener('change', () => {
    const message = 'Первый контейнер.(2)';
    console.log(message);
    addLog(message);
});
firstСontainer.addEventListener('change', () => {
    const message = 'Внешний контейнер.(3)';
    console.log(message);
    addLog(message);
});

/**
 * Пример перехвата события на стадии погружения
 */
const secondCheckBox = document.getElementById('secondCheckbox');
const threeCheckBox = document.getElementById('threeCheckbox');

const secondField = document.getElementById('secondField');
const threeField = document.getElementById('threeField');

const secondContainer = document.getElementById('secondContainer');

secondCheckBox.addEventListener('change', () => { 
    const message = 'Второй чекбокс.(4)';
    console.log(message);
    addLog(message);
});
threeCheckBox.addEventListener('change', () => { 
    const message = 'Третий чекбокс.(5)';
    console.log(message);
    addLog(message);
});

const options = {
    capture: true,
}
function secondFieldHandler() {
    const message = 'Второй контейнер.(6)';
    console.log(message);
    addLog(message);
}
function threeFieldHandler() {
    const message = 'Третий контейнер.(7)';
    console.log(message);
    addLog(message);
}
secondField.addEventListener('change', secondFieldHandler, options);
threeField.addEventListener('change', threeFieldHandler, true);

secondContainer.addEventListener('change', () => {
    const message = 'Внешний контейнер.(8)';
    console.log(message);
    addLog(message);
});