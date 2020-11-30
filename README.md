## Friday API Project

Fun application that takes how much currency you have, and the currency you'd like to convert it to and tells you how much you'd have in the destination currency.

By Austin Schrader

## Description

This project was created by Austin Schrader for the Friday project where we are using Application Programming Interfaces. It was created using CSS, HTML, JavaScript, Git, GitHub, and Markdown, VSCode, Emmet, and Prettier.

## Setup

1. Download this repository by clicking the "Clone or Download" button
2. Navigate to the folder where it downloaded
3. Open the index.html file inside of your preferred browser
4. Congratulations, this is the website!

## Specs

Describe: Currency Service
Test: "should correctly output the converted currency from USD to RUB"
let currencyAmount = 45;
let currencyTo = "RUB"
Expect(makeApiCall(currencyAmount, currencyTo)).toEqual(3433.64);

Test: "should correctly output the converted currency from USD to AED"
let currencyAmount = 45;
let currencyTo = "AED"
Expect(makeApiCall(currencyAmount, currencyTo)).toEqual(165.24);

Test: "should correctly output the converted currency from USD to CNY"
let currencyAmount = 45;
let currencyTo = "CNY"
Expect(makeApiCall(currencyAmount, currencyTo)).toEqual(295.98);

Test: "should correctly output the converted currency from USD to COP"
let currencyAmount = 45;
let currencyTo = "COP"
Expect(makeApiCall(currencyAmount, currencyTo)).toEqual(164142.86);

Test: "should correctly output the converted currency from USD to COP"
let currencyAmount = 45;
let currencyTo = "DKK"
Expect(makeApiCall(currencyAmount, currencyTo)).toEqual(280.92);

## Known Bugs

At this time, there are no known bugs. If you see spot a bug feel free to make a pull request.

## Technologies Used

- HTML
- CSS
- Git
- Github
- JavaScript
- VSCode
- Markdown
- Emmet (Extension)
- Prettier (Extension)

## License

This repository is licensed under the MIT license.

Copyright (c) 2020 by _Austin Schrader_
