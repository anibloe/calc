export const render = () => {
	const markup = `
        <div id="calc">
            <div class="calc__header">
                <div class="calc__header__sum">365 x 4 =</div>
                <div class="calc__header__result">1,460</div>
            </div>

            <div class="calc__buttons">
                <div class="row">
                    <button class="action" data-role="clear">AC</button>
                    <button class="action" data-role="save">SAVE</button>
                    <button class="operator" data-role="divide">&#247;</button>

                </div>
                
                <div class="row">
                    <button class="digit" data-role="dot">.</button>
                    <button class="digit">0</button>
                    <button class="digit">&nbsp;</button>
                    <button class="operator" data-role="multiply">&#215;</button>
                </div>

                <div class="row">
                    <button class="digit">1</button>
                    <button class="digit">2</button>
                    <button class="digit">3</button>
                    <button class="operator" data-role="minus">&#8722;</button>
                </div>

                <div class="row">
                    <button class="digit">4</button>
                    <button class="digit">5</button>
                    <button class="digit">6</button>
                    <button class="operator" data-role="add">&#43;</button>
                </div>

                <div class="row">
                    <button class="digit">7</button>
                    <button class="digit">8</button>
                    <button class="digit">9</button>
                    <button class="action operator" data-role="evaluate">&#61;</button>
                </div>
            </div>
        </div>

        <img src="./mockup.png"/>
    `;

	document.body.insertAdjacentHTML("beforeend", markup);
};
