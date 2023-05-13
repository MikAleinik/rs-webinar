import './header.css';
import ViewCreator from '../../../util/view-creator';
import View from '../../../view';

const HeaderCssClasses = {
    ITEM_SELECTED: 'nav-item__selected',
};

/**
 * @typedef {{ path: string, callback: function }} Link
 */
export default class HeaderView extends View {
    /**
     * @param {Array<Link>} links
     */
    constructor(links) {
        super();

        const changedLinks = links.map((link) => {
            return {
                path: link.path,
                callback: this.linkClickHandler.bind(this, link.callback),
            };
        });

        /**
         * @typedef {{route: Link, element: HTMLElement}} HeaderItem
         * @type {Array<HeaderItem>}
         */
        this.headerItems = [];
        this.component = this.createView(changedLinks);
    }

    /**
     * @param {Array<Link>} links
     */
    createView(links) {
        const creatorLink = new ViewCreator();
        links.forEach((linkItem) => {
            const linkElement = creatorLink.createLinkButton(linkItem);
            const currentItem = {
                route: linkItem,
                element: linkElement,
            };
            this.headerItems.push(currentItem);
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
        this.headerItems.forEach((item) => {
            if (item.route.path === name) {
                item.element.classList.add(HeaderCssClasses.ITEM_SELECTED);
            }
        });
    }
}
