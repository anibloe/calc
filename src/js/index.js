import Calculator from "./models/Calculator";
import * as calcView from "./views/calcView";

const state = {
	status: "start", // ['start', 'in_progress']
	calc: new Calculator("", 0), // Initialise the model
};

window.addEventListener("load", () => {
	// Build and display the markup
	calcView.render();

	// Make the calculator able to be clicked
	addClickability(document.querySelector(".calc__buttons"));
});

// Make the calculator buttons clickable
const addClickability = (buttonsContainer) => {
	buttonsContainer.addEventListener("click", (e) => {
		const clicked = e.target,
			isDigit = parseInt(clicked.textContent) > -1,
			isOperator = clicked.className === "operator",
			isClear = clicked.dataset.role === "clear",
			isEquals = clicked.dataset.role === "evaluate";

		if (isDigit || isOperator) {
			// Append the button's value to the sum
			state.calc.update(e.target.textContent);

			state.status = "in_progress";
		} else if (isClear) {
			// AC button - clear
			state.calc.reset();

			state.status = "start";
		} else if (isEquals) {
			// Evaluate the sum
			state.calc.evaluate();

			// Mark the end of this sum and the start of the next
			state.status = "start";
		} else {
			return;
		}

		// Update the display
		calcView.updateDisplay(state.calc);
	});
};
