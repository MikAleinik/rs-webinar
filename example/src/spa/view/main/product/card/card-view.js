import './card.css';
import { Pages } from '../../../../router/pages';
import ElementCreator from '../../../../util/element-creator';
import View from '../../../view';

const CssClasses = {
    CONTAINER: 'card',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};
const CARD_TEXT_MORE = 'Подробнее...';

export default class CardView extends View {
    /**
     * @param {import('../../../../../data/cards').CardInfo} card
     * @param {import('../../../../router/router').default} router
     */
    constructor(card, router) {
        /**
         * @type {import('../../../view').ViewParams}
         */
        const params = {
            tag: 'article',
            classNames: [CssClasses.CONTAINER],
        };
        super(params);

        this.card = card;
        this.router = router;

        this.htmlElement = this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        let labelParams = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: this.card.name,
            callback: null,
        };
        const creatorLabel = new ElementCreator(labelParams);
        this.viewElementCreator.addInnerElement(creatorLabel);

        labelParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_MORE,
            callback: this.buttonClickHandler.bind(this, `${Pages.PRODUCT}/${this.card.id}`),
        };
        const creatorButton = new ElementCreator(labelParams);
        this.viewElementCreator.addInnerElement(creatorButton);
    }

    /**
     * @param {string} url
     */
    buttonClickHandler(url) {
        this.router.navigate(url);
    }
}
