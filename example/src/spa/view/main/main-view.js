import View from '../view';

const CssClasses = {
    MAIN: 'main',
};

export default class MainView extends View {
    constructor() {
        /**
         * @type {import('../view').ViewParams}
         */
        const params = {
            tag: 'main',
            classNames: [CssClasses.MAIN],
        };
        super(params);
    }

    /**
     * @param {View} content
     */
    setContent(content) {
        const htmlElement = this.viewElementCreator.getElement();
        while (htmlElement.firstElementChild) {
            htmlElement.firstElementChild.remove();
        }
        this.viewElementCreator.addInnerElement(content.getHtmlElement());
    }
}
