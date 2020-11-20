## Friday TDD Project

Fun application that takes your age, and your life expectancy and tells you your expected age left converted to various solar bodies including Mars, Venus, Mercury & Jupiter.

By Austin Schrader

## Description

This project was created by Austin Schrader for the Friday project where we are using Test Driven Development. It was created using CSS, HTML, JavaScript, Git, GitHub, and Markdown, VSCode, Emmet, and Prettier.

## Setup

1. Download this repository by clicking the "Clone or Download" button
2. Navigate to the folder where it downloaded
3. Open the index.html file inside of your preferred browser
4. Congratulations, this is the website!

## Specs

Describe: User
Test: "should correctly output the Earth age of the User object"
let user = new User(45);
Expect(user.earthAge).toEqual(45);

Test: "should correctly output the Mercury age of the User object"
let user = new User(45);
Expect(user.mercuryAge()).toEqual(45 / 0.24);

Test: "should correctly output the Venus age of the User object"
let user = new User(45);
Expect(user.venusAge()).toEqual(45 / 0.62);

Test: "should correctly output the Mars age of the User object"
let user = new User(45);
Expect(user.marsAge()).toEqual(45 / 1.88);

Test: "should correctly output the Jupiter age of the User object"
let user = new User(45);
Expect(user.jupiterAge()).toEqual(45 / 11.86);

Test: "should correctly output the life expectancy left in Earth years of the User object"
let user = new User(45);
Expect(user.earthYearsLeft()).toEqual(78.54 - 45);

Test: "should correctly output the life expectancy left in Mercury years of the User object"
let user = new User(45);
Expect(user.mercuryYearsLeft()).toEqual((78.54 - 45) / 0.24);

Test: "should correctly output the life expectancy left in Venus years of the User object"
let user = new User(45);
Expect(user.venusYearsLeft()).toEqual((78.54 - 45) / 0.62);

Test: "should correctly output the life expectancy left in Mars years of the User object"
let user = new User(45);
Expect(user.marsYearsLeft()).toEqual((78.54 - 45) / 1.88);

Test: "should correctly output the life expectancy left in Jupiter years of the User object"
let user = new User(45);
Expect(user.jupiterYearsLeft()).toEqual((78.54 - 45) / 11.86);

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
