function addLog(message) {
    const logElement = document.querySelector('.console__log');
    const logItem = document.createElement('li');
    logItem.textContent = message;
    logElement.append(logItem);
}

const clearButton = document.querySelector('.button__clear');
clearButton.addEventListener('click', () => {
    const logElement = document.querySelector('.console__log');
    logElement.innerHTML = '';
    console.clear();
});