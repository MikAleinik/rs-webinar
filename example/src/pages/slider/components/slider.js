import './slider.css';
import * as Card from '../../shared/card/card';

const CssClasses = {
	SLIDER: 'slider',
	BUTTON: 'round__button',
	WRAPPER: 'slider__wrapper',
	CARD_CONTAINER: 'card__container',
	CARD_GROUP: 'card__group',
    ANIMATE_LEFT: 'animate__left',
    ANIMATE_RIGHT: 'animate__right',
    NO_TRANSITION: 'container__no-transition',
}

const TEXT_BUTTON_LEFT = '<';
const TEXT_BUTTON_RIGHT = '>';
const COUNT_CARD = 3;
const COUNT_CARD_BLOCK = 3;
const INDEX_VISIBLE_GROUP = 2;

let cardContainer = null;
let buttonLeft = null;
let buttonRight = null;
let cards = new Array();
let visibleCards = new Array();
let deltaOrder = 0;
let isRightClick = false;
let isLeftClick = false;

function createComponent(petsJSON) {
    if (!Array.isArray(petsJSON)) {
        throw TypeError(`Slider error. Pets array is invalid.`);
    }

	const component = createElement('section', CssClasses.SLIDER);

	buttonLeft = createElement('button', CssClasses.BUTTON);
	buttonLeft.textContent = TEXT_BUTTON_LEFT;
	component.append(buttonLeft);

	const wrapper = createElement('div', CssClasses.WRAPPER);

	cardContainer = createElement('ul', CssClasses.CARD_CONTAINER);
	wrapper.append(cardContainer);

	petsJSON.forEach((pet) => {
		const cardComponent = Card.createComponent(pet);
		cards.push(cardComponent);
	});

	for (let i = 0; i < COUNT_CARD_BLOCK; i += 1) {
		const cardGroup = createElement('ul', CssClasses.CARD_GROUP);
		cardGroup.style.order = `${i + 1}`;
		cardContainer.append(cardGroup);
	}
	for (let i = 0; i < COUNT_CARD; i += 1) {
		cardContainer.children[1].append(cards[i]);
		visibleCards.push(cards[i]);
	}

	component.append(wrapper);

	buttonRight = createElement('button', CssClasses.BUTTON);
	buttonRight.textContent = TEXT_BUTTON_RIGHT;
	component.append(buttonRight);

	buttonLeft.addEventListener('click', buttonLeftClickHandler);
	buttonRight.addEventListener('click', buttonRightClickHandler);
	cardContainer.addEventListener('transitionend', endTransitionHandler);

	return component;
};
function createElement(tagName, className) {
	const element = document.createElement(tagName);
	element.classList.add(className);
	return element;
}
function buttonLeftClickHandler() {
	if (!isRightClick) {
		let rightCardGroup = null;
		for (let group of cardContainer.children) {
			if (Number(group.style.order) === INDEX_VISIBLE_GROUP + 1) {
				rightCardGroup = group;
				break;
			}
		}
		while (rightCardGroup.firstElementChild) {
			rightCardGroup.firstElementChild.remove();
		}

		const cardsToShow = getCardsToShow();
		visibleCards = new Array(...cardsToShow);
		cardsToShow.forEach((card) => {
			rightCardGroup.insertAdjacentElement('beforeend', card);
		});
	}

	isLeftClick = true;
	isRightClick = !isLeftClick;

	deltaOrder = -1;
	cardContainer.classList.add(CssClasses.ANIMATE_LEFT);
	disableButtons();
};
function buttonRightClickHandler() {
	if (!isLeftClick) {
		let leftCardGroup = null;
		for (let group of cardContainer.children) {
			if (Number(group.style.order) === INDEX_VISIBLE_GROUP - 1) {
				leftCardGroup = group;
				break;
			}
		}
		while (leftCardGroup.firstElementChild) {
			leftCardGroup.firstElementChild.remove();
		}

		const cardsToShow = getCardsToShow();
		visibleCards = new Array(...cardsToShow);
		cardsToShow.forEach((card) => {
			leftCardGroup.insertAdjacentElement('beforeend', card);
		});
	}

	isRightClick = true;
	isLeftClick = !isRightClick;

	deltaOrder = 1;
	cardContainer.classList.add(CssClasses.ANIMATE_RIGHT);
	disableButtons();
};
function disableButtons() {
	buttonLeft.setAttribute('disabled', true);
	buttonRight.setAttribute('disabled', true);
}
function enableButtons() {
	buttonLeft.removeAttribute('disabled');
	buttonRight.removeAttribute('disabled');
}
function endTransitionHandler() {
    cardContainer.classList.add(CssClasses.NO_TRANSITION);
	for (const group of cardContainer.children) {
		let order = Number(group.style.order);
		order = order + deltaOrder;
		if (order <= 0) {
			order = COUNT_CARD;
		} else if (order > COUNT_CARD) {
			order = 1;
		}
		group.style.order = order;
	}

    cardContainer.classList.remove(CssClasses.ANIMATE_LEFT, CssClasses.ANIMATE_RIGHT);
	setTimeout(() => {
        cardContainer.classList.remove(CssClasses.NO_TRANSITION);
		enableButtons();
	}, 1);
};
function getCardsToShow() {
	let cardsToShow = new Array();
	while (cardsToShow.length < COUNT_CARD) {
		const index = getRandomNumber(0, cards.length - 1);
		if (!visibleCards.includes(cards[index]) && !cardsToShow.includes(cards[index])) {
			cardsToShow.push(cards[index]);
		}
	}
	return cardsToShow;
};
function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

export { createComponent };
