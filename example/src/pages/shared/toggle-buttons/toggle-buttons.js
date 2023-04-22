/**
 * @param {HTMLElement[]} buttons
 * @param {boolean} isDisabled
 */
export function toggleButtons(buttons, isDisabled) {
    buttons.forEach((button) => {
        if (isDisabled) {
            button.setAttribute('disabled', 'true');
        } else {
            button.removeAttribute('disabled');
        }
    });
}
