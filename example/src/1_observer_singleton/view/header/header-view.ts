import DataStorage from '../../data-storage/data-storage';
import { StorageItemNames } from '../../enums/storage-item-names';
import DefaultView from '../default-view/default-view';
import FormHtmlCreator from '../util/form-element-creator';

export default class HeaderView extends DefaultView {
    private readonly TEXT_NAME_COMPONENT = 'Шапка приложения';
    private readonly TEXT_LOGIN_FIELD = 'Логин пользователя';

    private storage = DataStorage.getInstance();
    private loginLabelElement: HTMLLabelElement;

    constructor() {
        super();

        const resultCreateView = this.createView();
        this.htmlElement = resultCreateView.resultHtmlElement;
        this.loginLabelElement = resultCreateView.adjustableHtmlElements[0];

        this.storage.subscribe(StorageItemNames.USER_LOGIN, this.loginStorageChangedHandler.bind(this));
    }

    private loginStorageChangedHandler(login: string) {
        this.loginLabelElement.textContent = login;
    }
    private createView() {
        const formCreator = new FormHtmlCreator();
        return formCreator.getTextForm(this.TEXT_NAME_COMPONENT, [this.TEXT_LOGIN_FIELD]);
    }
}
