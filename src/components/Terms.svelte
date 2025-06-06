<div class="termsContainer">
	<svg
		width="502"
		height="502"
		viewBox="0 0 502 502"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g id="Terms">
			<path
				id="Vector"
				d="M251 301C278.614 301 301 278.614 301 251C301 223.386 278.614 201 251 201C223.386 201 201 223.386 201 251C201 278.614 223.386 301 251 301Z"
				stroke="#CCCCCC"
				stroke-width="1.5"
			/>
			<path
				id="Vector_2"
				d="M251 341C300.706 341 341 300.706 341 251C341 201.294 300.706 161 251 161C201.294 161 161 201.294 161 251C161 300.706 201.294 341 251 341Z"
				stroke="#CCCCCC"
			/>
			<path
				id="Vector_3"
				d="M251 381C322.797 381 381 322.797 381 251C381 179.203 322.797 121 251 121C179.203 121 121 179.203 121 251C121 322.797 179.203 381 251 381Z"
				stroke="#CCCCCC"
				stroke-width="1.5"
			/>
			<path
				id="Vector_4"
				d="M251 421C344.888 421 421 344.888 421 251C421 157.112 344.888 81 251 81C157.112 81 81 157.112 81 251C81 344.888 157.112 421 251 421Z"
				stroke="#AAAAAA"
				stroke-width="2.5"
			/>
			<path
				id="Vector_5"
				d="M251 461C366.98 461 461 366.98 461 251C461 135.02 366.98 41 251 41C135.02 41 41 135.02 41 251C41 366.98 135.02 461 251 461Z"
				stroke="#CCCCCC"
				stroke-width="1.5"
			/>
			<path
				id="Vector_6"
				d="M251 501C389.071 501 501 389.071 501 251C501 112.929 389.071 1 251 1C112.929 1 1 112.929 1 251C1 389.071 112.929 501 251 501Z"
				stroke="#CCCCCC"
				stroke-width="2"
			/>
			<g id="nodes">
				<g class="equityNode termNode">
					<path
						id="Vector_7"
						class="svgCircle circle1"
						d="M113.5 235C142.495 235 166 211.495 166 182.5C166 153.505 142.495 130 113.5 130C84.5051 130 61 153.505 61 182.5C61 211.495 84.5051 235 113.5 235Z"
						fill="#12213E"
					/>
					<text id="Equity" class="svgText"><tspan x="82.3574" y="189.273">Equity</tspan></text>
				</g>
				<g class="assetsNode termNode">
					<path
						id="Vector_8"
						class="svgCircle circle2"
						d="M133.5 473C162.495 473 186 449.495 186 420.5C186 391.505 162.495 368 133.5 368C104.505 368 81 391.505 81 420.5C81 449.495 104.505 473 133.5 473Z"
						fill="#12213E"
					/>
					<text id="Assets" class="svgText"><tspan x="102.006" y="427.273">Assets</tspan></text>
				</g>
				<g class="valuationNode termNode">
					<path
						id="Vector_9"
						class="svgCircle circle3"
						d="M269.5 353C298.495 353 322 329.495 322 300.5C322 271.505 298.495 248 269.5 248C240.505 248 217 271.505 217 300.5C217 329.495 240.505 353 269.5 353Z"
						fill="#12213E"
					/>
					<text id="Valuation" class="svgText"
						><tspan x="224.113" y="308.273">Valuation</tspan></text
					>
				</g>
				<g class="capitalNode termNode">
					<path
						id="Vector_10"
						class="svgCircle circle4"
						d="M361.5 146C390.495 146 414 122.495 414 93.5C414 64.5051 390.495 41 361.5 41C332.505 41 309 64.5051 309 93.5C309 122.495 332.505 146 361.5 146Z"
						fill="#12213E"
					/>
					<text id="Capital" class="svgText"><tspan x="328.215" y="99.2727">Capital</tspan></text>
				</g>
				<g class="dividendsNode termNode">
					<path
						id="Vector_11"
						class="svgCircle circle5"
						d="M431 373C461.376 373 486 348.376 486 318C486 287.624 461.376 263 431 263C400.624 263 376 287.624 376 318C376 348.376 400.624 373 431 373Z"
						fill="#12213E"
					/>
					<text id="Dividends" class="svgText"
						><tspan x="384.589" y="327.273">Dividends</tspan></text
					>
				</g>
			</g>
		</g></svg
	>
</div>

<style>
	@keyframes circleOpacity {
		0% {
			opacity: 0.85;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.85;
		}
	}
	@keyframes circleScale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}
	svg {
		width: 100%;
		height: auto;
	}
	.svgText {
		font-family: 'Public Sans', sans-serif;
		font-size: 20px;
		fill: #fff;
	}
	.svgCircle {
		transition: opacity 0.3s ease-in-out;
		opacity: 0.85;
	}
	.circle1 {
		fill: #12213e;
		animation: circleOpacity 2s ease-in-out;
	}
	.circle2 {
		fill: #12213e;
		animation: circleOpacity 2s ease-in-out;
		animation-delay: 1.5s;
	}
	.circle3 {
		fill: #12213e;
		animation: circleOpacity 2s ease-in-out;
		animation-delay: 3s;
	}
	.circle4 {
		fill: #12213e;
		animation: circleOpacity 2s ease-in-out;
		animation-delay: 4.5s;
	}
	.circle5 {
		fill: #12213e;
		animation: circleOpacity 2s ease-in-out;
		animation-delay: 6s;
	}
	.termNode {
		transform-origin: center;
	}
	.equityNode {
		animation: circleScale 2s ease-in-out;
	}
	.assetsNode {
		animation: circleScale 2s ease-in-out;
		animation-delay: 1.5s;
	}
	.valuationNode {
		animation: circleScale 2s ease-in-out;
		animation-delay: 3s;
	}
	.capitalNode {
		animation: circleScale 2s ease-in-out;
		animation-delay: 4.5s;
	}
	.dividendsNode {
		animation: circleScale 2s ease-in-out;
		animation-delay: 6s;
	}
</style>
