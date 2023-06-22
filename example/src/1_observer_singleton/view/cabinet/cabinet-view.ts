import DataStorage from '../../data-storage/data-storage';
import { StorageItemNames } from '../../enums/storage-item-names';
import DefaultView from '../default-view/default-view';
import FormHtmlCreator from '../util/form-element-creator';

export default class CabinetView extends DefaultView {
    private readonly TEXT_NAME_COMPONENT = 'Личный кабинет';
    private readonly TEXT_LOGIN_FIELD = 'Логин пользователя';

    private storage = DataStorage.getInstance();
    private loginInputElement: HTMLInputElement;

    constructor() {
        super();

        const resultCreateView = this.createView();
        this.htmlElement = resultCreateView.resultHtmlElement;
        this.loginInputElement = resultCreateView.adjustableHtmlElements[0];
        this.loginInputElement.addEventListener(
            'keyup',
            this.fieldChangedHandler.bind(this, StorageItemNames.USER_LOGIN)
        );

        this.storage.subscribe(StorageItemNames.USER_LOGIN, this.loginStorageChangedHandler.bind(this));
    }

    private loginStorageChangedHandler(login: string) {
        this.loginInputElement.value = login;
    }
    private fieldChangedHandler(nameField: StorageItemNames) {
        if (event && event.target instanceof HTMLInputElement) {
            this.storage.setValue(nameField, event.target.value);
        }
    }
    private createView() {
        const formCreator = new FormHtmlCreator();
        return formCreator.getInputForm(this.TEXT_NAME_COMPONENT, [this.TEXT_LOGIN_FIELD]);
    }
}
