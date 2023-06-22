import { HtmlClasses } from './enums/html-classes';
import { HtmlTags } from './enums/html-tags';
import { ElementCreatorResult } from './types/element-creator-result';
import { FormCreatorResult } from './types/form-creator-result';

export default class FormHtmlCreator {
    getTextForm(nameForm: string, nameFields: Array<string>): FormCreatorResult<HtmlTags.FORM, HtmlTags.LABEL> {
        const formElement = this.getFormElement(nameForm);

        const labelElements = new Array<HTMLElementTagNameMap[HtmlTags.LABEL]>();
        nameFields.forEach((name) => {
            const fieldElement = this.getTextFieldElement(name);
            labelElements.push(fieldElement.adjustableHtmlElements);
            formElement.firstElementChild?.append(fieldElement.resultHtmlElement);
        });

        return {
            resultHtmlElement: formElement,
            adjustableHtmlElements: labelElements,
        };
    }
    getInputForm(nameForm: string, nameFields: Array<string>): FormCreatorResult<HtmlTags.FORM, HtmlTags.INPUT> {
        const formElement = this.getFormElement(nameForm);

        const inputElements = new Array<HTMLElementTagNameMap[HtmlTags.INPUT]>();
        nameFields.forEach((name) => {
            const fieldElement = this.getInputFieldElement(name);
            inputElements.push(fieldElement.adjustableHtmlElements);
            formElement.firstElementChild?.append(fieldElement.resultHtmlElement);
        });

        return {
            resultHtmlElement: formElement,
            adjustableHtmlElements: inputElements,
        };
    }

    private getFormElement(nameForm: string) {
        const formElement = this.createHtmlElement(HtmlTags.FORM, HtmlClasses.FORM);

        const htmlElement = this.createHtmlElement(HtmlTags.FIELDSET);
        const headerLegend = this.createHtmlElement(HtmlTags.LEGEND);
        headerLegend.textContent = nameForm;
        htmlElement.append(headerLegend);
        formElement.append(htmlElement);

        return formElement;
    }
    private getInputFieldElement(text: string): ElementCreatorResult<HtmlTags.CONTAINER, HtmlTags.INPUT> {
        const fieldElement = this.createHtmlElement(HtmlTags.CONTAINER, [HtmlClasses.FIELD, HtmlClasses.FIELD_COLUMN]);

        const inputElement = this.createHtmlElement(HtmlTags.INPUT, HtmlClasses.INPUT);
        const labelElement = this.createHtmlElement(HtmlTags.LABEL, HtmlClasses.LABEL);
        labelElement.textContent = text;

        fieldElement.append(labelElement, inputElement);

        return {
            resultHtmlElement: fieldElement,
            adjustableHtmlElements: inputElement,
        };
    }
    private getTextFieldElement(text: string): ElementCreatorResult<HtmlTags.CONTAINER, HtmlTags.LABEL> {
        const fieldElement = this.createHtmlElement(HtmlTags.CONTAINER, [HtmlClasses.FIELD, HtmlClasses.FIELD_ROW]);

        const labelTitleElement = this.createHtmlElement(HtmlTags.LABEL, HtmlClasses.LABEL);
        labelTitleElement.textContent = text;
        fieldElement.append(labelTitleElement);

        const labelElement = this.createHtmlElement(HtmlTags.LABEL, HtmlClasses.LABEL);
        labelElement.textContent = '';
        fieldElement.append(labelElement);

        return {
            resultHtmlElement: fieldElement,
            adjustableHtmlElements: labelElement,
        };
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
