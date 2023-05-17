import './not-found.css';
import ViewCreator from '../../util/view-creator';
import View from '../../view';

export default class NotFoundView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();
    }

    createView() {
        const creator = new ViewCreator();
        return creator.createNotFoundPage();
    }
}
