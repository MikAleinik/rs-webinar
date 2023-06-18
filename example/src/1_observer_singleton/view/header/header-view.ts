import DataStorage from '../../data-storage/data-storage';
import { StorageItemName } from '../../data-storage/enums/storage-item-name';
import DefaultFormView from '../default-form-view';
import HtmlElementCreator from '../util/html-element-creator';

export default class HeaderView extends DefaultFormView {
    private readonly TEXT_NAME_COMPONENT = 'Шапка приложения';
    private readonly TEXT_CURRENT_USER = 'Авторизованный пользователь:';

    private storage = DataStorage.getInstance();
    private loginLabelElement: HTMLLabelElement | null = null;

    constructor() {
        super();
        this.configureView();

        this.storage.subscribe(StorageItemName.USER_LOGIN, this.loginStorageChangedHandler.bind(this));
    }

    private loginStorageChangedHandler<T1>(login: T1) {
        if (this.loginLabelElement !== null && typeof login === 'string') {
            this.loginLabelElement.textContent = login;
        }
    }
    private configureView() {
        const creator = new HtmlElementCreator();
        const formHeader = creator.getFieldsetElement(this.TEXT_NAME_COMPONENT);

        const userNameField = creator.getTextFieldElement(this.TEXT_CURRENT_USER);
        formHeader.append(userNameField.resultHtmlElement);

        this.htmlElement.append(formHeader);

        this.loginLabelElement = userNameField.adjustableHtmlElement;
    }
}
