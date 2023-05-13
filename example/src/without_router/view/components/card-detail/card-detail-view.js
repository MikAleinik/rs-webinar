import ViewCreator from '../../util/view-creator';
import CardView from '../card/card-view';

export default class CardDetailView extends CardView {
    /**
     * @param {import('../card/card-view').Card} params
     * @returns {HTMLElement}
     */
    createView(params) {
        const creator = new ViewCreator();
        return creator.createFullCard(params, this.buttonClickHandler.bind(this));
    }
}
