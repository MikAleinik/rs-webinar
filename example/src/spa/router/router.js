import { Pages, ID_SELECTOR } from './pages';

/**
 * @typedef {{path: string, callback: function}} Route
 */
export default class Router {
    run() {
        const currentPath = this.getCurrentPath();
        this.navigate(currentPath);

        window.addEventListener('popstate', this.browserChangeHandler.bind(this));
        window.addEventListener('hashchange', this.browserChangeHandler.bind(this));
    }

    /**
     * @param {Array<Route>} routes
     */
    setRoutes(routes) {
        this.routes = routes;
    }

    /**
     * @param {string} url
     */
    navigate(url) {
        this.navigateToUrl(url);
        window.history.pushState(null, null, `/${url}`);
    }

    /**
     * @param {string} url
     */
    navigateToUrl(url) {
        const request = this.parseUrl(url);
        const pathForFind = request.resource === '' ? request.path : `${request.path}/${ID_SELECTOR}`;
        const route = this.routes.find((item) => item.path === pathForFind);

        if (!route) {
            this.redirectToNotFoundPage();
            return;
        }

        route.callback(request.resource);
    }

    /**
     * @returns {string}
     */
    getCurrentPath() {
        if (window.location.hash) {
            return window.location.hash.slice(1);
        }

        return window.location.pathname.slice(1);
    }

    /**
     * @typedef {{path: string, resource: string}} UserRequest
     * @param {string} url
     * @returns {UserRequest}
     */
    parseUrl(url) {
        const result = {};

        const path = url.split('/');
        [result.path = '', result.resource = ''] = path;

        return result;
    }

    redirectToNotFoundPage() {
        const notFoundPage = this.routes.find((item) => item.path === Pages.NOT_FOUND);
        if (notFoundPage) {
            this.navigate(notFoundPage.path);
        }
    }

    browserChangeHandler() {
        const currentPath = this.getCurrentPath();
        this.navigateToUrl(currentPath);
    }
}
