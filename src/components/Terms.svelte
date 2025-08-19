<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		// Set initial state for all nodes
		gsap.set('.termNode', { opacity: 0.85, scale: 1 });

		// Create timeline for continuous animations
		const tl = gsap.timeline({ repeat: -1 });

		// Animate each node with staggered timing
		const nodes = [
			'.equityNode',
			'.assetsNode',
			'.valuationNode',
			'.capitalNode',
			'.dividendsNode'
		];

		nodes.forEach((node, index) => {
			// Add animation for each node with staggered delay
			tl.to(
				node,
				{
					opacity: 1,
					scale: 1.05,
					duration: 2,
					ease: 'power2.inOut'
				},
				index * 2
			).to(
				node,
				{
					opacity: 0.85,
					scale: 1,
					duration: 2,
					ease: 'power2.inOut'
				},
				index * 2 + 2
			);
		});

		// Set the timeline duration to match the total cycle time
		tl.duration(10);

		// Set the timeline to repeat infinitely
		tl.repeat(-1);
	});
</script>

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
					<circle class="svgCircle circle1" cx="113.5" cy="182.5" r="58.5" fill="#12213E" />
					<text
						id="Equity"
						class="svgText"
						x="113.5"
						y="182.5"
						text-anchor="middle"
						dominant-baseline="middle">Impact</text
					>
				</g>
				<g class="assetsNode termNode">
					<circle class="svgCircle circle2" cx="133.5" cy="420.5" r="58.5" fill="#12213E" />
					<text
						id="Assets"
						class="svgText"
						x="133.5"
						y="420.5"
						text-anchor="middle"
						dominant-baseline="middle">Collaboration</text
					>
				</g>
				<g class="valuationNode termNode">
					<circle class="svgCircle circle3" cx="269.5" cy="300.5" r="58.5" fill="#12213E" />
					<text
						id="Valuation"
						class="svgText"
						x="269.5"
						y="300.5"
						text-anchor="middle"
						dominant-baseline="middle">Growth</text
					>
				</g>
				<g class="capitalNode termNode">
					<circle class="svgCircle circle4" cx="361.5" cy="93.5" r="58.5" fill="#12213E" />
					<text
						id="Capital"
						class="svgText"
						x="361.5"
						y="93.5"
						text-anchor="middle"
						dominant-baseline="middle">Innovation</text
					>
				</g>
				<g class="dividendsNode termNode">
					<circle class="svgCircle circle5" cx="431" cy="318" r="61" fill="#12213E" />
					<text
						id="Dividends"
						class="svgText"
						x="431"
						y="318"
						text-anchor="middle"
						dominant-baseline="middle">Differentiation</text
					>
				</g>
			</g>
		</g></svg
	>
</div>

<style>
	svg {
		width: 100%;
		height: auto;
	}
	.svgText {
		font-family: 'Public Sans', sans-serif;
		font-size: 16px;
		fill: #fff;
	}
	.svgCircle {
		transition: opacity 0.3s ease-in-out;
	}
	.circle1 {
		fill: #12213e;
	}
	.circle2 {
		fill: #12213e;
	}
	.circle3 {
		fill: #12213e;
	}
	.circle4 {
		fill: #12213e;
	}
	.circle5 {
		fill: #12213e;
	}
	.termNode {
		transform-origin: center;
	}
</style>
