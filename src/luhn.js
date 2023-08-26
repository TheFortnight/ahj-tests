module.exports = (number) => {
    const num = +number;
    console.log('NUM: ' + typeof num);
    if (isNaN(num)) {
        console.log('ENTER VALID CARD NUMBER');
        const input = document.querySelector('.input');
        input.value = '';
        return false;
    }
    if (number.length != 16) {
        console.log('NUMBER SHOULD HAVE 16 digits!');
        return false;
    }
    let sum = 0;
    cardNumber = number.split("");
    for (i = 0; i < cardNumber.length - 1; i += 2) {
        cardNumber[i] *= 2;
        if (cardNumber[i] > 9) cardNumber[i] = cardNumber[i] - 9;
    }
    cardNumber.forEach(element => {
        sum += +element;
    });

    return (sum % 10 == 0);
}