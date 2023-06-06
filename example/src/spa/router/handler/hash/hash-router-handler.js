import DefaultRouterHandler from '../default-router-handler';

export default class HashRouterHandler extends DefaultRouterHandler {
    /**
     * @param {function} callbackRouter
     */
    constructor(callbackRouter) {
        const handlerParams = {
            nameEvent: 'hashchange',
            locationField: 'hash',
            callback: callbackRouter,
        };
        super(handlerParams);

        window.addEventListener('hashchange', this.navigate.bind(this));
    }
}
