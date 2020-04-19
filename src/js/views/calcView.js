export const render = () => {
	const markup = `
        <div id="calc">
            <div class="calc__header">
                <div class="calc__header__sum">&nbsp;</div>
                <div class="calc__header__result">0</div>
            </div>

            <div class="calc__buttons">
                <button class="action" data-role="clear">AC</button>
                <button class="action" data-role="save">SAVE</button>
                <button class="operator" data-role="operator">÷</button>
                <!-- row -->
                <button class="digit" data-role="decimal">.</button>
                <button class="digit" data-role="integer">0</button>
                <button class="digit">&nbsp;</button>
                <button class="operator" data-role="operator">x</button>
                <!-- row -->
                <button class="digit" data-role="integer">1</button>
                <button class="digit" data-role="integer">2</button>
                <button class="digit" data-role="integer">3</button>
                <button class="operator" data-role="operator">-</button>
                <!-- row -->
                <button class="digit" data-role="integer">4</button>
                <button class="digit" data-role="integer">5</button>
                <button class="digit" data-role="integer">6</button>
                <button class="operator" data-role="operator">+</button>
                <!-- row -->
                <button class="digit" data-role="integer">7</button>
                <button class="digit" data-role="integer">8</button>
                <button class="digit" data-role="integer">9</button>
                <button class="action operator" data-role="evaluate">&#61;</button>
            </div>
        </div>
    `;

	document.body.insertAdjacentHTML("beforeend", markup);
};

// Replicate the `state` object values in the UI
export const updateDisplay = (state) => {
	const top = document.querySelector(".calc__header__sum"),
		bottom = document.querySelector(".calc__header__result");

	top.textContent = format(state.display_top, 18);
	bottom.textContent = format(state.display_bottom, 6);
};

// Carry out some formatting so that the values are displayed well
const format = (str, truncLimit) => {
	str = addCommas(str);
	str = truncate(str, truncLimit);
	return str;
};

// Insert a comma separator for the displayed numbers, only to the left of the decimal point
const addCommas = (str) => str.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

// Add ellipsis to the start of long sums
const truncate = (str, limit) => {
	if (str.trim().length > limit) {
		// Get rid of all characters from the start, leaving just the `limit` amount of characters
		str = Array.from(str).splice(str.length - limit, str.length);

		// Join them back together with ellipsis at the start
		str = ".." + str.join("");
	}
	return str;
};
