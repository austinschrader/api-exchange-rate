export class User {
	constructor(earthAge, lifeExpectancy) {
		this.earthAge = earthAge;
		this.lifeExpectancy = lifeExpectancy;
	}

	earthYearsLeft() {
		if (this.lifeExpectancy < this.earthAge) {
			return `youve lived ${Math.abs(
				this.lifeExpectancy - this.earthAge
			)} years past your life expectancy`;
		}
		return this.lifeExpectancy - this.earthAge;
	}

	mercuryAge() {
		return this.earthAge / 0.24;
	}

	mercuryYearsLeft() {
		if (this.lifeExpectancy < this.earthAge) {
			return `youve lived ${
				Math.abs(this.lifeExpectancy - this.earthAge) / 0.24
			} years past your life expectancy`;
		}
		return (this.lifeExpectancy - this.earthAge) / 0.24;
	}

	venusAge() {
		return this.earthAge / 0.62;
	}

	venusYearsLeft() {
		if (this.lifeExpectancy < this.earthAge) {
			return `youve lived ${
				Math.abs(this.lifeExpectancy - this.earthAge) / 0.62
			} years past your life expectancy`;
		}
		return (this.lifeExpectancy - this.earthAge) / 0.62;
	}

	marsAge() {
		return this.earthAge / 1.88;
	}

	marsYearsLeft() {
		if (this.lifeExpectancy < this.earthAge) {
			return `youve lived ${
				Math.abs(this.lifeExpectancy - this.earthAge) / 1.88
			} years past your life expectancy`;
		}
		return (this.lifeExpectancy - this.earthAge) / 1.88;
	}

	jupiterAge() {
		return this.earthAge / 11.86;
	}

	jupiterYearsLeft() {
		if (this.lifeExpectancy < this.earthAge) {
			return `youve lived ${
				Math.abs(this.lifeExpectancy - this.earthAge) / 11.86
			} years past your life expectancy`;
		}
		return (this.lifeExpectancy - this.earthAge) / 11.86;
	}
}
