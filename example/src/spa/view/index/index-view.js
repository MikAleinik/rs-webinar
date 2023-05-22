import './index.css';
import View from '../../../classes/view/view';
import ElementBuilder from '../../../classes/util/element/element-builder';
import InputFieldBuilder from '../../../classes/util/input-field/input-field-builder';
// eslint-disable-next-line no-unused-vars
import State from '../../state/state';

const CssClasses = {
    INDEX: 'index',
};
const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 2';
const FIELD_TEXT_THREE = 'Поле для ввода 3';
const FIELD_TEXT_FOUR = 'Поле для ввода 4';

export default class IndexView extends View {
    /**
     * @param {State} state
     */
    constructor(state) {
        super();
        this.state = state;
        this.htmlElement = this.createView(state);
    }

    /**
     * @param {State} state
     */
    createView(state) {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([CssClasses.INDEX]);

        const inputFieldBuilder = new InputFieldBuilder();
        inputFieldBuilder
            .setTextContent(FIELD_TEXT_ONE)
            .setKeyUpCallback(this.firstFieldKeyupHandler.bind(this))
            .setValue(state.getField(FIELD_TEXT_ONE));
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder
            .reset()
            .setTextContent(FIELD_TEXT_TWO)
            .setKeyUpCallback(this.secondFieldKeyupHandler.bind(this))
            .setValue(state.getField(FIELD_TEXT_TWO));
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder
            .reset()
            .setValue(state.getField(FIELD_TEXT_THREE))
            .setTextContent(FIELD_TEXT_THREE)
            .setClickCallback(this.threeFieldKeyupHandler.bind(this));
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder
            .reset()
            .setValue(state.getField(FIELD_TEXT_FOUR))
            .setTextContent(FIELD_TEXT_FOUR)
            .setClickCallback(this.fourFieldKeyupHandler.bind(this));
        builder.addInnerElement(inputFieldBuilder);

        return builder.getElement();
    }

    /**
     * @param {KeyboardEvent} event
     */
    firstFieldKeyupHandler(event) {
        if (event.target instanceof HTMLInputElement) {
            this.state.setField(FIELD_TEXT_ONE, event.target.value);
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    secondFieldKeyupHandler(event) {
        if (event.target instanceof HTMLInputElement) {
            this.state.setField(FIELD_TEXT_TWO, event.target.value);
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    threeFieldKeyupHandler(event) {
        if (event.target instanceof HTMLInputElement) {
            this.state.setField(FIELD_TEXT_THREE, event.target.value);
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    fourFieldKeyupHandler(event) {
        if (event.target instanceof HTMLInputElement) {
            this.state.setField(FIELD_TEXT_FOUR, event.target.value);
        }
    }
}
