import './style.css';
import CabinetView from './view/cabinet/cabinet-view';
import CustomView from './view/custom/custom-view';
import HeaderView from './view/header/header-view';

export default class AppObserver {
    private readonly TIME_ADD_NEW_FORM = 5000;

    constructor() {
        this.createView();
    }

    private createView() {
        const headerView = new HeaderView();
        const cabinetFormView = new CabinetView();

        document.body.append(headerView.getHtmlElement() || '', cabinetFormView.getHtmlElement() || '');

        setTimeout(() => {
            const customFormView = new CustomView();
            document.body.append(customFormView.getHtmlElement() || '');
        }, this.TIME_ADD_NEW_FORM);
    }
}
