import ElementCreator from '../util/element-creator';

/**
 * Базовый класс для всех элементов, которые будут являться элементами пользовательского интерфейса,
 * т.е. которые должны что-либо отображать на экране.
 */
/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * }} ViewParams
 */
export default class View {
    /**
     * @param {ViewParams} params
     */
    constructor(params = { tag: 'section', classNames: [] }) {
        this.viewElementCreator = this.createView(params);
    }

    /**
     * @returns {HTMLElement}
     */
    getHtmlElement() {
        return this.viewElementCreator.getElement();
    }

    /**
     * @param {ViewParams} params
     * @returns {ElementCreator}
     */
    createView(params) {
        /**
         * @type {import('../util/element-creator').ElementParams}
         */
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: '',
            callback: null,
        };
        this.viewElementCreator = new ElementCreator(elementParams);

        return this.viewElementCreator;
    }
}
