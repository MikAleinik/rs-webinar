export type ElementCreatorResult<K extends keyof HTMLElementTagNameMap, T extends keyof HTMLElementTagNameMap> = {
    resultHtmlElement: HTMLElementTagNameMap[K];
    adjustableHtmlElements: HTMLElementTagNameMap[T];
};
