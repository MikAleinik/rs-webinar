import './card.css';
import * as Pet from '../../../utils/is-valid-pet';
import { createElement } from '../../../utils/create-element';
import { createImage } from '../image/create-image';

const CssClasses = {
    CARD: 'card',
    ITEM: 'card__item',
    IMAGE: 'item__image',
    HEADER: 'item__header',
    BUTTON: 'card__button',
};
const TEXT_BUTTON = 'More info';
const TEXT_ALT_IMAGE = 'Photo';

/**
 * @typedef {{
 * card: HTMLElement;
 * image: HTMLImageElement;
 * name: HTMLElement;
 * updateImage({ src, alt }: {src: string; alt: string;}): void;
 * updateName({ textContent }: { textContent: string;}): void;
 * }} ICardState
 */

/**
 * @param {import('../../pagination/components/showcase/showcase').IPet} pet
 * @returns {ICardState}
 */
function createComponent(pet) {
    if (!Pet.isValidPet(pet)) {
        return null;
    }
    const component = createElement({
        tagName: 'li',
        className: CssClasses.CARD,
    });
    const info = createElement({
        tagName: 'figure',
        className: CssClasses.ITEM,
    });
    const image = createImage({
        src: pet.img,
        alt: TEXT_ALT_IMAGE,
        className: CssClasses.IMAGE,
    });
    const name = createElement({
        tagName: 'figcaption',
        className: CssClasses.HEADER,
        textContent: pet.name,
    });
    const button = createElement({
        tagName: 'button',
        className: CssClasses.BUTTON,
        textContent: TEXT_BUTTON,
    });

    const cardState = {
        card: component,
        image,
        name,
        updateImage({ src, alt }) {
            this.image.src = src;
            this.image.alt = alt;
        },
        updateName({ textContent }) {
            this.name.textContent = textContent;
        },
    };

    info.append(image, name);
    component.append(info, button);

    return cardState;
}

export { createComponent };
