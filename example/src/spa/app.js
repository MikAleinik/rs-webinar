import '../style.css';
import HeaderView from './view/header/header-view';
import IndexView from './view/index/index-view';
import ShowcaseView from './view/showcase/showcase-view';
import Router from './router/router';
import { Pages, ID_SELECTOR } from './router/pages';
import NotFoundView from './view/not-found/not-found-view';
import FooterView from '../classes/view/footer/footer-view';
import MainView from '../classes/view/main/main-view';
import State from './state/state';

export default class App {
    constructor() {
        const state = new State();

        this.router = new Router();
        /**
         * @type {Array<import('./router/router').Route>}
         */
        const routes = [
            {
                path: ``,
                callback: () => {
                    this.header.setSelectedItem(Pages.INDEX);
                    this.main.setContent(new IndexView(state));
                },
            },
            {
                path: `${Pages.INDEX}`,
                callback: () => {
                    this.header.setSelectedItem(Pages.INDEX);
                    this.main.setContent(new IndexView(state));
                },
            },
            {
                path: `${Pages.SHOWCASE}`,
                callback: () => {
                    this.header.setSelectedItem(Pages.SHOWCASE);
                    this.main.setContent(new ShowcaseView(this.router));
                },
            },
            {
                path: `${Pages.SHOWCASE}/${ID_SELECTOR}`,
                callback: (id) => {
                    this.header.setSelectedItem(Pages.SHOWCASE);
                    this.main.setContent(new ShowcaseView(this.router, id));
                },
            },
            {
                path: `${Pages.ABOUT}`,
                callback: async () => {
                    const { default: AboutView } = await import('../classes/view/about/about-view');
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

        this.router.run();
    }

    createView() {
        this.header = new HeaderView(this.router);
        this.main = new MainView();
        const footer = new FooterView();

        document.body.append(this.header.getHtmlElement(), this.main.getHtmlElement(), footer.getHtmlElement());
    }
}
