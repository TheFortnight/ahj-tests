module.exports = () => {
    const setActive = (className) => {
        const element = document.querySelector(className);
        const actEl = document.querySelector('.isActive');
        if (actEl) actEl.classList.remove('isActive');
        element.classList.add('isActive');
      }
      
    const inputField = document.querySelector('.input');
    inputField.addEventListener('input', (event) => {
        event.preventDefault();
        let number = inputField.value;
        if (number.length > 0) {
            if (isNaN(+number)) {
                return;
            }
        number = number.substring(0, 1);
        if (number === '2') setActive('.mir');
        if (number === '3') setActive('.express');
        if (number === '4') setActive('.visa');
        if (number === '5') setActive('.mastercard');
        }
    })
}