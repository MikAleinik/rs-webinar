import './header.css';
import ViewCreator from '../../../util/view-creator';
import View from '../../../view';

const HeaderCssClasses = {
    ITEM_SELECTED: 'nav-item__selected',
};

export default class HeaderView extends View {
    /**
     * @param {Array<import('../../../../app').Page>} pages
     */
    constructor(pages) {
        super();

        const changedLinks = pages.map((page) => {
            return {
                name: page.name,
                callback: this.linkClickHandler.bind(this, page.callback),
            };
        });

        /**
         * @typedef {{name: string, element: HTMLElement}} HeaderItem
         * @type {Array<HeaderItem>}
         */
        this.headerItems = [];
        this.htmlElement = this.createView(changedLinks);
    }

    /**
     * @param {Array<import('../../../../app').Page>} pages
     */
    createView(pages) {
        const creatorLink = new ViewCreator();
        pages.forEach((page) => {
            const linkElement = creatorLink.createLinkButton(page);
            const currentItem = {
                name: page.name,
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
            if (item.name === name) {
                item.element.classList.add(HeaderCssClasses.ITEM_SELECTED);
            }
        });
    }
}
