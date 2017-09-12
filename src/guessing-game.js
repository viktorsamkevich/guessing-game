class GuessingGame {
	constructor() {
		this._min = null;
		this._max = null;
		this._guess = null;
	}

	setRange(min, max) {
		this._min = min;
		this._max = max;
	}

	guess() {
		this._guess = Math.round((this._max + this._min)/2);
		return this._guess;
	}

	lower() {
		this._max = this._guess;
	}

	greater() {
		this._min = this._guess;
	}
}

module.exports = GuessingGame;
