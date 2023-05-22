import './not-found.css';
import ElementBuilder from '../../../classes/util/element/element-builder';
import View from '../../../classes/view/view';

const MainCssClasses = {
    ERROR: 'not-found',
};
const TEXT_NOT_FOUND = 'Ошибка. Страница не найдена.';

export default class NotFoundView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();
    }

    createView() {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([MainCssClasses.ERROR]).setTextContent(TEXT_NOT_FOUND);
        return builder.getElement();
    }
}
