import './input-field.css';
import DefaultBuilder from '../default-builder';

const InputFieldCssClasses = {
    CONTAINER: 'field__container',
    CONTAINER_REVERSE: 'field__container_reverse',
};

/**
 * Пример наследования классов.
 * Данная реализация строителя, унаследованная от базового строителя, переопределяет
 * два метода родительского класса setTextContent и reset, а так же добавляет новый
 * собственный метод setKeyUpCallback.
 */
export default class InputFieldBuilder extends DefaultBuilder {
    /**
     * Переопределение дочерними классами метода родительского класса демонстрирует принцип
     * полиморфизма. И объекты InputFieldBuilder и ElementBuilder будут показывать разный
     * результат при вызове одного и того же метода, хотя каждый из них является наследником
     * базового класса DefaultBuilder
     * @param {string} text
     * @returns {InputFieldBuilder}
     */
    setTextContent(text = '') {
        this.labelElement.textContent = text;
        return this;
    }

    /**
     * Переопределение дочерними классами метода родительского класса демонстрирует принцип
     * полиморфизма. И объекты InputFieldBuilder и ElementBuilder будут показывать разный
     * результат при вызове одного и того же метода, хотя каждый из них является наследником
     * базового класса DefaultBuilder
     * @returns {InputFieldBuilder}
     */
    reset() {
        this.element = document.createElement('div');
        this.inputElement = document.createElement('input');
        this.labelElement = document.createElement('label');
        this.element.classList.add(InputFieldCssClasses.CONTAINER);
        this.element.append(this.labelElement, this.inputElement);
        return this;
    }

    /**
     * Добавление дочерними классами нового метода расширяет функциональность родительского.
     * @param {string | boolean} value
     * @returns {InputFieldBuilder}
     */
    setValue(value) {
        if (typeof value === 'string') {
            this.inputElement.value = value;
        } else {
            this.inputElement.setAttribute('checked', `${value}`);
        }
        return this;
    }

    /**
     * Добавление дочерними классами нового метода расширяет функциональность родительского.
     * @param {function} callback
     * @returns {InputFieldBuilder}
     */
    setKeyUpCallback(callback) {
        this.element.addEventListener('keyup', (event) => callback(event));
        return this;
    }
}
