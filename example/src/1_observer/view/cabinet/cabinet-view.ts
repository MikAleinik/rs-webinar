import { IObserver } from '../../interfaces/observer';
import ISubject from '../../interfaces/subject';
import DefaultView from '../default-view/default-view';
import FormHtmlCreator from '../util/form-element-creator';
/**
 * Данный класс является наблюдателем за "событиями" и реализовывает интерфейс IObserver.
 * Под "событием" понимается изменение определенных данных в том, классе за которым наблюдаем и
 * оповещение, с передачей обновленных данных, через метод update() в объекты классов наблюдателей.
 */
/**
 * Данный класс является издателем (источником возникновения "события") и реализовывает интерфейс ISubject.
 * При изменении данных (возникновении "события") в методе notify() у каждого наблюдателя вызывается
 * метод обновления update(value) и передаются обновленные данные.
 */
export default class CabinetView extends DefaultView implements IObserver, ISubject {
    private readonly TEXT_NAME_COMPONENT = 'Личный кабинет';
    private readonly TEXT_LOGIN_FIELD = 'Логин пользователя';

    private loginInputElement: HTMLInputElement;
    private observers = new Array<IObserver>();

    constructor() {
        super();

        const resultCreateView = this.createView();
        this.htmlElement = resultCreateView.resultHtmlElement;
        this.loginInputElement = resultCreateView.adjustableHtmlElements[0];

        this.loginInputElement.addEventListener('keyup', this.notify.bind(this));
    }

    update(value: string): void {
        this.loginInputElement.value = value;
    }
    subscribe(observer: IObserver): void {
        this.observers.push(observer);
    }
    unsubscribe(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notify(): void {
        this.observers.forEach((observer) => observer.update(this.loginInputElement.value));
    }

    private createView() {
        const formCreator = new FormHtmlCreator();
        return formCreator.getInputForm(this.TEXT_NAME_COMPONENT, [this.TEXT_LOGIN_FIELD]);
    }
}
