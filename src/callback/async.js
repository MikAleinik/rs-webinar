function summ() {
    let counter = 0;
    for (let i = 0; i < 100000; i += 1) {
        //Какие-то вычисления
        counter += 1;
    }
    console.log('Завершение длительных вычислений.(2)', result);
}

// async function summ() {
//     let result = await function () {
//         let counter = 0;
//         for (let i = 0; i < 100000; i += 1) {
//             //Какие-то вычисления
//             counter += 1;
//         }
//         return counter;
//     }();
//     console.log('Завершение длительных вычислений.(2)', result);
// }

console.log('Начало выполнения кода.(1)');

summ();

console.log('Завершение выполнения кода.(3)');