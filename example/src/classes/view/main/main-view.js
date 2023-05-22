import ElementBuilder from '../../util/element/element-builder';
import View from '../view';

const CssClasses = {
    MAIN: 'main',
};

export default class MainView extends View {
    constructor() {
        super();
        this.htmlElement = this.createView();
    }

    /**
     * В данном методе входящим параметром является любой объект унаследованный от класса View, т.к. для
     * использования объекта требуется метод getHtmlElement() этого класса. Это демонстрирует один из принципов
     * SOLID (буква L - Liskov Substitution Principle) - когда мы можем вместо объекта родительского класса
     * подставить объект дочернего класса без внесения каких-либо исправлений и приложение будет работать.
     * @param {View} content
     */
    setContent(content) {
        while (this.htmlElement.firstElementChild) {
            this.htmlElement.firstElementChild.remove();
        }
        this.htmlElement.append(content.getHtmlElement());
    }

    createView() {
        const builder = new ElementBuilder('main');
        builder.setCssClasses([CssClasses.MAIN]);
        return builder.getElement();
    }
}
