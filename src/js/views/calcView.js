export const render = () => {
	const markup = `
        <div id="calc">
            <div class="calc__header">
                <div class="calc__header__sum"></div>
                <div class="calc__header__result">0</div>
            </div>

            <div class="calc__buttons">
                <div class="row">
                    <button>AC</button>
                    <button data-action="save">SAVE</button>
                    <button>/</button>
                </div>
                
                <div class="row">
                    <button class="calc__buttons__ac">.</button>
                    <button class="calc__buttons__ac">0</button>
                    <button class="calc__buttons__ac"></button>
                    <button class="calc__buttons__ac">X</button>
                </div>

                <div class="row">
                    <button class="calc__buttons__ac">1</button>
                    <button class="calc__buttons__ac">2</button>
                    <button class="calc__buttons__ac">3</button>
                    <button class="calc__buttons__ac">-</button>
                </div>

                <div class="row">
                    <button class="calc__buttons__ac">4</button>
                    <button class="calc__buttons__ac">5</button>
                    <button class="calc__buttons__ac">6</button>
                    <button class="calc__buttons__ac">+</button>
                </div>

                <div class="row">
                    <button class="calc__buttons__ac">7</button>
                    <button class="calc__buttons__ac">8</button>
                    <button class="calc__buttons__ac">9</button>
                    <button class="calc__buttons__ac">=</button>
                </div>
            </div>
        </div>

        <img src="./mockup.png"/>
    `;

	document.body.insertAdjacentHTML("beforeend", markup);
};
