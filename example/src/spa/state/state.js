const LOCALSTORAGE_KEY = 'spa';

export default class State {
    constructor() {
        this.fields = new Map();
        this.loadState();

        window.addEventListener('beforeunload', this.saveState.bind(this));
    }

    /**
     * @param {string} name
     * @param {string} value
     */
    setField(name, value) {
        this.fields.set(name, value);
    }

    /**
     * @param {string} name
     * @returns {string}
     */
    getField(name) {
        if (this.fields.has(name)) {
            return this.fields.get(name);
        }
        return '';
    }

    saveState() {
        const fiedlsObject = Object.fromEntries(this.fields.entries());
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fiedlsObject));
    }

    loadState() {
        const storageItem = localStorage.getItem(LOCALSTORAGE_KEY);
        if (storageItem) {
            const fieldObject = JSON.parse(storageItem);
            this.fields = new Map(Object.entries(fieldObject));
        }
    }
}
