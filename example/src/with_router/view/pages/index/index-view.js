import './index.css';
import ViewBuilder from '../../util/view-creator';
import View from '../../view';

/**
 * Класс для показа реализации сохранения состояния при реализации роутера.
 */
export default class IndexView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();
    }

    createView() {
        const creator = new ViewBuilder();
        return creator.createIndexPage();
    }
}
