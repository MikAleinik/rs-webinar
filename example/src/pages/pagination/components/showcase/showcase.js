import './showcase.css';
import * as Card from '../../../shared/card/card';
import * as Counter from '../counter/counter';

const CssClasses = {
    CONTAINER: 'pagination',
    SHOWCASE: 'showcase',
}
const COUNT_PAGE = 6;

let showcaseElement = null;
let cardComponents = new Array();

let petsPage = new Array();

function showPage(number) {
    showcaseElement.style.opacity = '0';

    for (let i = 0; i < cardComponents.length; i += 1) {
        Card.changeComponent(cardComponents[i], petsPage[number - 1][i]);
    }

    showcaseElement.style.opacity = '1';
}
function createComponent(petsJSON) {
    const component = document.createElement('section');
    component.classList.add(CssClasses.CONTAINER);

    showcaseElement = document.createElement('ul');
    showcaseElement.classList.add(CssClasses.SHOWCASE);

    petsPage.push(petsJSON);
    for (let i = 1; i < COUNT_PAGE; i += 1) {
        const newPetsPage = createRandomPets(petsPage[i - 1].reverse());
        petsPage.push(newPetsPage);
    }
    petsPage[0].forEach((pet) => {
        const cardComponent = Card.createComponent(pet);
        showcaseElement.append(cardComponent);
        cardComponents.push(cardComponent);
    });

    const counterComponent = Counter.createComponent(6);
    component.append(showcaseElement, counterComponent);

    return component;
}
function createRandomPets(pets) {
    let petsSource = new Array(...pets);
    let petsResult = new Array();

    while (petsSource.length > 0) {
        const index = getRandomNumber(0, petsSource.length - 1);
        const pet = petsSource.splice(index, 1);
        petsResult.push(...pet);
    }

    return petsResult;
}
function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};
export { createComponent, showPage };
