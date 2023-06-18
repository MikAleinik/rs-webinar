import './style.css';
import CustomFormView from './view/custom-form/custom-form-view';
import HeaderView from './view/header/header-view';
import CabinetFormView from './view/cabinet-form/cabinet-form-view';

export default class AppObserver {
    constructor() {
        this.createView();
    }

    createView() {
        const headerView = new HeaderView();
        const cabinetFormView = new CabinetFormView();
        const customFormView = new CustomFormView();
        document.body.append(
            headerView.getHtmlElement(),
            cabinetFormView.getHtmlElement(),
            customFormView.getHtmlElement()
        );
    }
}
