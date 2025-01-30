const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        display.value += value;
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

equalButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
});
