import './detail.css';
import ViewCreator from '../../util/view-creator';
import View from '../../view';
import cardsInfo from '../../../data/cards';
import CardView from '../../components/card/card-view';
import CardDetailView from '../../components/card-detail/card-detail-view';
// eslint-disable-next-line no-unused-vars
import Router from '../../../router/router';

/**
 * Класс для показа работы роутера с параметрами в строке запроса при реализации роутера.
 */
export default class DetailView extends View {
    /**
     * @param {string} id
     * @param {Router} router
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
        const creator = new ViewCreator();
        const elementPage = creator.createDetailPage();

        return elementPage;
    }

    /**
     * @param {Router} router
     */
    addSmallCardsToView(router) {
        cardsInfo.forEach((card) => {
            const smallCardComponent = new CardView(card, router);
            this.htmlElement.append(smallCardComponent.getHtmlElement());
        });
    }

    /**
     * @param {Router} router
     * @param {string} id
     */
    addLargeCardToView(router, id) {
        const selectedCard = cardsInfo.find((card) => card.id === id);
        const largeCardComponent = new CardDetailView(selectedCard, router);
        this.htmlElement.append(largeCardComponent.getHtmlElement());
    }
}
