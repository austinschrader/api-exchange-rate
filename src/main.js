import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { User } from './js/user.js';

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    let currencyFrom = $('#currency-from').val();
    let currencyTo = $('select option:selected').val();
    console.log(currencyFrom + currencyTo);

    // let user = new User(earthAge, lifeExpectancy);
    // console.log(user);
    // $('#results').empty().append(`Your USD converts to: ${user.earthAge}`);
  });
});
