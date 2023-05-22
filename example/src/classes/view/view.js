/**
 * Базовый класс для всех элементов, которые будут являться элементами пользовательского интерфейса,
 * т.е. которые должны что-либо отображать на экране.
 */
export default class View {
    constructor() {
        this.htmlElement = null;
    }

    /**
     * @returns {HTMLElement}
     */
    getHtmlElement() {
        return this.htmlElement;
    }
}
