import { User } from './../src/js/user.js';

describe('User', () => {
	test('should correctly output the Earth age of the User object', () => {
		let user = new User(45);
		expect(user.earthAge).toEqual(45);
	});

	test('should correctly output the Mercury age of the User object', () => {
		let user = new User(45);
		expect(user.mercuryAge()).toEqual(45 / 0.24);
	});

	test('should correctly output the Venus age of the User object', () => {
		let user = new User(45);
		expect(user.venusAge()).toEqual(45 / 0.62);
	});

	test('should correctly output the Mars age of the User object', () => {
		let user = new User(45);
		expect(user.marsAge()).toEqual(45 / 1.88);
	});

	test('should correctly output the Jupiter age of the User object', () => {
		let user = new User(45);
		expect(user.jupiterAge()).toEqual(45 / 11.86);
	});

	test('should correctly output the life expectancy left in Earth years of the User object', () => {
		let user = new User(45, 78.54);
		expect(user.earthYearsLeft()).toEqual(78.54 - 45);
	});

	test('should correctly output the Earth age of the User object', () => {
		let user = new User(80, 75);
		expect(user.earthYearsLeft()).toEqual(
			`youve lived ${Math.abs(75 - 80)} years past your life expectancy`
		);
	});

	test('should correctly output the life expectancy left in Mercury years of the User object', () => {
		let user = new User(45, 78.54);
		expect(user.mercuryYearsLeft()).toEqual((78.54 - 45) / 0.24);
	});

	test('should correctly output the Earth age of the User object', () => {
		let user = new User(80, 75);
		expect(user.mercuryYearsLeft()).toEqual(
			`youve lived ${Math.abs(75 - 80) / 0.24} years past your life expectancy`
		);
	});

	test('should correctly output the life expectancy left in Venus years of the User object', () => {
		let user = new User(45, 78.54);
		expect(user.venusYearsLeft()).toEqual((78.54 - 45) / 0.62);
	});

	test('should correctly output the Earth age of the User object', () => {
		let user = new User(80, 75);
		expect(user.venusYearsLeft()).toEqual(
			`youve lived ${Math.abs(75 - 80) / 0.62} years past your life expectancy`
		);
	});

	test('should correctly output the life expectancy left in Mars years of the User object', () => {
		let user = new User(45, 78.54);
		expect(user.marsYearsLeft()).toEqual((78.54 - 45) / 1.88);
	});

	test('should correctly output the Earth age of the User object', () => {
		let user = new User(80, 75);
		expect(user.marsYearsLeft()).toEqual(
			`youve lived ${Math.abs(75 - 80) / 1.88} years past your life expectancy`
		);
	});

	test('should correctly output the life expectancy left in Jupiter years of the User object', () => {
		let user = new User(45, 78.54);
		expect(user.jupiterYearsLeft()).toEqual((78.54 - 45) / 11.86);
	});

	test('should correctly output the Earth age of the User object', () => {
		let user = new User(80, 75);
		expect(user.jupiterYearsLeft()).toEqual(
			`youve lived ${Math.abs(75 - 80) / 11.86} years past your life expectancy`
		);
	});
});
