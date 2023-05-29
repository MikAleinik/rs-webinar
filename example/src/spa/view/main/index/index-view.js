import './index.css';
import InputFieldCreator from '../../../util/input-field/input-field-creator';
import View from '../../view';

const CssClasses = {
    INDEX: 'index',
};
const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 2';

export default class IndexView extends View {
    /**
     * @param {import('../../../state/state').default} state
     */
    constructor(state) {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.INDEX],
        };
        super(params);
        this.state = state;
        this.configureView(state);
    }

    /**
     * @param {import('../../../state/state').default} state
     */
    configureView(state) {
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
        creatorInput.setValue(state.getField(FIELD_TEXT_ONE));
        this.viewElementCreator.addInnerElement(creatorInput);

        inputParams = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT_TWO,
            callback: (event) => this.keyupHandler(event, `secondInput`),
        };
        creatorInput = new InputFieldCreator(inputParams);
        creatorInput.setValue(state.getField(FIELD_TEXT_ONE));
        this.viewElementCreator.addInnerElement(creatorInput);
    }

    /**
     * @param {KeyboardEvent} event
     * @param {string} fieldName
     */
    keyupHandler(event, fieldName) {
        if (event.target instanceof HTMLInputElement) {
            this.state.setField(fieldName, event.target.value);
        }
    }
}
