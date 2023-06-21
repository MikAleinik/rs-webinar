export type FormCreatorResult<K extends keyof HTMLElementTagNameMap, K1 extends keyof HTMLElementTagNameMap> = {
    resultHtmlElement: HTMLElementTagNameMap[K];
    labelHtmlElements?: Array<HTMLElementTagNameMap[K1]>;
    inputHtmlElements?: Array<HTMLElementTagNameMap[K1]>;
};
