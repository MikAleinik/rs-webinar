import DefaultBuilder from '../default-builder';

/**
 * Пример наследования классов.
 * Данная реализация строителя, унаследованная от базового строителя, добавляет дополнительный
 * собственный метод addInnerElement, а все остальные методы родительского класса использует
 * без изменений.
 */
export default class ElementBuilder extends DefaultBuilder {
    /**
     * Добавление дочерними классами нового метода расширяет функциональность родительского.
     * @param {HTMLElement | DefaultBuilder} element
     * @returns {ElementBuilder}
     */
    addInnerElement(element) {
        if (element instanceof DefaultBuilder) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
        return this;
    }
}
