import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service.js';

async function makeApiCall(currencyAmount, currencyTo) {
  const response = await CurrencyService.getConversion();
  getElements(response);
}

function getElements(response, currencyAmount, currencyTo) {
  console.log(response);
}

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    let currencyAmount = $('#currency-amount').val();
    let currencyTo = $('select option:selected').val();
    makeApiCall(currencyAmount, currencyTo)
  });
});
