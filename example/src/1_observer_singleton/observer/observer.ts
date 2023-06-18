/**
 * Реализация паттерна Наблюдатель/Observer.
 */
export default class Observer {
    private _listeners = new Map<string, Set<<T>(param: T) => void>>();

    subscribe(nameEvent: string, listenerMethod: <T>(param: T) => void) {
        let listListeners = this._listeners.get(nameEvent);
        if (!listListeners) {
            listListeners = new Set<<T>(param: T) => void>();
            this._listeners.set(nameEvent, listListeners);
        }
        listListeners.add(listenerMethod);
    }
    unsubscribe(nameEvent: string, listenerMethod: <T>(param: T) => void) {
        const listListeners = this._listeners.get(nameEvent);
        if (listListeners) {
            listListeners.delete(listenerMethod);
        }
    }
    notify<T>(nameEvent: string, params: T) {
        const listListeners = this._listeners.get(nameEvent);
        if (listListeners) {
            listListeners.forEach((listener) => listener(params));
        }
    }
}
