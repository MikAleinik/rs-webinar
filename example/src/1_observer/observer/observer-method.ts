export default class Observer<T> {
    private _listeners = new Set<(param: T) => void>();

    subscribe(listener: (param: T) => void) {
        this._listeners.add(listener);
    }

    unsubscribe(listener: (param: T) => void) {
        this._listeners.delete(listener);
    }

    notify(params: T) {
        this._listeners.forEach((listener) => listener(params));
    }
}
