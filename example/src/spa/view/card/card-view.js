import './card.css';
// eslint-disable-next-line no-unused-vars
import Router from '../../router/router';
import { Pages } from '../../router/pages';
import View from '../../../classes/view/view';
import ElementBuilder from '../../../classes/util/element/element-builder';

const CardCssClasses = {
    CONTAINER: 'card',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};
const CARD_TEXT_MORE = 'Подробнее...';

export default class CardView extends View {
    /**
     * @param {import('../../../data/cards').CardInfo} card
     * @param {Router} router
     */
    constructor(card, router) {
        super();

        this.card = card;
        this.router = router;

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
            .setClickCallback(this.buttonClickHandler.bind(this, `${Pages.SHOWCASE}/${this.card.id}`));
        builder.addInnerElement(buttonBuilder);

        return builder.getElement();
    }

    /**
     * @param {string} url
     */
    buttonClickHandler(url) {
        this.router.navigate(url);
    }
}
