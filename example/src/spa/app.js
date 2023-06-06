import '../style.css';
import Router from './router/router';
import { Pages, ID_SELECTOR } from './router/pages';
import State from './state/state';
import FooterView from './view/footer/footer-view';
import HeaderView from './view/header/header-view';
import MainView from './view/main/main-view';

export default class App {
    constructor() {
        this.header = null;
        this.main = null;

        const state = new State();

        const routes = this.createRoutes(state);
        this.router = new Router(routes);

        this.createView();
    }

    createView() {
        this.header = new HeaderView(this.router);
        this.main = new MainView();
        const footer = new FooterView();

        document.body.append(this.header.getHtmlElement(), this.main.getHtmlElement(), footer.getHtmlElement());
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
                    const { default: IndexView } = await import('./view/main/index/index-view');
                    this.setContent(Pages.INDEX, new IndexView(state));
                },
            },
            {
                path: `${Pages.INDEX}`,
                callback: async () => {
                    const { default: IndexView } = await import('./view/main/index/index-view');
                    this.setContent(Pages.INDEX, new IndexView(state));
                },
            },
            {
                path: `${Pages.PRODUCT}`,
                callback: async () => {
                    const { default: ProductView } = await import('./view/main/product/product-view');
                    this.setContent(Pages.PRODUCT, new ProductView(this.router));
                },
            },
            {
                path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
                callback: async (id) => {
                    const { default: ProductView } = await import('./view/main/product/product-view');
                    this.setContent(Pages.PRODUCT, new ProductView(this.router, id));
                },
            },
            {
                path: `${Pages.NOT_FOUND}`,
                callback: async () => {
                    const { default: NotFoundView } = await import('./view/main/not-found/not-found-view');
                    this.setContent(Pages.NOT_FOUND, new NotFoundView());
                },
            },
        ];
    }

    /**
     * @param {string} page
     * @param {import('./view/view').default} view
     */
    setContent(page, view) {
        this.header.setSelectedItem(page);
        this.main.setContent(view);
    }
}
