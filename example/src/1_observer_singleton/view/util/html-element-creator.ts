import { HtmlClasses } from './enums/html-classes';
import { HtmlTags } from './enums/html-tags';
import { ElementCreatorResult } from './types/element-creator-result';

export default class HtmlElementCreator {
    getFormElement() {
        const htmlElement = this.createHtmlElement(HtmlTags.FORM, HtmlClasses.FORM);
        return htmlElement;
    }
    getFieldsetElement(text: string) {
        const htmlElement = this.createHtmlElement(HtmlTags.FIELDSET);
        const headerLegend = this.createHtmlElement(HtmlTags.LEGEND);
        headerLegend.textContent = text;
        htmlElement.append(headerLegend);
        return htmlElement;
    }
    getInputFieldElement(
        text: string,
        callback: <T>(param?: T) => void
    ): ElementCreatorResult<HtmlTags.CONTAINER, HtmlTags.INPUT> {
        const fieldElement = this.createHtmlElement(HtmlTags.CONTAINER, [HtmlClasses.FIELD, HtmlClasses.FIELD_COLUMN]);

        const inputElement = this.createHtmlElement(HtmlTags.INPUT, HtmlClasses.INPUT);
        inputElement.addEventListener('keyup', () => {
            callback();
        });

        const labelElement = this.createHtmlElement(HtmlTags.LABEL, HtmlClasses.LABEL);
        labelElement.textContent = text;

        fieldElement.append(labelElement, inputElement);

        return {
            resultHtmlElement: fieldElement,
            adjustableHtmlElement: inputElement,
        };
    }

    getTextFieldElement(text: string): ElementCreatorResult<HtmlTags.CONTAINER, HtmlTags.LABEL> {
        const fieldElement = this.createHtmlElement(HtmlTags.CONTAINER, [HtmlClasses.FIELD, HtmlClasses.FIELD_ROW]);

        let labelElement = this.createHtmlElement(HtmlTags.LABEL, HtmlClasses.LABEL);
        labelElement.textContent = text;
        fieldElement.append(labelElement);

        labelElement = this.createHtmlElement(HtmlTags.LABEL, HtmlClasses.LABEL);
        labelElement.textContent = '';
        fieldElement.append(labelElement);

        return {
            resultHtmlElement: fieldElement,
            adjustableHtmlElement: labelElement,
        };
    }

    getButtonElement(callback: <T>(params?: T) => void) {
        const buttonElement = this.createHtmlElement(HtmlTags.BUTTON, HtmlClasses.BUTTON);
        buttonElement.addEventListener('click', <T>(params?: T) => callback(params));

        return buttonElement;
    }

    private createHtmlElement<K extends keyof HTMLElementTagNameMap>(
        tagName: K,
        cssClass?: HtmlClasses | Array<HtmlClasses>
    ): HTMLElementTagNameMap[K] {
        const element = document.createElement(tagName);
        if (Array.isArray(cssClass)) {
            element.classList.add(...cssClass);
        } else if (typeof cssClass === 'string') {
            element.classList.add(cssClass);
        }
        return element;
    }
}
