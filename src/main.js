import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/user.js';

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    let lifeExpectancy = parseInt($('#life-expectancy').val());
    let earthAge = parseInt($('#earth-age').val());

    let user = new User(earthAge, lifeExpectancy);
    console.log(user);
    $('#results')
      .empty()
      .append(
        `Your solar age information is as follows: Your Earth age is ${
          user.earthAge
        }, which means that you have  ${user.earthYearsLeft(
          lifeExpectancy - earthAge
        )} years left to live. However, on Mercury your age would be ${user.mercuryAge()} and your years left would be ${user.mercuryYearsLeft(
          (lifeExpectancy - earthAge) / 0.24
        )}. On Venus your age would be ${user.venusAge()} and your years left would be ${user.venusYearsLeft(
          (lifeExpectancy - earthAge) / 0.62
        )}. On Mars your age would be ${user.marsAge()} and your years left would be ${user.marsYearsLeft(
          (lifeExpectancy - earthAge) / 1.88
        )}. On Jupiter, your age would be ${user.jupiterAge()} and you would have ${user.jupiterYearsLeft(
          (lifeExpectancy - earthAge) / 11.86
        )} years left.`
      );
  });
});
