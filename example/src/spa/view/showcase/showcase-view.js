import './showcase.css';
import cardsInfo from '../../../data/cards';
import ElementBuilder from '../../../classes/util/element/element-builder';
import View from '../../../classes/view/view';
import CardDetailView from '../card-detail/card-detail-view';
import CardView from '../card/card-view';

const CssClasses = {
    SHOWCASE: 'showcase',
};

export default class ShowcaseView extends View {
    /**
     * @param {string} id
     * @param {import('../../router/router').default} router
     */
    constructor(router, id = '') {
        super();
        this.htmlElement = this.createView();
        if (id) {
            this.addLargeCardToView(router, id);
        } else {
            this.addSmallCardsToView(router);
        }
    }

    createView() {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([CssClasses.SHOWCASE]);
        return builder.getElement();
    }

    /**
     * @param {import('../../router/router').default} router
     */
    addSmallCardsToView(router) {
        cardsInfo.forEach((card) => {
            const smallCardComponent = new CardView(card, router);
            this.htmlElement.append(smallCardComponent.getHtmlElement());
        });
    }

    /**
     * @param {import('../../router/router').default} router
     * @param {string} id
     */
    addLargeCardToView(router, id) {
        const selectedCard = cardsInfo.find((card) => card.id === id);
        const largeCardComponent = new CardDetailView(selectedCard, router);
        this.htmlElement.append(largeCardComponent.getHtmlElement());
    }
}
