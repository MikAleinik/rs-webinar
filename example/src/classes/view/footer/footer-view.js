import './footer.css';
import View from '../view';
import ElementBuilder from '../../util/element/element-builder';

const CssClasses = {
    FOOTER: 'footer',
};
const TEXT = 'SPA example app';

export default class FooterView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();
    }

    createView() {
        const builder = new ElementBuilder('footer');
        builder.setCssClasses([CssClasses.FOOTER]).setTextContent(TEXT);
        return builder.getElement();
    }
}
