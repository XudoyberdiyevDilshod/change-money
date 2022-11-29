var elForm = document.querySelector('.form');
var elInput = document.querySelector('.js-input');
var elSelect = document.querySelector('.js-select');
var elResult = document.querySelector('.js-result');

var UZS_TO_EURO = 11630;
var UZS_TO_USD = 11225;
var UZS_TO_RUB = 182;

elForm.addEventListener('submit', function(evt) {
   evt.preventDefault();
   
   var elMoney = elInput.value;
   var elEuro = elInput.value / UZS_TO_EURO;
   var elUsd = elInput.value / UZS_TO_USD;
   var elRub = elInput.value / UZS_TO_RUB;


   if (elSelect.value == 'EURO') {
      elResult.textContent = `${elEuro.toFixed(3)} EURO`;
   }else if (elSelect.value == 'USD') {
      elResult.textContent = `${elUsd.toFixed(3)} USD`;
   }else if (elSelect.value == 'RUB') {
      elResult.textContent = `${elRub.toFixed(3)} RUB`;
   }else {
      elResult.textContent = `Iltimos valyuta tanlang`;
   }
})