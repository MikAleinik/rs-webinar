/**
 * Пример использования функций callback
 */
function successHandler(number) {
    console.log(`Все хорошо. Число ${number} > 0.`);
}
function errorHandler(number) {
    console.log(`Ошибка. Число ${number} <= 0.`);
}
function checkNumber(number, successCalback, errorCallback) {
    if (number > 0) {
        successCalback(number);
    } else {
        errorCallback(number);
    }
}
checkNumber(5, successHandler, errorHandler);
checkNumber(-3, successHandler, errorHandler);

/**
 * Пример использования массива с функциями callback
 */
// function summ(numberOne, numberTwo) {
//     console.log(`${numberOne} + ${numberTwo}`);
//     return numberOne + numberTwo;
// }
// function difference(numberOne, numberTwo) {
//     console.log(`${numberOne} - ${numberTwo}`);
//     return numberOne - numberTwo;
// }
// function action(numbers, callbacks) {
//     let result = numbers[0];
//     for (let i = 1; i < numbers.length; i += 1) {
//         const currentCallback = callbacks[i - 1];
//         const number = numbers[i];
//         result = currentCallback(result, number);
//         console.log(`${result}`);
//     }
//     return result;
// }
// const numbers = [1, 2, 3, 4];
// const callbacks = [ summ, difference, summ ];
// const result = action(numbers, callbacks);
// console.log(`Результат = ${result}`);

/**
 * Пример как не надо делать - callback hell
 */
// function successHandler(number) {
//     console.log(`Все хорошо. Число ${number} > 0.`);
// }
// function errorHandler(number, fixCallback) {
//     console.log(`Ошибка. Число ${number} <= 0.`);
//     fixCallback(number, checkNumber, successHandler, errorHandler);
// }
// function fixNumber(number, checkCallback, successCalback, errorCallback) {
//     number += 10;
//     checkCallback(number, successCalback, errorCallback);
// }
// function checkNumber(number, successCalback, errorCallback) {
//     if (number > 0) {
//         successCalback(number);
//     } else {
//         errorCallback(number, fixNumber);
//     }
// }
// checkNumber(-13, successHandler, errorHandler);