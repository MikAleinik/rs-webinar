import './default-form-view.css';

export default abstract class DefaultFormView {
    protected htmlElement: HTMLFormElement | null = null;

    getHtmlElement() {
        return this.htmlElement;
    }
}
