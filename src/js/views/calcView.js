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
                    <button data-role="operator">&#247;</button>
                </div>
                
                <div class="row">
                    <button class="" data-role="dot">.</button>
                    <button class="" data-role="number">0</button>
                    <button class="" data-role="number">&nbsp;</button>
                    <button class="" data-role="operator">&#215;</button>
                </div>

                <div class="row">
                    <button class="" data-role="number">1</button>
                    <button class="" data-role="number">2</button>
                    <button class="" data-role="number">3</button>
                    <button class="" data-role="operator">&#8722;</button>
                </div>

                <div class="row">
                    <button class="" data-role="number">4</button>
                    <button class="" data-role="number">5</button>
                    <button class="" data-role="number">6</button>
                    <button class="" data-role="operator">&#43;</button>
                </div>

                <div class="row">
                    <button class="" data-role="number">7</button>
                    <button class="" data-role="number">8</button>
                    <button class="" data-role="number">9</button>
                    <button class="" data-role="operator">&#61;</button>
                </div>
            </div>
        </div>

        <img src="./mockup.png"/>
    `;

	document.body.insertAdjacentHTML("beforeend", markup);
};
