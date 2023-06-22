import { IObserver } from '../../interfaces/observer';
import DefaultView from '../default-view/default-view';
import FormHtmlCreator from '../util/form-element-creator';
/**
 * Данный класс является наблюдателем за "событиями" и реализовывает интерфейс IObserver.
 * Под "событием" понимается изменение определенных данных в том, классе за которым наблюдаем и
 * оповещение, с передачей обновленных данных, через метод update() в объекты классов наблюдателей.
 */
export default class HeaderView extends DefaultView implements IObserver {
    private readonly TEXT_NAME_COMPONENT = 'Шапка приложения';
    private readonly TEXT_LOGIN_FIELD = 'Логин пользователя';

    private loginLabelElement: HTMLLabelElement;

    constructor() {
        super();

        const resultCreateView = this.createView();
        this.htmlElement = resultCreateView.resultHtmlElement;
        this.loginLabelElement = resultCreateView.adjustableHtmlElements[0];
    }

    update(value: string): void {
        this.loginLabelElement.textContent = value;
    }

    private createView() {
        const formCreator = new FormHtmlCreator();
        return formCreator.getTextForm(this.TEXT_NAME_COMPONENT, [this.TEXT_LOGIN_FIELD]);
    }
}
