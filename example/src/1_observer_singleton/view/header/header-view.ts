import DataStorage from '../../data-storage/data-storage';
import { StorageItemName } from '../../data-storage/enums/storage-item-name';
import DefaultFormView from '../default-form-view/default-form-view';
import FormHtmlCreator from '../util/form-element-creator';

export default class HeaderView extends DefaultFormView {
    private readonly TEXT_NAME_COMPONENT = 'Шапка приложения';
    private readonly TEXT_LOGIN_FIELD = 'Логин пользователя';

    private storage = DataStorage.getInstance();
    private loginLabelElement: HTMLLabelElement | null = null;

    constructor() {
        super();

        const resultCreateView = this.createView();
        this.htmlElement = resultCreateView.resultHtmlElement;
        if (resultCreateView.labelHtmlElements) {
            this.loginLabelElement = resultCreateView.labelHtmlElements[0];
        }

        this.storage.subscribe(StorageItemName.USER_LOGIN, this.loginStorageChangedHandler.bind(this));
    }

    private loginStorageChangedHandler<T>(login: T) {
        if (this.loginLabelElement && typeof login === 'string') {
            this.loginLabelElement.textContent = login;
        }
    }
    private createView() {
        const formCreator = new FormHtmlCreator();
        return formCreator.getTextForm(this.TEXT_NAME_COMPONENT, [this.TEXT_LOGIN_FIELD]);
    }
}
