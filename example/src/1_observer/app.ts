import './style.css';
import CabinetView from './view/cabinet/cabinet-view';
import CustomView from './view/custom/custom-view';
import HeaderView from './view/header/header-view';
/**
 * В классах CustomView, CabinetView и HeaderView реализована логика паттерна Наблюдатель/Observer
 * Из плюсов:
 * - происходит обмен данными между объектами разнородных классов;
 * Из минусов:
 * - в классах вынужденно присутствуют методы, которые не характерны для их прямого назначения;
 * - при необходимости наблюдать за различными событиями в методе update(value) возникает необходимость
 * распознавания какие данные и от какого издателя это получено;
 * - при множестве зависимостей для наблюдения логика подписки на событие будет усложняться;
 * - возникает прямая связь между классами и при изменении/удалении будет требоваться исправления не
 * только в классе, но и в местах их взаимосвязи;
 * - при создании компонента с определенной задержкой усложняется логика получения уже существующих данных
 * из других компонентов для общей целостности данных;
 */
export default class AppObserver {
    private readonly TIME_ADD_NEW_FORM = 5000;

    constructor() {
        this.createView();
    }

    private createView() {
        const cabinetFormView = new CabinetView();
        const customFormView = new CustomView();

        cabinetFormView.subscribe(customFormView);
        customFormView.subscribe(cabinetFormView);

        document.body.append(cabinetFormView.getHtmlElement() || '', customFormView.getHtmlElement() || '');

        setTimeout(() => {
            const headerView = new HeaderView();

            cabinetFormView.subscribe(headerView);
            customFormView.subscribe(headerView);

            document.body.append(headerView.getHtmlElement() || '');
        }, this.TIME_ADD_NEW_FORM);
    }
}
