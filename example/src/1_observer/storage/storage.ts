export default class Storage<T> {
    private items = new Map<string, T>;

    setValue(name: string, value: T) {
        this.items.set(name, value);
    }

    getValue(name: string) {
        if(this.items.has(name)) {
            return this.items.get(name);
        }
        return null;
    }
}