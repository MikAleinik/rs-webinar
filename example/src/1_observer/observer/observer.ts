import INotify from '../interface/i-notify';

export default class Observer {
    private _listeners = new Set<INotify>();

    subscribe(listener: INotify) {
        this._listeners.add(listener);
    }

    unsubscribe(listener: INotify) {
        this._listeners.delete(listener);
    }

    notify<T>(params: T) {
        this._listeners.forEach((listener) => listener.notify(params));
    }
}
