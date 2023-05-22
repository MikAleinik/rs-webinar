import './index.css';
import View from '../view';
import ElementBuilder from '../../util/element/element-builder';
import InputFieldBuilder from '../../util/input-field/input-field-builder';

const CssClasses = {
    INDEX: 'index',
};
const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 2';
const FIELD_TEXT_THREE = 'Поле для ввода 3';
const FIELD_TEXT_FOUR = 'Поле для ввода 4';

export default class IndexView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();

        this.firstInput = '';
        this.secondInput = '';
        this.threeInput = '';
        this.fourInput = '';
    }

    createView() {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([CssClasses.INDEX]);

        const inputFieldBuilder = new InputFieldBuilder();
        inputFieldBuilder
            .reset()
            .setTextContent(FIELD_TEXT_ONE)
            .setKeyUpCallback(this.firstFieldKeyupHandler.bind(this));
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder
            .reset()
            .setTextContent(FIELD_TEXT_TWO)
            .setKeyUpCallback(this.secondFieldKeyupHandler.bind(this));
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder
            .reset()
            .setTextContent(FIELD_TEXT_THREE)
            .setClickCallback(this.threeFieldKeyupHandler.bind(this));
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder
            .reset()
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
            this.firstInput = event.target.value;
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    secondFieldKeyupHandler(event) {
        if (event.target instanceof HTMLInputElement) {
            this.secondInput = event.target.value;
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    threeFieldKeyupHandler(event) {
        if (event.target instanceof HTMLInputElement) {
            this.threeInput = event.target.value;
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    fourFieldKeyupHandler(event) {
        if (event.target instanceof HTMLInputElement) {
            this.fourInput = event.target.value;
        }
    }
}
