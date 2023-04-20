import './showcase.css';
import * as Card from '../../../shared/card/card';
import { createElement } from '../../../../utils/create-element';
import { getRandomNumber } from '../../../../utils/get-random-number';

const CssClasses = {
    SHOWCASE: 'showcase',
};
export const PAGES_COUNT = 6;

/**
 * Pet
 * @typedef {{ name: string; img: string; type: string; breed: string; description: string; age: string; inoculations: string[]; diseases: string[]; parasites: string[]; }} IPet
 */

const paginationState = {
    /**
     * Need to explain the purpose of X here.
     * @type {import('../../../shared/card/card').ICardState[]}
     */
    currentPageCards: [],
    /**
     * Need to explain the purpose of X here.
     * @type {IPet[][]}
     */
    petsData: [],
    /**
     * @param {Card.ICardState} card
     */
    addCurrentPageCard(card) {
        this.currentPageCards.push(card);
    },
    getCurrentPageCards() {
        return this.currentPageCards;
    },
    /**
     * @param {IPet[][]} petsData
     */
    updatePetsData(petsData) {
        this.petsData = petsData;
    },
    /**
     * @param {number} number
     */
    showPage(number) {
        this.currentPageCards.forEach((card, i) => {
            const { img, name } = this.petsData[number - 1][i];
            card.updateImage({ src: img, alt: name });
            card.updateName({ textContent: name });
        });
    },
};

/**
 * @param {number} page
 */
function showPage(page) {
    return paginationState.showPage.call(paginationState, page);
}

/**
 * @param {IPet[]} pets
 */
function createComponent(pets) {
    if (!Array.isArray(pets)) {
        throw TypeError(`Pagination error. Pets array is invalid.`);
    }

    const showcaseElement = createElement({
        tagName: 'ul',
        className: CssClasses.SHOWCASE,
    });

    paginationState.updatePetsData(getPetsData(pets));

    pets.map((pet) => Card.createComponent(pet)).forEach((cardComponent) => {
        paginationState.addCurrentPageCard(cardComponent);
    });
    showcaseElement.append(...paginationState.getCurrentPageCards().map((card) => card.card));

    return showcaseElement;
}

/**
 * @param {IPet[]} initialPets
 */
function getPetsData(initialPets) {
    const petsData = [initialPets];

    for (let i = 0; i < PAGES_COUNT; i += 1) {
        const newPetsPage = createRandomPets(petsData[i].reverse());
        petsData.push(newPetsPage);
    }
    return petsData;
}

/**
 * @param {IPet[]} pets
 */
function createRandomPets(pets) {
    const petsSource = [...pets];
    const petsResult = [];

    while (petsSource.length > 0) {
        const index = getRandomNumber(0, petsSource.length - 1);
        const pet = petsSource.splice(index, 1);
        petsResult.push(...pet);
    }

    return petsResult;
}

export { createComponent, showPage };
