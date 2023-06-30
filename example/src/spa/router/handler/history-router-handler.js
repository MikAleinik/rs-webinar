/**
 * @typedef {{path: string, resource: string}} RequestParams
 * @typedef {{nameEvent: string, locationField: string}} RouterHandlerParam
 */
export default class HistoryRouterHandler {
    /**
     * @param {function} callback
     */
    constructor(callback) {
        this.params = {
            nameEvent: 'popstate',
            locationField: 'pathname',
        };
        this.callback = callback;
        this.handler = this.navigate.bind(this);

        window.addEventListener(this.params.nameEvent, this.handler);
    }

    /**
     * @param {PopStateEvent | string} url
     */
    navigate(url) {
        if (typeof url === 'string') {
            this.setHistory(url);
        }
        const urlString = window.location[this.params.locationField].slice(1);

        /**
         * @type {RequestParams}
         */
        const result = {};
        const path = urlString.split('/');
        [result.path = '', result.resource = ''] = path;

        this.callback(result);
    }

    disable() {
        window.removeEventListener(this.params.nameEvent, this.handler);
    }

    /**
     * @param {string} url
     */
    setHistory(url) {
        window.history.pushState(null, null, `/${url}`);
    }
}
