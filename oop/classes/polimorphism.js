class Athlete {
	constructor(wheight) {
		this.wheight = wheight;
		this.category = category;
	}

	categorySet() {
		if (this.wheight <= 50) {
			this.category = 'child';
		}
		if (this.wheight <= 65) {
			this.category = 'teen';
		}
		this.category = 'adult';
	}
}

class Fighter extends Athlete {
	constructor(wheight) {
		super(wheight);
	}

	categorySet() {
		if (this.wheight <= 54) {
			this.category = 'feather';
		}
		if (this.wheight <= 60) {
			this.category = 'light';
		}
		if (this.wheight <= 75) {
			this.category = 'mid-light';
		}
		this.category = 'heavy';
	}
}
