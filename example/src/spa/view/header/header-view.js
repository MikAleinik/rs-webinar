import './header.css';
// eslint-disable-next-line no-unused-vars
import Router from '../../router/router';
import { Pages } from '../../router/pages';
import View from '../../../classes/view/view';
import ElementBuilder from '../../../classes/util/element/element-builder';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
    ITEM: 'nav-item',
    ITEM_SELECTED: 'nav-item__selected',
};
const NamePages = {
    INDEX: 'Главная',
    SHOWCASE: 'Карточки',
    ABOUT: 'О нас',
};

export default class HeaderView extends View {
    /**
     * @param {Router} router
     */
    constructor(router) {
        super();

        this.headerLinkElements = new Map();
        this.htmlElement = this.createView(router);
    }

    /**
     * @param {Router} router
     */
    createView(router) {
        const headerBuilder = new ElementBuilder('header');

        const navBuilder = new ElementBuilder('nav');
        navBuilder.setCssClasses([CssClasses.NAV]);

        Object.keys(NamePages).forEach((key) => {
            const callback = () => router.navigate(Pages[key]);

            const builder = new ElementBuilder('a');
            builder
                .setCssClasses([CssClasses.ITEM])
                .setTextContent(NamePages[key])
                .setClickCallback(this.linkClickHandler.bind(this, callback));
            const linkElement = builder.getElement();
            this.headerLinkElements.set(key, linkElement);

            navBuilder.addInnerElement(linkElement);
        });

        headerBuilder.addInnerElement(navBuilder).setCssClasses([CssClasses.HEADER]);
        return headerBuilder.getElement();
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
}
