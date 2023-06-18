import './default-form-view.css';
import HtmlElementCreator from './util/html-element-creator';

export default abstract class DefaultFormView {
    protected htmlElement: HTMLFormElement;

    constructor() {
        this.htmlElement = this.createView();
    }

    getHtmlElement() {
        return this.htmlElement;
    }

    protected createView(): HTMLFormElement {
        const elementCreator = new HtmlElementCreator();
        return elementCreator.getFormElement();
    }
}
