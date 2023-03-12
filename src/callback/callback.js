function summ(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function difference(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function action(numbers, callbacks) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    const currentCallback = callbacks[i - 1];
    const number = numbers[i];
    result = currentCallback(result, number);
  }

  return result;
}

const numbers = [1, 2, 3, 4];
const callbacks = [ summ, difference, summ ];

console.log(action(numbers, callbacks));