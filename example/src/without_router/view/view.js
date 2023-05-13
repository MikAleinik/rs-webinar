/**
 * Базовый класс для всех элементов представлений.
 */
export default class View {
    constructor() {
        this.component = null;
    }

    getComponent() {
        return this.component;
    }
}
