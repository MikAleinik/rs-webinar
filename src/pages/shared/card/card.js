import './card.css';
import Animal from '../animal/animal';
/**
 * Компонент карточки.
 * @param {Animal} params параметры для инициализации
 * @throws {TypeError} ошибка при не верных входных параметрах
 */
function Card(params) {
    if (!(params instanceof Animal)) {
        throw TypeError(`Card create error. Incoming parameters are not correct.`);
    }

    const CssClasses = {
        CARD: 'card',
        ITEM: 'card__item',
        IMAGE: 'item__image',
        HEADER: 'item__header',
        BUTTON: 'card__button',
    }
    const TEXT_BUTTON = 'More info';
    const TEXT_ALT_IMAGE = 'Foto';

    let _params = params;
    let _component = document.createElement('li');

    this.getComponent = function() {
        return _component;
    }

    let createComponent = function() {
        _component.classList.add(CssClasses.CARD);

        const info = document.createElement('figure');
        const image = document.createElement('img');
        image.classList.add(CssClasses.IMAGE);
        image.src = '';
        image.alt = TEXT_ALT_IMAGE;
        const name = document.createElement('figcaption');
        name.textContent = '123';

        info.append(image, name);

        const button = document.createElement('button');
        button.classList.add(CssClasses.BUTTON);
        button.textContent = TEXT_BUTTON;

        _component.append(info, button);
    }()
}

export default Card;