import './footer.css';
import ViewCreator from '../../../util/view-creator';
import View from '../../../view';

const TEXT = 'SPA example app';

export default class FooterView extends View {
    constructor() {
        super();
        this.component = this.createView();
    }

    createView() {
        const creator = new ViewCreator();
        return creator.createFooter(TEXT);
    }
}
