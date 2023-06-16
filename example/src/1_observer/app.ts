import './style.css';
import RegisterFormView from './view/register-form/register-form-view';

export default class AppObserver {
    constructor() {
        this.createView();
    }

    createView() {
        const registerFormView = new RegisterFormView();
        document.body.append(registerFormView.getHtmlElement());
    }
}
