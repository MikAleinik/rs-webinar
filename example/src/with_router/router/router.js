import { Pages, ID_SELECTOR } from './pages';

/**
 * @typedef {{path: string, callback: function}} Route
 */
export default class Router {
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
    // /**
    //  * @typedef {{path: string, resource: string}} UserRequest
    //  * @returns {UserRequest}
    //  */
    // parseUrl() {
    //     const result = {
    //         path: '/',
    //         resource: '',
    //     };

    //     if (window.location.pathname === '/') {
    //         return result;
    //     }
    //     const path = window.location.pathname.slice(1).split('/');
    //     if (path[0]) {
    //         [result.path, result.resource] = path;
    //     } else {
    //         const items = window.location.hash.slice(1).split('?');
    //         const hash = items[0].split('/');
    //         [result.path, result.resource] = hash;
    //     }

    //     return result;
    // }
}
