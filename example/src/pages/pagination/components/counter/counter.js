import * as Showcase from '../showcase/showcase';

const CssClasses = {
    PAGINATION_CONTAINER: 'page-counter',
    BUTTON: 'round__button',
    NOT_CLICKABLE: 'not-clickable',
}

const TEXT_BUTTON_FIRST = '<<';
const TEXT_BUTTON_LAST = '>>';
const TEXT_BUTTON_PREV = '<';
const TEXT_BUTTON_NEXT = '>';

let component = null;
let buttonFirst = null;
let buttonPrev = null;
let buttonNext = null;
let buttonLast = null;
let buttonCurrent = null;

let countPage = 0;
let currentPage = 1;

function createComponent(count) {
    if (typeof (count) !== 'number' || count < 0) {
        throw new TypeError('Pagination error. Count page is invalid.');
    }
    countPage = count;
    component = createElement('nav', CssClasses.PAGINATION_CONTAINER);

    buttonFirst = createElement('button', CssClasses.BUTTON);
    buttonFirst.textContent = TEXT_BUTTON_FIRST;
    buttonPrev = createElement('button', CssClasses.BUTTON);
    buttonPrev.textContent = TEXT_BUTTON_PREV;
    buttonNext = createElement('button', CssClasses.BUTTON);
    buttonNext.textContent = TEXT_BUTTON_NEXT;
    buttonLast = createElement('button', CssClasses.BUTTON);
    buttonLast.textContent = TEXT_BUTTON_LAST;
    buttonCurrent = createElement('button', CssClasses.BUTTON);
    buttonCurrent.classList.add(CssClasses.NOT_CLICKABLE);
    buttonCurrent.textContent = currentPage;

    component.append(buttonFirst, buttonPrev, buttonCurrent, buttonNext, buttonLast);

    setStatusButton();

    buttonFirst.addEventListener('click', buttonFirstClickhandler);
    buttonPrev.addEventListener('click', buttonPrevClickhandler);
    buttonNext.addEventListener('click', buttonNextClickhandler);
    buttonLast.addEventListener('click', buttonLastClickhandler);

    return component;
}
function buttonFirstClickhandler() {
    currentPage = 1;
    buttonCurrent.textContent = currentPage;
    setStatusButton();
    Showcase.showPage(currentPage);
}
function buttonPrevClickhandler() {
    if (currentPage > 1) {
        currentPage -= 1;
        buttonCurrent.textContent = currentPage;
        setStatusButton();
        Showcase.showPage(currentPage);
    }
}
function buttonNextClickhandler() {
    if (currentPage < countPage) {
        currentPage += 1;
        buttonCurrent.textContent = currentPage;
        setStatusButton();
        Showcase.showPage(currentPage);
    }
}
function buttonLastClickhandler() {
    currentPage = countPage;
    buttonCurrent.textContent = currentPage;
    setStatusButton();
    Showcase.showPage(currentPage);
}
function setStatusButton() {
    if (currentPage === 1) {
        buttonFirst.setAttribute('disabled', true);
        buttonPrev.setAttribute('disabled', true);
    } else {
        buttonFirst.removeAttribute('disabled');
        buttonPrev.removeAttribute('disabled');
    }

    if (currentPage === countPage) {
        buttonLast.setAttribute('disabled', true);
        buttonNext.setAttribute('disabled', true);
    } else {
        buttonLast.removeAttribute('disabled');
        buttonNext.removeAttribute('disabled');
    }
}
function createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

export { createComponent };
