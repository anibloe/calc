import Calculator from "./models/Calculator";
import * as calcView from "./views/calcView";

window.addEventListener("load", () => {
	const state = {};

	window.state = state;

	// Initialise and display calculator
	calcView.render();
});
