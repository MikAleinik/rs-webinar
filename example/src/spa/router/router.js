import HashRouterHandler from './handler/hash/hash-router-handler';
import HistoryRouterHandler from './handler/history/history-router-handler';
import { Pages, ID_SELECTOR } from './pages';

/**
 * @typedef {{path: string, callback: function}} Route
 */
export default class Router {
    /**
     * @param {Array<Route>} routes
     */
    constructor(routes) {
        this.routes = routes;

        this.handler = new HistoryRouterHandler(this.urlChangedHandler.bind(this));

        document.addEventListener('DOMContentLoaded', () => {
            this.handler.navigate('');
        });
    }

    setHashHandler() {
        this.handler.disable();
        this.handler = new HashRouterHandler(this.urlChangedHandler.bind(this));
    }

    /**
     * @param {string} url
     */
    navigate(url) {
        window.history.pushState(null, null, `/${url}`);
        this.handler.navigate(url);
    }

    /**
     * @param {import('./handler/default-router-handler.js').RequestParams} requestParams
     */
    urlChangedHandler(requestParams) {
        const pathForFind = requestParams.resource === '' ? requestParams.path : `${requestParams.path}/${ID_SELECTOR}`;
        const route = this.routes.find((item) => item.path === pathForFind);

        if (!route) {
            this.redirectToNotFoundPage();
            return;
        }

        route.callback(requestParams.resource);
    }

    redirectToNotFoundPage() {
        const notFoundPage = this.routes.find((item) => item.path === Pages.NOT_FOUND);
        if (notFoundPage) {
            this.navigate(notFoundPage.path);
        }
    }
}
