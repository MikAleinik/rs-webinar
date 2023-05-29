import './header.css';
import View from '../view';
import IndexView from '../main/index/index-view';
import ProductView from '../main/product/product-view';
import ElementCreator from '../../util/element-creator';
import LinkView from './link-view/link-view';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
    // ITEM: 'nav-item',
    // ITEM_SELECTED: 'nav-item__selected',
};
const NamePages = {
    INDEX: 'Главная',
    PRODUCT: 'Карточки',
};
const START_PAGE_INDEX = 0;

/**
 * @typedef {{ name: string, callback: function }} Page
 */

export default class HeaderView extends View {
    /**
     * @param {import('../main/main-view').default} mainComponent
     */
    constructor(mainComponent) {
        /**
         * @type {import('../view').ViewParams}
         */
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER],
        };
        super(params);
        this.headerLinkElements = [];
        this.configureView(mainComponent);
    }

    /**
     * @param {import('../main/main-view').default} mainComponent
     */
    configureView(mainComponent) {
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

        const pages = this.getPages(mainComponent);

        pages.forEach((page, index) => {
            const linkElement = new LinkView(page, this.headerLinkElements);

            creatorNav.addInnerElement(linkElement.getHtmlElement());
            if (index === START_PAGE_INDEX) {
                page.callback();
                linkElement.setSelectedStatus();
            }

            this.headerLinkElements.push(linkElement);
        });

        this.viewElementCreator.addInnerElement(creatorNav);
    }

    /**
     * @param {import('../main/main-view').default} mainComponent
     * @returns {Array<Page>}
     */
    getPages(mainComponent) {
        const indexView = new IndexView();
        const productView = new ProductView();

        const pages = [
            {
                name: NamePages.INDEX,
                callback: () => mainComponent.setContent(indexView),
            },
            {
                name: NamePages.PRODUCT,
                callback: () => mainComponent.setContent(productView),
            },
        ];

        return pages;
    }
}
