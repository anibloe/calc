export default class Calculator {
	constructor(topVal, bottomVal) {
		this.display_top = topVal;
		this.display_bottom = bottomVal;
	}

	// Return to a fresh state
	reset() {
		this.display_top = "";
		this.display_bottom = 0;
	}

	// Handle the new value
	update(button) {
		const newVal = button.textContent;

		if (!this.display_bottom) {
			// Existing value is zero - overwrite it
			this.display_bottom = newVal;
		} else if (button.dataset.role === "operator") {
			// Append the operator to the sum with added spacing
			this.display_bottom = `${this.display_bottom} ${newVal} `;
		} else {
			// Append the digit to the sum
			this.display_bottom += newVal;
		}
	}

	// Ensure the new value is a valid user journey
	validate(button) {
		const newVal = button.textContent,
			newStatus = button.dataset.role,
			curNumIsDec = () => {
				const entries = this.display_bottom.split(" "),
					curNum = entries[entries.length - 1];
				return curNum.indexOf(".") > -1;
			};

		if (!newVal.trim()) {
			// Empty button value
			return false;
		} else if (newStatus === "decimal" && curNumIsDec()) {
			// Value is already a decimal - prevent over one dot per number
			return false;
		} else if (this.display_bottom === 0 && button.textContent === "0") {
			// Zero is already shown - prevent another zero
			return false;
		}
		return true;
	}

	// Calculate the sum
	evaluate() {
		// Replace the aesthetic operators for the actual ones
		const sum = this.display_bottom.replace(/ ÷ /g, " / ").replace(/ x /g, " * "),
			answer = eval(sum);

		// Update the header top row to show the sum
		this.display_top = this.display_bottom + " =";

		// Update the header bottom row to show the answer
		this.display_bottom = answer;
	}
}
