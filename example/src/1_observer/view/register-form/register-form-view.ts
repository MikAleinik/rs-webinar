import DefaultFormView from '../default-form-view';
import HtmlElementCreator from '../util/html-element-creator';

export default class RegisterFormView extends DefaultFormView {
    private readonly TEXT_NAME_FIELD = 'Введите имя';
    private readonly TEXT_FAMILY_FIELD = 'Введите фамилию';

    constructor() {
        super();
        this.configureView();
    }

    private fieldChangedHandler(event: Event) {
        if (event.target instanceof HTMLInputElement) {
            console.log(event.target.value);
        }
    }
    private configureView() {
        const creator = new HtmlElementCreator();
        const nameField = creator.getInputFieldElement(this.TEXT_NAME_FIELD, this.fieldChangedHandler.bind(this));
        this.htmlElement.append(nameField);
        const familyField = creator.getInputFieldElement(this.TEXT_FAMILY_FIELD, this.fieldChangedHandler.bind(this));
        this.htmlElement.append(familyField);
    }
}
