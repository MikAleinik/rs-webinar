import HistoryRouterHandler from '../history-router-handler';

export default class HashRouterHandler extends HistoryRouterHandler {
    /**
     * @param {function} callbackRouter
     */
    constructor(callbackRouter) {
        super(callbackRouter);
        /**
         * @type {import('../history-router-handler').RouterHandlerParam}
         */
        this.params = {
            nameEvent: 'hashchange',
            locationField: 'hash',
        };

        window.addEventListener(this.params.nameEvent, this.handler);
    }

    /**
     * @param {string} url
     */
    setHistory(url) {
        window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${url}`;
    }
}
