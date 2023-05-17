import ElementBuilder from './builders/element/element-builder';
import InputFieldBuilder from './builders/input-field/input-field-builder';

const HeaderCssClasses = {
    HEADER: 'header',
    NAV: 'nav',
    ITEM: 'nav-item',
};
const MainCssClasses = {
    MAIN: 'main',
    INDEX: 'index',
    DETAIL: 'detail',
    ABOUT: 'about',
};
const FooterCssClasses = {
    FOOTER: 'footer',
};
const CardCssClasses = {
    CONTAINER: 'card',
    CONTAINER_FULL: 'card__full',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};

const CARD_TEXT_MORE = 'Подробнее...';
const CARD_TEXT_BACK = 'Назад...';
const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 2';
const FIELD_TEXT_THREE = 'Поле для ввода 3';
const FIELD_TEXT_FOUR = 'Поле для ввода 4';

/**
 * Класс создателя HTML элементов.
 * В нем сосредоточена логика создания HTML элементов, т.е. объект данного класса знает каких
 * строителей и в какой последовательности использовать для создания определенного HTML элемента.
 * При этом, при необходимости, объекты строителей возможно использовать и вне данного класса
 * непосредственно в объектах представления (View).
 * Комбинация использования объектов класса создатель и объектов классов строителей является одной
 * из реализаций паттерна "Строитель" ("Builder").
 */
export default class ViewCreator {
    /**
     * @param {Array<HTMLElement>} linkItems
     * @returns {HTMLElement}
     */
    createHeader(linkItems) {
        const builder = new ElementBuilder('header');

        const navBuilder = new ElementBuilder('nav');
        navBuilder.setCssClasses([HeaderCssClasses.NAV]);

        linkItems.forEach((item) => navBuilder.addInnerElement(item));

        builder.setCssClasses([HeaderCssClasses.HEADER]).addInnerElement(navBuilder);
        return builder.getElement();
    }

    /**
     * @param {import('../../app').Page} page
     * @returns {HTMLElement}
     */
    createLinkButton(page) {
        const builder = new ElementBuilder('a');
        builder.setCssClasses([HeaderCssClasses.ITEM]).setTextContent(page.name).setClickCallback(page.callback);
        return builder.getElement();
    }

    /**
     * @param {string} text
     * @returns {HTMLElement}
     */
    createFooter(text) {
        const builder = new ElementBuilder('footer');
        builder.setCssClasses([FooterCssClasses.FOOTER]).setTextContent(text);
        return builder.getElement();
    }

    /**
     * @returns {HTMLElement}
     */
    createMain() {
        const builder = new ElementBuilder('main');
        builder.setCssClasses([MainCssClasses.MAIN]);
        return builder.getElement();
    }

    /**
     * @returns {HTMLElement}
     */
    createIndexPage() {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([MainCssClasses.INDEX]);

        const inputFieldBuilder = new InputFieldBuilder();
        inputFieldBuilder.setTextContent(FIELD_TEXT_ONE);
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder.reset().setTextContent(FIELD_TEXT_TWO);
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder.reset().setTextContent(FIELD_TEXT_THREE).setCheckboxMode();
        builder.addInnerElement(inputFieldBuilder);

        inputFieldBuilder.reset().setTextContent(FIELD_TEXT_FOUR).setCheckboxMode();
        builder.addInnerElement(inputFieldBuilder);

        return builder.getElement();
    }

    /**
     * @returns {HTMLElement}
     */
    createDetailPage() {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([MainCssClasses.DETAIL]);
        return builder.getElement();
    }

    /**
     * @returns {HTMLElement}
     */
    createAboutPage() {
        const builder = new ElementBuilder('section');
        builder.setCssClasses([MainCssClasses.ABOUT]).setTextContent('Страница для показа отложенной загрузки.');
        return builder.getElement();
    }

    /**
     * @param {import('../components/card/card-view').Card} params
     * @param {function} callback
     * @returns {HTMLElement}
     */
    createSmallCard(params, callback) {
        const builder = new ElementBuilder('article');
        builder.setCssClasses([CardCssClasses.CONTAINER]);

        const labelBuilder = new ElementBuilder('label');
        labelBuilder.setTextContent(params.name).setCssClasses([CardCssClasses.FIELD]);
        builder.addInnerElement(labelBuilder);

        const buttonBuilder = new ElementBuilder('button');
        buttonBuilder.setTextContent(CARD_TEXT_MORE).setCssClasses([CardCssClasses.BUTTON]).setClickCallback(callback);
        builder.addInnerElement(buttonBuilder);

        return builder.getElement();
    }

    /**
     * @param {import('../components/card/card-view').Card} params
     * @param {function} callback
     * @returns {HTMLElement}
     */
    createFullCard(params, callback) {
        const builder = new ElementBuilder('article');
        builder.setCssClasses([CardCssClasses.CONTAINER, CardCssClasses.CONTAINER_FULL]);

        const labelBuilder = new ElementBuilder('label');
        labelBuilder.setTextContent(params.name).setCssClasses([CardCssClasses.FIELD]);
        builder.addInnerElement(labelBuilder);

        labelBuilder.reset().setTextContent(params.description).setCssClasses([CardCssClasses.FIELD]);
        builder.addInnerElement(labelBuilder);

        const buttonBuilder = new ElementBuilder('button');
        buttonBuilder.setTextContent(CARD_TEXT_BACK).setCssClasses([CardCssClasses.BUTTON]).setClickCallback(callback);
        builder.addInnerElement(buttonBuilder);

        return builder.getElement();
    }
}
