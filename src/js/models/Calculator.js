export default class Calculator {
	constructor(topVal, bottomVal) {
		this.display_top = topVal;
		this.display_bottom = bottomVal;
	}

	reset() {
		this.display_top = "";
		this.display_bottom = 0;
	}

	update(newVal) {
		const isDigit = parseInt(newVal) > -1;

		if (!this.display_bottom && isDigit) {
			// Existing value is zero - overwrite it
			this.display_bottom = newVal;
		} else if (!isDigit) {
			// Append the operator to the sum
			this.display_bottom = `${this.display_bottom} ${newVal} `;
		} else {
			// Append the digit to the sum
			this.display_bottom += newVal;
		}
	}

	evaluate() {
		// Evaluate the sum
		//
		// Update display_top to show the sum
		//
		// Update display_bottom to show the answer
		//
	}
}
