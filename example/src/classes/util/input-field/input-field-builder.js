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
 * собственный метод setKeyUpCallback.
 */
export default class InputFieldBuilder extends DefaultBuilder {
    /**
     * @param {string} text
     */
    setTextContent(text = '') {
        this.labelElement.textContent = text;
        return this;
    }

    /**
     * @param {string | boolean} value
     */
    setValue(value) {
        if (typeof value === 'string') {
            this.inputElement.value = value;
        } else {
            this.inputElement.setAttribute('checked', `${value}`);
        }
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
     * @param {function} callback
     */
    setKeyUpCallback(callback) {
        this.element.addEventListener('keyup', (event) => callback(event));
        return this;
    }
}
