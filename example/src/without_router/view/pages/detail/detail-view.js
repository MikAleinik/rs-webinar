import './detail.css';
import ViewCreator from '../../util/view-creator';
import View from '../../view';
import cardsInfo from '../../../data/cards';
import CardView from '../../components/card/card-view';
// eslint-disable-next-line no-unused-vars
import MainView from '../main-view';
import CardDetailView from '../../components/card-detail/card-detail-view';

/**
 * Класс для показа работы роутера с параметрами в строке запроса при реализации роутера.
 */
export default class DetailView extends View {
    /**
     * @param {MainView} mainComponent
     */
    constructor(mainComponent) {
        super();
        this.component = this.createView(mainComponent);
    }

    createView(mainComponent) {
        const creator = new ViewCreator();
        const elementPage = creator.createDetailPage();

        cardsInfo.forEach((card) => {
            const smallCardComponent = new CardView(card);
            const largeCardComponent = new CardDetailView(card);

            const callbackMoreInfo = () => mainComponent.setContent(largeCardComponent);
            const callbackBackToMain = () => mainComponent.setContent(this);

            smallCardComponent.setCallback(callbackMoreInfo);
            largeCardComponent.setCallback(callbackBackToMain);

            elementPage.append(smallCardComponent.getComponent());
        });

        return elementPage;
    }
}
