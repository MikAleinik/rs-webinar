import DataStorage from '../../data-storage/data-storage';
import { StorageItemName } from '../../data-storage/enums/storage-item-name';
import DefaultFormView from '../default-form-view';
import HtmlElementCreator from '../util/html-element-creator';

export default class CustomFormView extends DefaultFormView {
    private readonly TEXT_NAME_COMPONENT = 'Еще какой-то компонент';
    private readonly TEXT_EMAIL_FIELD = 'Почта пользователя';

    private storage = DataStorage.getInstance();
    private emailInputElement: HTMLInputElement | null = null;

    constructor() {
        super();
        this.configureView();

        this.storage.subscribe(StorageItemName.USER_EMAIL, this.emailStorageChangedHandler.bind(this));
    }

    private emailStorageChangedHandler<T1>(email: T1) {
        if (this.emailInputElement !== null && typeof email === 'string') {
            this.emailInputElement.value = email;
        }
    }
    private fieldChangedHandler(nameField: StorageItemName) {
        if (event && event.target instanceof HTMLInputElement) {
            this.storage.setValue(nameField, event.target.value);
        }
    }
    private configureView() {
        const creator = new HtmlElementCreator();
        const formHeader = creator.getFieldsetElement(this.TEXT_NAME_COMPONENT);

        const emailField = creator.getInputFieldElement(
            this.TEXT_EMAIL_FIELD,
            this.fieldChangedHandler.bind(this, StorageItemName.USER_EMAIL)
        );
        formHeader.append(emailField.resultHtmlElement);

        this.htmlElement.append(formHeader);

        this.emailInputElement = emailField.adjustableHtmlElement;
    }
}
