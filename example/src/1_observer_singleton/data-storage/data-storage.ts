import Observer from '../observer/observer';
import { StorageItemName } from './enums/storage-item-name';
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
    setValue(name: StorageItemName, value: T) {
        this.items.set(name, value);
        this.observer.notify(name, value);
    }
    getValue(name: StorageItemName) {
        if (this.items.has(name)) {
            return this.items.get(name);
        }
        return null;
    }
    subscribe(name: StorageItemName, listenerMethod: <T1>(param: T1) => void) {
        this.observer.subscribe(name, listenerMethod);
    }
}
