import Observer from '../observer/observer';
import { StorageItemNames } from '../enums/storage-item-names';
/**
 * Реализация паттерна Одиночка/Singleton
 */
export default class DataStorage<T> {
    private static instanseDataStorage = new DataStorage();

    private items = new Map<string, T>();
    private observer = new Observer();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    static getInstance() {
        return this.instanseDataStorage;
    }
    setValue(name: StorageItemNames, value: T) {
        this.items.set(name, value);
        this.observer.notify(name, value);
    }
    getValue(name: StorageItemNames) {
        if (this.items.has(name)) {
            return this.items.get(name);
        }
        return null;
    }
    subscribe(name: StorageItemNames, listenerMethod: <T1>(param: T1) => void) {
        this.observer.subscribe(name, listenerMethod);
    }
}
