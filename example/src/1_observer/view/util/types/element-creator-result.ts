export type ElementCreatorResult<K extends keyof HTMLElementTagNameMap, K1 extends keyof HTMLElementTagNameMap> = {
    resultHtmlElement: HTMLElementTagNameMap[K];
    adjustableHtmlElements: HTMLElementTagNameMap[K1];
};
