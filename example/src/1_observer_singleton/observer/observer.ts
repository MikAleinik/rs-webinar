import { AppEvents } from '../types/app-events';

/**
 * Реализация паттерна Наблюдатель/Observer.
 */
export default class Observer {
    private _listeners = new Map<AppEvents, Set<<T>(param: T) => void>>();

    subscribe(nameEvent: AppEvents, listenerMethod: <T>(param: T) => void) {
        let listListeners = this._listeners.get(nameEvent);
        if (!listListeners) {
            listListeners = new Set<<T>(param: T) => void>();
            this._listeners.set(nameEvent, listListeners);
        }
        listListeners.add(listenerMethod);
    }
    unsubscribe(nameEvent: AppEvents, listenerMethod: <T>(param: T) => void) {
        const listListeners = this._listeners.get(nameEvent);
        if (listListeners) {
            listListeners.delete(listenerMethod);
        }
    }
    notify<T>(nameEvent: AppEvents, params: T) {
        const listListeners = this._listeners.get(nameEvent);
        if (listListeners) {
            listListeners.forEach((listener) => listener(params));
        }
    }
}
