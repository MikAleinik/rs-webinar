/**
 * @param {number} min
 * @param {number} max
 */
export function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled)) + minCeiled;
}
