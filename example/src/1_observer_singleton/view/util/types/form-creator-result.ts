export type FormCreatorResult<K extends keyof HTMLElementTagNameMap, K1 extends keyof HTMLElementTagNameMap> = {
    resultHtmlElement: HTMLElementTagNameMap[K];
    adjustableHtmlElements: Array<HTMLElementTagNameMap[K1]>;
};
