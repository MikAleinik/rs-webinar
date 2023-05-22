import CardView from '../card/card-view';
import { Pages } from '../../router/pages';
import ElementBuilder from '../../../classes/util/element/element-builder';

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
            .setClickCallback(this.buttonClickHandler.bind(this, `${Pages.SHOWCASE}`));
        builder.addInnerElement(buttonBuilder);

        return builder.getElement();
    }
}
