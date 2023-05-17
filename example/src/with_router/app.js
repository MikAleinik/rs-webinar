import './style.css';
import HeaderView from './view/pages/shared/header/header-view';
import FooterView from './view/pages/shared/footer/footer-view';
import IndexView from './view/pages/index/index-view';
import DetailView from './view/pages/detail/detail-view';
import AboutView from './view/pages/about/about-view';
import MainView from './view/pages/main-view';
import Router from './router/router';
import { Pages, ID_SELECTOR } from './router/pages';
import NotFoundView from './view/pages/not-found/not-found-view';

export default class App {
    constructor() {
        this.router = new Router();
        /**
         * @type {Array<import('./router/router').Route>}
         */
        const routes = [
            {
                path: `${Pages.INDEX}`,
                callback: () => {
                    this.header.setSelectedItem(Pages.INDEX);
                    this.main.setContent(new IndexView());
                },
            },
            {
                path: `${Pages.DETAIL}`,
                callback: () => {
                    this.header.setSelectedItem(Pages.DETAIL);
                    this.main.setContent(new DetailView(this.router));
                },
            },
            {
                path: `${Pages.DETAIL}/${ID_SELECTOR}`,
                callback: (id) => {
                    this.header.setSelectedItem(Pages.DETAIL);
                    this.main.setContent(new DetailView(this.router, id));
                },
            },
            {
                path: `${Pages.ABOUT}`,
                callback: () => {
                    this.header.setSelectedItem(Pages.ABOUT);
                    this.main.setContent(new AboutView());
                },
            },
            {
                path: `${Pages.NOT_FOUND}`,
                callback: () => {
                    this.header.setSelectedItem(Pages.NOT_FOUND);
                    this.main.setContent(new NotFoundView());
                },
            },
        ];
        this.router.setRoutes(routes);

        this.createView();

        this.router.navigate(routes[0].path);
    }

    createView() {
        this.header = new HeaderView(this.router);
        this.main = new MainView();
        const footer = new FooterView();

        document.body.append(this.header.getComponent(), this.main.getComponent(), footer.getComponent());
    }
}
