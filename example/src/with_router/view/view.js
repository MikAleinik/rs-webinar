/**
 * Базовый класс для всех элементов представлений.
 */
export default class View {
    constructor() {
        this.htmlElement = null;
    }

    getHtmlElement() {
        return this.htmlElement;
    }
}
