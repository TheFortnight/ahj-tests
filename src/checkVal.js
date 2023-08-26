module.exports = () => {

    const luhn = require('./luhn');
    const button = document.querySelector('.button');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const input = document.querySelector('.input');
        const number = input.value;
        const res = luhn(number);
        const resField = document.querySelector('.result');
        resField.textContent = res ? 'CARD NUMBER IS VALID<' : 'CARD NUMBER IS NOT VALID';
    })
}