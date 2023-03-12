import '../style.css';

let counter = 0;

document.body.addEventListener('click', () => {
  counter += 1;
  console.log(counter);
});

// document.body.addEventListener('click', clickHandler);
// function clickHandler() {
//   counter += 1;
//   console.log(counter);
// }