import ElementBuilder from '../../util/element/element-builder';
import View from '../view';

const CssClasses = {
    MAIN: 'main',
};

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
        const builder = new ElementBuilder('main');
        builder.setCssClasses([CssClasses.MAIN]);
        return builder.getElement();
    }
}
