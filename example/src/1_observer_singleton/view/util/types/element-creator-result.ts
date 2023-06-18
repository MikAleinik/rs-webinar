export type ElementCreatorResult<K extends keyof HTMLElementTagNameMap, T1 extends keyof HTMLElementTagNameMap> = {
    resultHtmlElement: HTMLElementTagNameMap[K];
    adjustableHtmlElement: HTMLElementTagNameMap[T1];
};
