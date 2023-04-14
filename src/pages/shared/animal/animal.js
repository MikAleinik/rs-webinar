function Animal(params) {
    Object.keys(params).forEach((key) => {
        if (typeof(params[key]) !== 'string' || params[key] === '') {
            throw TypeError(`Animal error. Field ${key} is invalid.`);
        }
    });

    let _animalParam = params;

    this.get = function() {
        return _animalParam;
    }
}

export default Animal;