import './header.css';
import { Pages } from '../../router/pages';
import ElementCreator from '../../util/element-creator';
import View from '../view';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
    ITEM: 'nav-item',
    ITEM_SELECTED: 'nav-item__selected',
};
const NamePages = {
    INDEX: 'Главная',
    PRODUCT: 'Карточки',
};

export default class HeaderView extends View {
    /**
     * @param {import('../../router/router.js').default} router
     */
    constructor(router) {
        /**
         * @type {import('../view').ViewParams}
         */
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER],
        };
        super(params);

        this.headerLinkElements = new Map();
        this.configureView(router);
    }

    /**
     * @param {import('../../router/router.js').default} router
     */
    configureView(router) {
        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        const navParams = {
            tag: 'nav',
            classNames: [CssClasses.NAV],
            textContent: '',
            callback: null,
        };
        const creatorNav = new ElementCreator(navParams);
        this.viewElementCreator.addInnerElement(creatorNav);

        Object.keys(NamePages).forEach((key) => {
            const callback = () => router.navigate(Pages[key]);

            const linkElement = this.createLinkElement(NamePages[key], callback);
            linkElement.addEventListener('click', this.linkClickHandler.bind(this, callback));

            creatorNav.addInnerElement(linkElement);

            this.headerLinkElements.set(key, linkElement);
        });

        this.viewElementCreator.addInnerElement(creatorNav);
    }

    /**
     * Данный метод является реализацией паттерна "Декоратор" ("Decorator/Wrapper").
     * Обернув исходную функцию обратного вызова в обертку метода и добавив после
     * вызова исходной функции необходимые действия.
     * @param {Function} callback
     * @param {MouseEvent} event
     */
    linkClickHandler(callback, event) {
        callback();
        this.headerLinkElements.forEach((element) => element.classList.remove(CssClasses.ITEM_SELECTED));
        if (event.target instanceof HTMLElement) {
            event.target.classList.add(CssClasses.ITEM_SELECTED);
        }
    }

    /**
     * @param {string} name
     */
    setSelectedItem(name) {
        this.headerLinkElements.forEach((element) => element.classList.remove(CssClasses.ITEM_SELECTED));
        const selectedElement = this.headerLinkElements.get(name.toUpperCase());
        if (selectedElement instanceof HTMLElement) {
            selectedElement.classList.add(CssClasses.ITEM_SELECTED);
        }
    }

    /**
     * @param {string} text
     * @param {function} clickCallback
     * @returns {HTMLElement}
     */
    createLinkElement(text, clickCallback) {
        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        const linkParams = {
            tag: 'a',
            classNames: [CssClasses.ITEM],
            textContent: text,
            callback: clickCallback,
        };
        const creatorLink = new ElementCreator(linkParams);

        return creatorLink.getElement();
    }
}
