import './product.css';
import cardsInfo from '../../../../data/cards';
import CardDetailView from './card-detail/card-detail-view';
import CardView from './card/card-view';
import View from '../../view';

const CssClasses = {
    PRODUCT: 'product',
};

export default class ProductView extends View {
    /**
     * @param {string} id
     * @param {import('../../../router/router').default} router
     */
    constructor(router, id = '') {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.PRODUCT],
        };
        super(params);

        if (id) {
            this.addLargeCardToView(router, id);
        } else {
            this.addSmallCardsToView(router);
        }
    }

    /**
     * @param {import('../../../router/router').default} router
     */
    addSmallCardsToView(router) {
        cardsInfo.forEach((card) => {
            const smallCardComponent = new CardView(card, router);
            this.viewElementCreator.addInnerElement(smallCardComponent.getHtmlElement());
        });
    }

    /**
     * @param {import('../../../router/router').default} router
     * @param {string} id
     */
    addLargeCardToView(router, id) {
        const selectedCard = cardsInfo.find((card) => card.id === id);
        const largeCardComponent = new CardDetailView(selectedCard, router);
        this.viewElementCreator.addInnerElement(largeCardComponent.getHtmlElement());
    }
}
