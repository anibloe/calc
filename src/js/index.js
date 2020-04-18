import Calculator from "./models/Calculator";
import * as calcView from "./views/calcView";

const state = {
	status: "clear", // Previously clicked button
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
		try {
			const clickedBtn = e.target,
				isClearBtn = clickedBtn.dataset.role === "clear",
				isSaveBtn = clickedBtn.dataset.role === "save",
				isEqualsBtn = clickedBtn.dataset.role === "evaluate";

			if (state.status === "evaluate") {
				// Reset on the click after the equals is clicked
				state.calc.reset();
			}

			if (isClearBtn) {
				// AC button - clear the values
				state.calc.reset();
			} else if (isSaveBtn) {
				// Save button - save
			} else if (isEqualsBtn) {
				// Equals button - evaluate the sum
				state.calc.evaluate();
			} else {
				// Digit or operator button

				// Carry out validation
				const validation = state.calc.validate(clickedBtn);

				if (!validation) {
					return;
				} else {
					// Update the current sum
					state.calc.update(clickedBtn);
				}
			}

			// Update the display to reflect the above action
			calcView.updateDisplay(state.calc);

			// Check for multiple decimal points in the same number
			if (!(state.status === "decimal" && clickedBtn.dataset.role === "integer")) {
				// Update the status
				state.status = clickedBtn.dataset.role;
			}
		} catch (err) {
			// Catch any unknown errors in order to fail gracefully
			console.log(err.message);
		}
	});
};
