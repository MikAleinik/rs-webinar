import './about.css';
import View from '../view';
import ElementBuilder from '../../util/element/element-builder';

const CssClasses = {
    ABOUT: 'about',
};
const TEXT_LAZY_LOAD = 'Страница для показа отложенной загрузки.';

export default class AboutView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();
    }

    createView() {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([CssClasses.ABOUT]).setTextContent(TEXT_LAZY_LOAD);
        return builder.getElement();
    }
}
