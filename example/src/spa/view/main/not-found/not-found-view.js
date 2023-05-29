import View from '../../view';
import './not-found.css';

const CssClasses = {
    ERROR: 'not-found',
};
const TEXT_NOT_FOUND = 'Ошибка. Страница не найдена.';

export default class NotFoundView extends View {
    constructor() {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.ERROR],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        this.viewElementCreator.setTextContent(TEXT_NOT_FOUND);
    }
}
