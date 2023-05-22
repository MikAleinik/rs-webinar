import '../style.css';
import HeaderView from './view/header/header-view';
import FooterView from './view/footer/footer-view';
import MainView from './view/main/main-view';

export default class App {
    constructor() {
        this.createView();
    }

    createView() {
        const main = new MainView();
        const header = new HeaderView(main);
        const footer = new FooterView();

        document.body.append(header.getHtmlElement(), main.getHtmlElement(), footer.getHtmlElement());
    }
}
