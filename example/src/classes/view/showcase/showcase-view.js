import './showcase.css';
import View from '../view';
import cardsInfo from '../../../data/cards';
import CardView from '../card/card-view';
import CardDetailView from '../card-detail/card-detail-view';
import ElementBuilder from '../../util/element/element-builder';

const CssClasses = {
    SHOWCASE: 'showcase',
};

export default class ShowcaseView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();
        this.showAllCard();
    }

    createView() {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([CssClasses.SHOWCASE]);
        return builder.getElement();
    }

    /**
     * @param {import('../../../data/cards').CardInfo} card
     * @returns {CardView}
     */
    createSmallCardsToView(card) {
        const smallCardComponent = new CardView(card);
        const callbackMoreInfo = () => this.showLargeCard(card);
        smallCardComponent.setCallback(callbackMoreInfo);
        return smallCardComponent;
    }

    /**
     * @param {import('../../../data/cards').CardInfo} card
     * @returns {CardView}
     */
    createLargeCardToView(card) {
        const largeCardComponent = new CardDetailView(card);
        const callbackToShowcase = () => this.showAllCard();
        largeCardComponent.setCallback(callbackToShowcase);
        return largeCardComponent;
    }

    showAllCard() {
        this.clearShowcase();
        cardsInfo.forEach((card) => {
            const smallCardComponent = this.createSmallCardsToView(card);
            this.htmlElement.append(smallCardComponent.getHtmlElement());
        });
    }

    showLargeCard(card) {
        this.clearShowcase();
        const largeCard = this.createLargeCardToView(card);
        this.htmlElement.append(largeCard.getHtmlElement());
    }

    clearShowcase() {
        while (this.htmlElement.firstElementChild) {
            this.htmlElement.firstElementChild.remove();
        }
    }
}
