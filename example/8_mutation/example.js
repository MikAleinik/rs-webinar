/**
 * Пример наблюдения за изменениями DOM дерева и/или свойств элементов
 */
const container = document.getElementById('mutationContainer');

const mutationObserver = new MutationObserver(mutationHandler);
function mutationHandler() {
    const message = `Изменения в контейнере.`;
    console.log(message);
    addLog(message);
}
const options = {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
    attributeOldValue: true,
    characterDataOldValue: true,
}
mutationObserver.observe(container, options);

const buttonAdd = document.getElementById('buttonMutationAdd');
const buttonChangeText = document.getElementById('buttonMutationChangeText');
const buttonChangeColor = document.getElementById('buttonMutationChangeColor');

buttonAdd.addEventListener('click', addElementHandler);
buttonChangeText.addEventListener('click', changeTextHandler);
buttonChangeColor.addEventListener('click', changeColorHandler);

let counterNewElement = 0;
function addElementHandler() {
    counterNewElement += 1;
    const newLabel = document.createElement('label');
    newLabel.textContent = `Новый элемент №${counterNewElement}`;
    const container = document.getElementById('mutationContainer');
    container.append(newLabel);
}
function changeTextHandler() {
    const container = document.getElementById('mutationContainer');
    container.lastElementChild.textContent = 'Измененный элемент';
}
function changeColorHandler() {
    const container = document.getElementById('mutationContainer');
    container.lastElementChild.style.color = '#FF0000';
}
