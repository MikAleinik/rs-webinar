import './product.css';
import View from '../../view';
import cardsInfo from '../../../../data/cards';
import CardView from './card/card-view';
import CardDetailView from './card-detail/card-detail-view';

const CssClasses = {
    PRODUCT: 'product',
};

export default class ProductView extends View {
    constructor() {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'main',
            classNames: [CssClasses.PRODUCT],
        };
        super(params);

        this.showAllCard();
    }

    /**
     * @param {import('../../../../data/cards').CardInfo} card
     * @returns {CardView}
     */
    createSmallCardsToView(card) {
        const smallCardComponent = new CardView(card);
        const callbackMoreInfo = () => this.showLargeCard(card);
        smallCardComponent.setCallback(callbackMoreInfo);
        return smallCardComponent;
    }

    /**
     * @param {import('../../../../data/cards').CardInfo} card
     * @returns {CardView}
     */
    createLargeCardToView(card) {
        const largeCardComponent = new CardDetailView(card);
        const callbackToProduct = () => this.showAllCard();
        largeCardComponent.setCallback(callbackToProduct);
        return largeCardComponent;
    }

    showAllCard() {
        this.clearView();
        cardsInfo.forEach((card) => {
            const smallCardComponent = this.createSmallCardsToView(card);
            this.viewElementCreator.addInnerElement(smallCardComponent.getHtmlElement());
        });
    }

    showLargeCard(card) {
        this.clearView();
        const largeCard = this.createLargeCardToView(card);
        this.viewElementCreator.addInnerElement(largeCard.getHtmlElement());
    }

    clearView() {
        const htmlElement = this.viewElementCreator.getElement();
        while (htmlElement.firstElementChild) {
            htmlElement.firstElementChild.remove();
        }
    }
}
