import './about.css';
import View from '../view';

const CssClasses = {
    ABOUT: 'about',
};
const TEXT_LAZY_LOAD = 'Страница для показа отложенной загрузки.';

export default class AboutView extends View {
    constructor() {
        /**
         * @type {import('../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.ABOUT],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        this.viewElementCreator.setTextContent(TEXT_LAZY_LOAD);
    }
}
