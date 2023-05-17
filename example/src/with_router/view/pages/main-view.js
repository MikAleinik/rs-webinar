import ViewCreator from '../util/view-creator';
import View from '../view';

export default class MainView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();
    }

    /**
     * @param {View} content
     */
    setContent(content) {
        while (this.htmlElement.firstElementChild) {
            this.htmlElement.firstElementChild.remove();
        }
        this.htmlElement.append(content.getHtmlElement());
    }

    createView() {
        const creator = new ViewCreator();
        return creator.createMain();
    }
}
