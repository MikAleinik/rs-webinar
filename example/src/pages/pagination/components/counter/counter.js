import { createElement } from '../../../../utils/create-element';
import { toggleButtons } from '../../../shared/toggle-buttons/toggle-buttons';

const CssClasses = {
    PAGINATION_CONTAINER: 'page-counter',
    BUTTON: 'round__button',
    NOT_CLICKABLE: 'not-clickable',
};

const TEXT_BUTTON_FIRST = '<<';
const TEXT_BUTTON_LAST = '>>';
const TEXT_BUTTON_PREV = '<';
const TEXT_BUTTON_NEXT = '>';

const counterState = {
    countPage: 0,
    currentPage: 1,
    /**
     * @param {number} count
     */
    updatePageCount(count) {
        if (typeof count !== 'number' || count < 0) {
            throw new TypeError('Pagination error. Count page is invalid.');
        }
        this.countPage = count;
    },
    /**
     * @param {number} page
     * @param {(page: number) => void} onUpdate
     */
    updateCurrentPage(page, onUpdate) {
        if (typeof page !== 'number' || page < 0) {
            throw new TypeError('Pagination error. Current page is invalid.');
        }
        this.currentPage = page;
        onUpdate(page);
    },
    /**
     * @param {(page: number) => void} onUpdate
     */
    decreaseCurrentPage(onUpdate) {
        this.currentPage -= 1;
        onUpdate(this.currentPage);
    },
    /**
     * @param {(page: number) => void} onUpdate
     */
    increaseCurrentPage(onUpdate) {
        this.currentPage += 1;
        onUpdate(this.currentPage);
    },
    getCountPage() {
        return this.countPage;
    },
    getCurrentPage() {
        return this.currentPage;
    },
    isFirstPage() {
        return this.currentPage === 1;
    },
    isLastPage() {
        return this.currentPage === this.countPage;
    },
};

const buttonsState = {
    buttonCurrent: createElement({
        tagName: 'button',
        className: `${CssClasses.BUTTON} ${CssClasses.NOT_CLICKABLE}`,
        textContent: counterState.getCurrentPage(),
    }),
    buttonFirst: createElement({
        tagName: 'button',
        className: CssClasses.BUTTON,
        textContent: TEXT_BUTTON_FIRST,
        onClickHandler: () => {
            counterState.updateCurrentPage(1, buttonsState.updateButtonsStatuses.bind(buttonsState));
        },
    }),
    buttonPrev: createElement({
        tagName: 'button',
        className: CssClasses.BUTTON,
        textContent: TEXT_BUTTON_PREV,
        onClickHandler: () => {
            counterState.decreaseCurrentPage(buttonsState.updateButtonsStatuses.bind(buttonsState));
        },
    }),
    buttonNext: createElement({
        tagName: 'button',
        className: CssClasses.BUTTON,
        textContent: TEXT_BUTTON_NEXT,
        onClickHandler: () => {
            counterState.increaseCurrentPage(buttonsState.updateButtonsStatuses.bind(buttonsState));
        },
    }),
    buttonLast: createElement({
        tagName: 'button',
        className: CssClasses.BUTTON,
        textContent: TEXT_BUTTON_LAST,
        onClickHandler: () => {
            counterState.updateCurrentPage(
                counterState.getCountPage(),
                buttonsState.updateButtonsStatuses.bind(buttonsState)
            );
        },
    }),

    /**
     * @param {(page?: number) => void} onUpdate
     */
    setOnUpdatePageCallback(onUpdate) {
        this.onPageUpdate = onUpdate;
    },

    /**
     * @param {string | number} text
     */
    updateCurrentButtonText(text) {
        this.buttonCurrent.textContent = text.toString();
    },

    /**
     * @param {number} page
     */
    updateButtonsStatuses(page) {
        this.updateCurrentButtonText(page);
        toggleButtons([this.buttonLast, this.buttonNext], counterState.isLastPage());
        toggleButtons([this.buttonFirst, this.buttonPrev], counterState.isFirstPage());
        if (this.onPageUpdate) {
            this.onPageUpdate(page);
        }
    },

    getButtons() {
        return {
            buttonFirst: this.buttonFirst,
            buttonPrev: this.buttonPrev,
            buttonCurrent: this.buttonCurrent,
            buttonNext: this.buttonNext,
            buttonLast: this.buttonLast,
        };
    },
};

/**
 * @param {number} count
 * @param {(page: number) => void} onUpdatePage
 */
function createComponent(count, onUpdatePage) {
    if (typeof count !== 'number' || count < 0) {
        throw new TypeError('Pagination error. Count page is invalid.');
    }
    const component = createElement({
        tagName: 'nav',
        className: CssClasses.PAGINATION_CONTAINER,
    });

    component.append(...Object.values(buttonsState.getButtons()));
    buttonsState.setOnUpdatePageCallback(onUpdatePage);
    buttonsState.updateButtonsStatuses(1);
    counterState.updatePageCount(count);
    return component;
}

export { createComponent };
