const luhn = (number) => {
  const num = +number;
  console.log('NUM: '+ typeof num);
  if (isNaN(num)) {
    alert('ENTER VALID CARD NUMBER');
    const input = document.querySelector('.input');
    input.value = '';
    return;
  }
  if (number.length != 16) {
    alert('NUMBER SHOULD HAVE 16 digits!');
    return;
  }
  let sum = 0;
  cardNumber = number.split("");
  for (i=0; i<cardNumber.length - 1; i+=2) {
    cardNumber[i] *= 2;
    if (cardNumber[i] > 9) cardNumber[i] = cardNumber[i] - 9;
  }
  cardNumber.forEach(element => {
    sum += +element;
  });

  return (sum % 10 == 0);


}


const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const input = document.querySelector('.input');
  const number = input.value;
  const res = luhn(number);
  const resField = document.querySelector('.result');
  resField.textContent = res ? 'CARD NUMBER IS VALID<' : 'CARD NUMBER IS NOT VALID';
})

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