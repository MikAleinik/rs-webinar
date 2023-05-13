import './input-field.css';
import DefaultBuilder from '../default-builder';

const InputFieldCssClasses = {
    CONTAINER: 'field__container',
    CONTAINER_REVERSE: 'field__container_reverse',
};

/**
 * Пример наследования классов.
 * Данная реализация строителя, унаследованная от базового строителя, переопределяет
 * два метода родительского класса (setTextContent и reset) и добавляет дополнительный
 * собственный метод setCheckboxMode.
 */
export default class InputFieldBuilder extends DefaultBuilder {
    constructor() {
        super('div');
    }

    /**
     * @param {string} text
     */
    setTextContent(text = '') {
        this.labelElement.textContent = text;
        return this;
    }

    reset() {
        this.element = document.createElement('div');
        this.inputElement = document.createElement('input');
        this.labelElement = document.createElement('label');
        this.element.classList.add(InputFieldCssClasses.CONTAINER);
        this.element.append(this.labelElement, this.inputElement);
        return this;
    }

    /**
     * @returns {InputFieldBuilder}
     */
    setCheckboxMode() {
        this.element.classList.add(InputFieldCssClasses.CONTAINER_REVERSE);
        this.inputElement.setAttribute('type', 'checkbox');
        return this;
    }
}
