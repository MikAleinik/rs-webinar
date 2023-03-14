let counter = 0;

document.body.addEventListener('click', () => {
  counter += 1;
  console.log('(1)', counter);
});

document.body.addEventListener('click', clickHandler);
function clickHandler() {
  counter += 1;
  console.log('(2)', counter);
}