import '../style.css';
import HeaderView from './view/header/header-view';
import Router from './router/router';
import { Pages, ID_SELECTOR } from './router/pages';
import FooterView from '../classes/view/footer/footer-view';
import MainView from '../classes/view/main/main-view';
import State from './state/state';

export default class App {
    header = null;

    main = null;

    footer = null;

    constructor() {
        const state = new State();

        const routes = this.createRoutes(state);
        this.router = new Router(routes);

        [this.header, this.main, this.footer] = [...this.createView()];
        document.body.append(this.header.getHtmlElement(), this.main.getHtmlElement(), this.footer.getHtmlElement());
    }

    /**
     * @returns {Array<import('../classes/view/view').default>}
     */
    createView() {
        const header = new HeaderView(this.router);
        const main = new MainView();
        const footer = new FooterView();

        return [header, main, footer];
    }

    /**
     * @param {State} state
     * @return {Array<import('./router/router').Route>}
     */
    createRoutes(state) {
        return [
            {
                path: ``,
                callback: async () => {
                    const { default: IndexView } = await import('./view/index/index-view');
                    this.setContent(Pages.INDEX, new IndexView(state));
                },
            },
            {
                path: `${Pages.INDEX}`,
                callback: async () => {
                    const { default: IndexView } = await import('./view/index/index-view');
                    this.setContent(Pages.INDEX, new IndexView(state));
                },
            },
            {
                path: `${Pages.SHOWCASE}`,
                callback: async () => {
                    const { default: ShowcaseView } = await import('./view/showcase/showcase-view');
                    this.setContent(Pages.SHOWCASE, new ShowcaseView(this.router));
                },
            },
            {
                path: `${Pages.SHOWCASE}/${ID_SELECTOR}`,
                callback: async (id) => {
                    const { default: ShowcaseView } = await import('./view/showcase/showcase-view');
                    this.setContent(Pages.SHOWCASE, new ShowcaseView(this.router, id));
                },
            },
            {
                path: `${Pages.ABOUT}`,
                callback: async () => {
                    const { default: AboutView } = await import('../classes/view/about/about-view');
                    this.setContent(Pages.ABOUT, new AboutView());
                },
            },
            {
                path: `${Pages.NOT_FOUND}`,
                callback: async () => {
                    const { default: NotFoundView } = await import('./view/not-found/not-found-view');
                    this.setContent(Pages.NOT_FOUND, new NotFoundView());
                },
            },
        ];
    }

    /**
     * @param {string} page
     * @param {import('../classes/view/view').default} view
     */
    setContent(page, view) {
        this.header.setSelectedItem(page);
        this.main.setContent(view);
    }
}
