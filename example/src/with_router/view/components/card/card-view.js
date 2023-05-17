import './card.css';
import View from '../../view';
import ViewCreator from '../../util/view-creator';
// eslint-disable-next-line no-unused-vars
import Router from '../../../router/router';
import { Pages } from '../../../router/pages';

/**
 * @typedef {{ id: string, name: string, description: string }} Card
 */
export default class CardView extends View {
    /**
     * @param {Card} params
     * @param {Router} router
     */
    constructor(params, router) {
        super();

        this.card = params;
        this.router = router;

        this.htmlElement = this.createView(params);
    }

    /**
     * @param {Card} params
     * @returns {HTMLElement}
     */
    createView(params) {
        const creator = new ViewCreator();
        return creator.createSmallCard(params, this.buttonClickHandler.bind(this, `${Pages.DETAIL}/${this.card.id}`));
    }

    /**
     * @param {string} url
     */
    buttonClickHandler(url) {
        this.router.navigate(url);
    }

    getCardInfo() {
        return this.card;
    }
}
