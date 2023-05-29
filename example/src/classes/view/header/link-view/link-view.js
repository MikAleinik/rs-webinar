import './link.css';
import View from '../../view';

const CssClasses = {
    ITEM: 'nav-item',
    ITEM_SELECTED: 'nav-item__selected',
};

export default class LinkView extends View {
    /**
     * @param {import('../header-view').Page} pageParam
     * @param {Array<LinkView>} linkElements
     */
    constructor(pageParam, linkElements) {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'a',
            classNames: [CssClasses.ITEM],
        };
        super(params);

        this.linkElements = linkElements;

        this.configureView(pageParam);
    }

    setSelectedStatus() {
        this.linkElements.forEach((linkElement) => linkElement.setNotSelectedStatus());

        const element = this.viewElementCreator.getElement();
        element.classList.add(CssClasses.ITEM_SELECTED);
    }

    setNotSelectedStatus() {
        const element = this.viewElementCreator.getElement();
        element.classList.remove(CssClasses.ITEM_SELECTED);
    }

    /**
     * @param {import('../header-view').Page} pageParam
     */
    configureView(pageParam) {
        this.viewElementCreator.setTextContent(pageParam.name);
        this.viewElementCreator.setCallback(pageParam.callback);

        const element = this.viewElementCreator.getElement();
        element.addEventListener('click', this.setSelectedStatus.bind(this));
    }
}
