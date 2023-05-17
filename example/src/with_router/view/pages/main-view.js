import ViewCreator from '../util/view-creator';
import View from '../view';

export default class MainView extends View {
    constructor() {
        super();
        this.component = this.createView();
    }

    /**
     * @param {View} content
     */
    setContent(content) {
        while (this.component.firstElementChild) {
            this.component.firstElementChild.remove();
        }
        this.component.append(content.getComponent());
    }

    createView() {
        const creator = new ViewCreator();
        return creator.createMain();
    }
}
