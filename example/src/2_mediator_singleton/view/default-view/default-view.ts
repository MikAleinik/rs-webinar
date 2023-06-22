import './default-view.css';

export default abstract class DefaultView {
    protected htmlElement: HTMLFormElement | null = null;

    getHtmlElement() {
        return this.htmlElement;
    }
}
