import { HtmlClasses } from './enums/html-classes';
import { HtmlTags } from './enums/html-tags';

export default class HtmlElementCreator {
    getFormElement() {
        const htmlElement = this.createHtmlElement(HtmlTags.FORM, HtmlClasses.FORM);
        return htmlElement;
    }

    getInputFieldElement(text: string, callback: (event: Event) => void) {
        const fieldElement = this.createHtmlElement(HtmlTags.CONTAINER, HtmlClasses.FIELD);

        const inputElement = this.createHtmlElement(HtmlTags.INPUT, HtmlClasses.INPUT);
        inputElement.addEventListener('keyup', (event) => {
            callback(event);
        });

        const labelElement = this.createHtmlElement(HtmlTags.LABEL, HtmlClasses.LABEL);
        labelElement.textContent = text;

        fieldElement.append(labelElement, inputElement);

        return fieldElement;
    }

    getButtonElement(callback: <T>(params?: T) => void) {
        const buttonElement = this.createHtmlElement(HtmlTags.BUTTON, HtmlClasses.BUTTON);
        buttonElement.addEventListener('click', <T>(params?: T) => callback(params));

        return buttonElement;
    }

    private createHtmlElement<K extends keyof HTMLElementTagNameMap>(
        tagName: K,
        cssClass: HtmlClasses
    ): HTMLElementTagNameMap[K] {
        const element = document.createElement(tagName);
        element.classList.add(cssClass);
        return element;
    }
}
