import './header.css';
import View from '../view';
import ElementBuilder from '../../util/element/element-builder';
// eslint-disable-next-line no-unused-vars
import MainView from '../main/main-view';
import IndexView from '../index/index-view';
import ShowcaseView from '../showcase/showcase-view';
import AboutView from '../about/about-view';

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
const START_PAGE_INDEX = 0;

/**
 * @typedef {{ name: string, callback: function }} Page
 */

export default class HeaderView extends View {
    /**
     * @param {MainView} mainComponent
     */
    constructor(mainComponent) {
        super();

        this.headerLinkElements = [];
        this.htmlElement = this.createView(mainComponent);
    }

    /**
     * @param {MainView} mainComponent
     * @returns {HTMLElement}
     */
    createView(mainComponent) {
        const headerBuilder = new ElementBuilder('header');

        const navBuilder = new ElementBuilder('nav');
        navBuilder.setCssClasses([CssClasses.NAV]);

        const indexView = new IndexView();
        const showcaseView = new ShowcaseView();
        const aboutView = new AboutView();

        const pages = [
            {
                name: NamePages.INDEX,
                callback: () => mainComponent.setContent(indexView),
            },
            {
                name: NamePages.SHOWCASE,
                callback: () => mainComponent.setContent(showcaseView),
            },
            {
                name: NamePages.ABOUT,
                callback: () => mainComponent.setContent(aboutView),
            },
        ];
        pages.forEach((page, index) => {
            const linkElement = this.createLinkElement(page.name, page.callback);
            linkElement.addEventListener('click', this.linkClickHandler.bind(this));

            navBuilder.addInnerElement(linkElement);
            if (index === START_PAGE_INDEX) {
                page.callback();
                linkElement.classList.add(CssClasses.ITEM_SELECTED);
            }

            this.headerLinkElements.push(linkElement);
        });

        headerBuilder.addInnerElement(navBuilder).setCssClasses([CssClasses.HEADER]);
        return headerBuilder.getElement();
    }

    /**
     * @param {MouseEvent} event
     */
    linkClickHandler(event) {
        this.headerLinkElements.forEach((element) => element.classList.remove(CssClasses.ITEM_SELECTED));
        if (event.target instanceof HTMLElement) {
            event.target.classList.add(CssClasses.ITEM_SELECTED);
        }
    }

    /**
     * @param {string} text
     * @param {function} callback
     * @returns {HTMLElement}
     */
    createLinkElement(text, callback) {
        const builder = new ElementBuilder('a');
        builder.setCssClasses([CssClasses.ITEM]).setTextContent(text).setClickCallback(callback);
        return builder.getElement();
    }
}
