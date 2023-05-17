import './header.css';
import ViewCreator from '../../../util/view-creator';
import View from '../../../view';
// eslint-disable-next-line no-unused-vars
import Router from '../../../../router/router';
import { Pages } from '../../../../router/pages';

const HeaderCssClasses = {
    ITEM_SELECTED: 'nav-item__selected',
};
const NamePages = {
    INDEX: 'Главная',
    DETAIL: 'Карточки',
    ABOUT: 'О нас',
};

/**
 * @typedef {{name: string, callback: function}} HeaderLink
 * @typedef {{path: string, element: HTMLElement}} HeaderItem
 */

export default class HeaderView extends View {
    /**
     * @param {Router} router
     */
    constructor(router) {
        super();

        /**
         * @type {Array<HeaderItem>}
         */
        this.headerItems = [];
        this.htmlElement = this.createView(router);
    }

    /**
     * @param {Router} router
     */
    createView(router) {
        const creatorLink = new ViewCreator();
        Object.keys(NamePages).forEach((key) => {
            const callback = () => router.navigate(Pages[key]);
            /**
             * @type {HeaderLink}
             */
            const linkItem = {
                name: NamePages[key],
                callback: this.linkClickHandler.bind(this, callback),
            };
            const linkElement = creatorLink.createLinkButton(linkItem);
            /**
             * @type {HeaderItem}
             */
            const headerItem = {
                path: Pages[key],
                element: linkElement,
            };
            this.headerItems.push(headerItem);
        });

        const creatorHeader = new ViewCreator();
        return creatorHeader.createHeader(this.headerItems.map((item) => item.element));
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
        this.headerItems.forEach((item) => item.element.classList.remove(HeaderCssClasses.ITEM_SELECTED));
        if (event.target instanceof HTMLElement) {
            event.target.classList.add(HeaderCssClasses.ITEM_SELECTED);
        }
    }

    /**
     * @param {string} name
     */
    setSelectedItem(name) {
        this.headerItems.forEach((item) => item.element.classList.remove(HeaderCssClasses.ITEM_SELECTED));
        this.headerItems.forEach((item) => {
            if (item.path === name) {
                item.element.classList.add(HeaderCssClasses.ITEM_SELECTED);
            }
        });
    }
}
