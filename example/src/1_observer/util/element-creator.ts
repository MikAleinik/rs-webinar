import { HtmlElementType } from "./enums/element-types";

export default class ElementCreator {
    getHeaderElement(text: string) {
        const htmlElement = this.createHtmlElement(HtmlElementType.HEADER);
        htmlElement instanceof HTMLHeadingElement ? htmlElement.textContent = text : null;
        return htmlElement;
    }
    getInputElement(cssClasses: Array<string>) {
        const htmlElement = this.createHtmlElement(HtmlElementType.INPUT);
        this.setCssClasses(htmlElement, cssClasses);
        return htmlElement;
    }
    getOutputElement(cssClasses: Array<string>) {
        const htmlElement = this.createHtmlElement(HtmlElementType.OUTPUT);
        this.setCssClasses(htmlElement, cssClasses);
        return htmlElement;
    }

    private createHtmlElement(tag: HtmlElementType) {
        return document.createElement(tag);
    }
    private setCssClasses(htmlElement: Element, cssClasses: Array<string>) {
        cssClasses.map((cssClass) => htmlElement.classList.add(cssClass));
    }
}