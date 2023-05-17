import './style.css';
import HeaderView from './view/pages/shared/header/header-view';
import FooterView from './view/pages/shared/footer/footer-view';
import IndexView from './view/pages/index/index-view';
import DetailView from './view/pages/detail/detail-view';
import AboutView from './view/pages/about/about-view';
import MainView from './view/pages/main-view';

const Pages = {
    INDEX: 'Главная',
    DETAIL: 'Карточки',
    ABOUT: 'О нас',
};

/**
 * @typedef {{ name: string, callback: function }} Page
 */

export default class App {
    constructor() {
        this.createView();
    }

    createView() {
        const main = new MainView();
        const index = new IndexView();
        const detail = new DetailView(main);
        const about = new AboutView();

        /**
         * @type {Array<Page>}
         */
        const pages = [
            {
                name: Pages.INDEX,
                callback: main.setContent.bind(main, index),
            },
            {
                name: Pages.DETAIL,
                callback: main.setContent.bind(main, detail),
            },
            {
                name: Pages.ABOUT,
                callback: main.setContent.bind(main, about),
            },
        ];
        const header = new HeaderView(pages);
        const footer = new FooterView();

        main.setContent(index);
        header.setSelectedItem(pages[0].name);

        document.body.append(header.getComponent(), main.getComponent(), footer.getComponent());
    }
}
