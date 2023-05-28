import ElementCreator from '../../util/element-creator';
import CardView from '../card/card-view';

const CssClasses = {
    CONTAINER: 'card',
    CONTAINER_FULL: 'card__full',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};
const CARD_TEXT_BACK = 'Назад...';

export default class CardDetailView extends CardView {
    /**
     * @override
     */
    configureView() {
        this.viewElementCreator.setCssClasses([CssClasses.CONTAINER_FULL]);

        /**
         * @type {import('../../util/element-creator').ElementParams}
         */
        let labelParams = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: this.card.name,
            callback: null,
            attr: null,
        };
        let creatorLabel = new ElementCreator(labelParams);
        this.viewElementCreator.addInnerElement(creatorLabel);

        labelParams = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: this.card.description,
            callback: null,
            attr: null,
        };
        creatorLabel = new ElementCreator(labelParams);
        this.viewElementCreator.addInnerElement(creatorLabel);

        const buttonParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_BACK,
            callback: this.buttonClickHandler.bind(this),
            attr: null,
        };
        const creatorButton = new ElementCreator(buttonParams);
        this.viewElementCreator.addInnerElement(creatorButton);
    }
}
