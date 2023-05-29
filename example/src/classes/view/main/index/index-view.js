import './index.css';
import View from '../../view';
import InputFieldCreator from '../../../util/input-field/input-field-creator';

const CssClasses = {
    INDEX: 'index',
};
const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 2';

export default class IndexView extends View {
    constructor() {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.INDEX],
        };
        super(params);
        this.configureView();

        this.firstInput = '';
        this.secondInput = '';
    }

    configureView() {
        /**
         * @type {import('../../../util/element-creator').ElementParams}
         */
        let inputParams = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT_ONE,
            callback: (event) => this.keyupHandler(event, `firstInput`),
        };
        let creatorInput = new InputFieldCreator(inputParams);
        this.viewElementCreator.addInnerElement(creatorInput);

        /**
         * @type {import('../../../util/element-creator').ElementParams}
         */
        inputParams = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT_TWO,
            callback: (event) => this.keyupHandler(event, `secondInput`),
        };
        creatorInput = new InputFieldCreator(inputParams);
        this.viewElementCreator.addInnerElement(creatorInput);
    }

    /**
     * @param {KeyboardEvent} event
     * @param {string} fieldName
     */
    keyupHandler(event, fieldName) {
        if (event.target instanceof HTMLInputElement) {
            this[fieldName] = event.target.value;
        }
    }
}
