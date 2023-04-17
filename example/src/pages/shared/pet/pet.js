function validatePet(pet) {
    Object.keys(pet).forEach((key) => {
        if ((typeof (pet[key]) === 'string' && pet[key] === '') && Array.isArray(pet[key]) === false) {
            throw TypeError(`Pet error. Field ${key} is invalid.`);
        }
    });

    return true;
}

export { validatePet };