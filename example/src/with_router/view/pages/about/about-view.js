import './about.css';
import ViewCreator from '../../util/view-creator';
import View from '../../view';

/**
 * Класс для показа отложенной загрузки при реализации роутера.
 */
export default class AboutView extends View {
    constructor() {
        super();
        this.component = this.createView();
    }

    createView() {
        const creator = new ViewCreator();
        return creator.createAboutPage();
    }
}
