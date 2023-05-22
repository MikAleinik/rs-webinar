import './card.css';
import View from '../view';
import ElementBuilder from '../../util/element/element-builder';

const CardCssClasses = {
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
        super();

        this.callback = null;
        this.card = card;

        this.htmlElement = this.createView();
    }

    /**
     * @returns {HTMLElement}
     */
    createView() {
        const builder = new ElementBuilder('article');
        builder.setCssClasses([CardCssClasses.CONTAINER]);

        const labelBuilder = new ElementBuilder('label');
        labelBuilder.setTextContent(this.card.name).setCssClasses([CardCssClasses.FIELD]);
        builder.addInnerElement(labelBuilder);

        const buttonBuilder = new ElementBuilder('button');
        buttonBuilder
            .setTextContent(CARD_TEXT_MORE)
            .setCssClasses([CardCssClasses.BUTTON])
            .setClickCallback(this.buttonClickHandler.bind(this));
        builder.addInnerElement(buttonBuilder);

        return builder.getElement();
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
