export type FormCreatorResult<K extends keyof HTMLElementTagNameMap, T extends keyof HTMLElementTagNameMap> = {
    resultHtmlElement: HTMLElementTagNameMap[K];
    labelHtmlElements?: Array<HTMLElementTagNameMap[T]>;
    inputHtmlElements?: Array<HTMLElementTagNameMap[T]>;
    buttonHtmlElement?: HTMLElementTagNameMap[T];
};
