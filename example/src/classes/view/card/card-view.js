import './card.css';
import View from '../view';
import ElementCreator from '../../util/element-creator';

const CssClasses = {
    CONTAINER: 'card',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};
const CARD_TEXT_MORE = 'Подробнее...';

export default class CardView extends View {
    /**
     * @param {import('../../../data/cards').CardInfo} card
     */
    constructor(card) {
        /**
         * @type {import('../view').ViewParams}
         */
        const params = {
            tag: 'article',
            classNames: [CssClasses.CONTAINER],
        };
        super(params);

        this.callback = null;
        this.card = card;

        this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        const labelParams = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: this.card.name,
            callback: null,
            attr: null,
        };
        const creatorLabel = new ElementCreator(labelParams);
        this.viewElementCreator.addInnerElement(creatorLabel);

        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        const buttonParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_MORE,
            callback: this.buttonClickHandler.bind(this),
            attr: null,
        };
        const creatorButton = new ElementCreator(buttonParams);
        this.viewElementCreator.addInnerElement(creatorButton);
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
