import ElementBuilder from '../../util/element/element-builder';
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
     * @returns {HTMLElement}
     */
    createView() {
        const builder = new ElementBuilder('article');
        builder.setCssClasses([CssClasses.CONTAINER, CssClasses.CONTAINER_FULL]);

        const labelBuilder = new ElementBuilder('label');
        labelBuilder.setTextContent(this.card.name).setCssClasses([CssClasses.FIELD]);
        builder.addInnerElement(labelBuilder);

        labelBuilder.reset().setTextContent(this.card.description).setCssClasses([CssClasses.FIELD]);
        builder.addInnerElement(labelBuilder);

        const buttonBuilder = new ElementBuilder('button');
        buttonBuilder
            .setTextContent(CARD_TEXT_BACK)
            .setCssClasses([CssClasses.BUTTON])
            .setClickCallback(this.buttonClickHandler.bind(this));
        builder.addInnerElement(buttonBuilder);

        return builder.getElement();
    }
}
