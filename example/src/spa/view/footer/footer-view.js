import './footer.css';
import View from '../view';

const CssClasses = {
    FOOTER: 'footer',
};
const TEXT = 'SPA example app';

export default class FooterView extends View {
    constructor() {
        /**
         * @type {import('../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.FOOTER],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        this.viewElementCreator.setTextContent(TEXT);
    }
}
