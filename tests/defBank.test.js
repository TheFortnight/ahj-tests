const defBank = require('../src/defBank.js');


test('Pupp', async () => {
  document.body.innerHTML = `<form class="form">
  <div class="cards_imgs">
    <div class="card_img visa">VISA</div>
    <div class="card_img mastercard">MASTER</div>
    <div class="card_img mir">M I R</div>
    <div class="card_img express">Express</div>
  </div>
  <input class="input" name="card_number" type="text" placeholder="Credit card number">
  <button class="button" type="submit" value="check" name="CHECK CARD!">CHECK CARD!</button>
</form>
<div class="result"></div>`;
defBank();
const input = document.querySelector('.input');
input.value = '4';
const visa = document.querySelector('.isActive');

expect(visa.textContent).toEqual('VISA');
  
})