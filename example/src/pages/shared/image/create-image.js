/**
 * @param {{src: string; alt: string; className: string}} imageParams
 * @returns {HTMLImageElement}
 */
export function createImage({ src, alt, className }) {
    const image = new Image();
    image.classList.add(className);
    image.src = src;
    image.alt = alt;
    return image;
}
