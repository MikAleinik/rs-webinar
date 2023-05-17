import HeaderView from './view/pages/shared/header/header-view';
import './style.css';
import FooterView from './view/pages/shared/footer/footer-view';
import IndexView from './view/pages/index/index-view';
import DetailView from './view/pages/detail/detail-view';
import AboutView from './view/pages/about/about-view';
import MainView from './view/pages/main-view';

export default class App {
    constructor() {
        this.createView();
    }

    createView() {
        const main = new MainView();
        const index = new IndexView();
        const detail = new DetailView(main);
        const about = new AboutView();

        const pages = [
            {
                path: 'index',
                callback: main.setContent.bind(main, index),
            },
            {
                path: 'detail',
                callback: main.setContent.bind(main, detail),
            },
            {
                path: 'about',
                callback: main.setContent.bind(main, about),
            },
        ];
        const header = new HeaderView(pages);
        const footer = new FooterView();

        main.setContent(index);
        header.setSelectedItem(pages[0].path);

        document.body.append(header.getComponent(), main.getComponent(), footer.getComponent());
    }
}
