import { StorageItemNames } from '../enums/storage-item-names';

export default class DataStorage {
    private static instanseDataStorage = new DataStorage();

    private items = new Map<string, string>();
    private _listeners = new Map<StorageItemNames, Set<(param: string) => void>>();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    static getInstance() {
        return this.instanseDataStorage;
    }

    setValue(name: StorageItemNames, value: string) {
        this.items.set(name, value);
        this.notify(name, value);
    }
    getValue(name: StorageItemNames) {
        if (this.items.has(name)) {
            return this.items.get(name);
        }
        return null;
    }
    subscribe(nameEvent: StorageItemNames, listenerMethod: (param: string) => void) {
        let listListeners = this._listeners.get(nameEvent);
        if (!listListeners) {
            listListeners = new Set<(param: string) => void>();
            this._listeners.set(nameEvent, listListeners);
        }
        listListeners.add(listenerMethod);
    }
    unsubscribe(nameEvent: StorageItemNames, listenerMethod: (param: string) => void) {
        const listListeners = this._listeners.get(nameEvent);
        if (listListeners) {
            listListeners.delete(listenerMethod);
        }
    }

    private notify(nameEvent: StorageItemNames, params: string) {
        const listListeners = this._listeners.get(nameEvent);
        if (listListeners) {
            listListeners.forEach((listener) => listener(params));
        }
    }
}
