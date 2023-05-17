import './card.css';
import View from '../../view';
import ViewCreator from '../../util/view-creator';

/**
 * @typedef {{ id: string, name: string, description: string }} Card
 */
export default class CardView extends View {
    /**
     * @param {Card} params
     */
    constructor(params) {
        super();

        this.callback = null;
        this.card = params;

        this.htmlElement = this.createView(params);
    }

    /**
     * @param {Card} params
     * @returns {HTMLElement}
     */
    createView(params) {
        const creator = new ViewCreator();
        return creator.createSmallCard(params, this.buttonClickHandler.bind(this));
    }

    /**
     * @param {function} callback
     */
    setCallback(callback) {
        if (typeof callback === 'function') {
            this.callback = callback;
        }
    }

    buttonClickHandler() {
        this.callback();
    }

    getCardInfo() {
        return this.card;
    }
}
