import './card.css';
import * as Pet from '../pet/pet';

const CssClasses = {
    CARD: 'card',
    ITEM: 'card__item',
    IMAGE: 'item__image',
    HEADER: 'item__header',
    BUTTON: 'card__button',
}
const TEXT_BUTTON = 'More info';
const TEXT_ALT_IMAGE = 'Foto';

function createComponent(pet) {
    Pet.validatePet(pet);

    const component = document.createElement('li');
    component.classList.add(CssClasses.CARD);

    const info = document.createElement('figure');
    info.classList.add(CssClasses.ITEM);
    const image = document.createElement('img');
    image.classList.add(CssClasses.IMAGE);
    image.src = pet.img;
    image.alt = TEXT_ALT_IMAGE;
    const name = document.createElement('figcaption');
    name.classList.add(CssClasses.HEADER);
    name.textContent = pet.name;

    info.append(image, name);

    const button = document.createElement('button');
    button.classList.add(CssClasses.BUTTON);
    button.textContent = TEXT_BUTTON;

    component.append(info, button);

    return component;
}
function changeComponent(card, pet) {
    const cardInfo = card.firstElementChild;
    cardInfo.firstElementChild.src = pet.img;
    cardInfo.lastElementChild.textContent = pet.name;
}

export { createComponent, changeComponent };