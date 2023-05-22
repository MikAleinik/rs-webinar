/**
 * Пример наследования классов.
 * Базовый строитель реализует методы, которые присущи любому классу строителя, который
 * наследуется от него. Дочерний строитель (унаследованный от данного класса) к базовым
 * методам может добавить, при необходимости, собственные. Дочерний строитель может
 * переопределить реализацию какого-либо из методов родителя.
 */
export default class DefaultBuilder {
    /**
     * @param {string} tag
     */
    constructor(tag = 'div') {
        this.tag = tag;
        this.reset();
    }

    /**
     * @returns {HTMLElement}
     */
    getElement() {
        return this.element;
    }

    /**
     * @param {Array<string>} cssClasses
     * @returns {DefaultBuilder}
     */
    setCssClasses(cssClasses = []) {
        cssClasses.map((cssClass) => this.element.classList.add(cssClass));
        return this;
    }

    /**
     * @param {string} text
     * @returns {DefaultBuilder}
     */
    setTextContent(text = '') {
        this.element.textContent = text;
        return this;
    }

    /**
     * @param {function} callback
     * @returns {DefaultBuilder}
     */
    setClickCallback(callback = null) {
        this.element.addEventListener('click', (event) => callback(event));
        return this;
    }

    /**
     * @param {string} name
     * @param {string} value
     * @returns {DefaultBuilder}
     */
    setAttribute(name, value) {
        this.element.setAttribute(name, value);
        return this;
    }

    /**
     * @returns {DefaultBuilder}
     */
    reset() {
        this.element = document.createElement(this.tag);
        return this;
    }
}
