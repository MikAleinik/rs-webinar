/**
 * @param {import("src/pages/pagination/components/showcase/showcase").IPet} pet
 */
function isValidPet(pet) {
    return !Object.values(pet).every(
        (fieldValue) => fieldValue === '' || (Array.isArray(fieldValue) && fieldValue.length === 0)
    );
}

export { isValidPet };
