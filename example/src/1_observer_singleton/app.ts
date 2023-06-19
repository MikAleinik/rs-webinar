import './style.css';
import CabinetFormView from './view/cabinet-form/cabinet-form-view';
import CustomFormView from './view/custom-form/custom-form-view';
import HeaderView from './view/header/header-view';
import FormHtmlCreator from './view/util/form-element-creator';

export default class AppObserver {
    private readonly TEXT_NAME_COMPONENT = 'Какой-то компонент';
    private readonly BUTTON_TEXT = 'Создать форму';

    constructor() {
        this.createView();
    }

    createView() {
        const headerView = new HeaderView();
        const cabinetFormView = new CabinetFormView();

        const formCreator = new FormHtmlCreator();
        const buttonForm = formCreator.getButtonForm(this.TEXT_NAME_COMPONENT, this.BUTTON_TEXT);

        document.body.append(
            headerView.getHtmlElement() || '',
            cabinetFormView.getHtmlElement() || '',
            buttonForm.resultHtmlElement
        );

        if (buttonForm.buttonHtmlElement) {
            buttonForm.buttonHtmlElement.addEventListener('click', () => {
                event?.preventDefault();
                const customFormView = new CustomFormView();
                document.body.append(customFormView.getHtmlElement() || '');
            });
        }
    }
}
