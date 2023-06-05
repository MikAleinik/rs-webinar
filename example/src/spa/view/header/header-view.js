import './header.css';
import { Pages } from '../../router/pages';
import ElementCreator from '../../util/element-creator';
import View from '../view';
import LinkView from './link/link-view';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
};
const NamePages = {
    INDEX: 'Главная',
    PRODUCT: 'Карточки',
};

/**
 * @typedef {{ name: string, callback: function }} Page
 */

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
            const pageParam = {
                name: NamePages[key],
                callback: () => router.navigate(Pages[key]),
            };
            const linkElement = new LinkView(pageParam, this.headerLinkElements);

            creatorNav.addInnerElement(linkElement.getHtmlElement());

            this.headerLinkElements.set(Pages[key].toUpperCase(), linkElement);
        });

        this.viewElementCreator.addInnerElement(creatorNav);
    }

    /**
     * @param {string} namePage
     */
    setSelectedItem(namePage) {
        const linkItem = this.headerLinkElements.get(namePage.toUpperCase());
        if (linkItem instanceof LinkView) {
            linkItem.setSelectedStatus();
        }
    }
}
