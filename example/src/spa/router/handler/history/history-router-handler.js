import DefaultRouterHandler from '../default-router-handler';

export default class HistoryRouterHandler extends DefaultRouterHandler {
    /**
     * @param {function} callbackRouter
     */
    constructor(callbackRouter) {
        const handlerParams = {
            nameEvent: 'popstate',
            locationField: 'pathname',
            callback: callbackRouter,
        };
        super(handlerParams);

        window.addEventListener('popstate', this.navigate.bind(this));
    }
}
