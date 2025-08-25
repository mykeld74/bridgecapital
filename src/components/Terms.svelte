<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.termNode', { opacity: 0.85, scale: 1 });

		const tl = gsap.timeline({ repeat: -1 });

		const nodes = [
			'.impactNode',
			'.collaborationNode',
			'.growthNode',
			'.innovationNode',
			'.differentiationNode'
		];

		nodes.forEach((node, index) => {
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

		tl.duration(10);
		tl.repeat(-1);

		// Simple tooltip system
		const circles = document.querySelectorAll('.svgCircle');
		const texts = document.querySelectorAll('.svgText');
		let currentTooltip = null;

		// Ensure all tooltips are hidden on page load
		document.querySelectorAll('.tooltip').forEach((tooltip) => {
			tooltip.classList.remove('visible');
		});

		// Show tooltip
		const showTooltip = (nodeClass) => {
			if (currentTooltip === nodeClass) return;

			// Hide current tooltip
			if (currentTooltip) {
				const tooltip = document.querySelector(`[data-node="${currentTooltip}"]`);
				if (tooltip) tooltip.classList.remove('visible');
			}

			// Show new tooltip
			const tooltip = document.querySelector(`[data-node="${nodeClass}"]`);
			if (tooltip) {
				tooltip.classList.add('visible');
				currentTooltip = nodeClass;
			}
		};

		// Hide tooltip
		const hideTooltip = (nodeClass) => {
			if (currentTooltip === nodeClass) {
				const tooltip = document.querySelector(`[data-node="${nodeClass}"]`);
				if (tooltip) tooltip.classList.remove('visible');
				currentTooltip = null;
			}
		};

		// Add event listeners
		circles.forEach((circle) => {
			const parentGroup = circle.parentElement;
			const nodeClass = Array.from(parentGroup.classList).find((cls) => cls.endsWith('Node'));

			if (nodeClass) {
				circle.addEventListener('mouseenter', () => showTooltip(nodeClass));
				circle.addEventListener('mouseleave', () => hideTooltip(nodeClass));
				circle.addEventListener('touchstart', () => showTooltip(nodeClass));
			}
		});

		texts.forEach((text) => {
			const parentGroup = text.parentElement;
			const nodeClass = Array.from(parentGroup.classList).find((cls) => cls.endsWith('Node'));

			if (nodeClass) {
				text.addEventListener('mouseenter', () => showTooltip(nodeClass));
				text.addEventListener('mouseleave', () => hideTooltip(nodeClass));
				text.addEventListener('touchstart', () => showTooltip(nodeClass));
			}
		});

		// Hide tooltip after touch
		// document.addEventListener('touchend', () => {
		// 	setTimeout(() => {
		// 		if (currentTooltip) {
		// 			const tooltip = document.querySelector(`[data-node="${currentTooltip}"]`);
		// 			if (tooltip) tooltip.classList.remove('visible');
		// 			currentTooltip = null;
		// 		}
		// 	}, 3000);
		// });
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
				<g class="impactNode termNode">
					<circle class="svgCircle circle1" cx="113.5" cy="182.5" r="58.5" fill="#12213E" />
					<text
						id="Impact"
						class="svgText"
						x="113.5"
						y="182.5"
						text-anchor="middle"
						dominant-baseline="middle">Impact</text
					>
				</g>
				<g class="collaborationNode termNode">
					<circle class="svgCircle circle2" cx="133.5" cy="420.5" r="58.5" fill="#12213E" />
					<text
						id="Collaboration"
						class="svgText"
						x="133.5"
						y="420.5"
						text-anchor="middle"
						dominant-baseline="middle">Collaboration</text
					>
				</g>
				<g class="growthNode termNode">
					<circle class="svgCircle circle3" cx="269.5" cy="300.5" r="58.5" fill="#12213E" />
					<text
						id="Growth"
						class="svgText"
						x="269.5"
						y="300.5"
						text-anchor="middle"
						dominant-baseline="middle">Growth</text
					>
				</g>
				<g class="innovationNode termNode">
					<circle class="svgCircle circle4" cx="361.5" cy="93.5" r="58.5" fill="#12213E" />
					<text
						id="Innovation"
						class="svgText"
						x="361.5"
						y="93.5"
						text-anchor="middle"
						dominant-baseline="middle">Innovation</text
					>
				</g>
				<g class="differentiationNode termNode">
					<circle class="svgCircle circle5" cx="431" cy="318" r="61" fill="#12213E" />
					<text
						id="Differentiation"
						class="svgText"
						x="431"
						y="318"
						text-anchor="middle"
						dominant-baseline="middle">Differentiation</text
					>
				</g>
			</g>
		</g>
	</svg>

	<!-- HTML Tooltips -->
	<div class="tooltip impactTooltip" data-node="impactNode">
		<div class="tooltipContent">
			<p>
				Our partners put their clients' goals and interests first. With the plethora of the BCAP
				network and resources, clients can be assured they are getting the very best and advisors
				know their practices are always positioned to be the best. Our organization is also deeply
				committed to charitable activities in our local communities.
			</p>
		</div>
	</div>

	<div class="tooltip collaborationTooltip" data-node="collaborationNode">
		<div class="tooltipContent">
			<p>
				With a shared interest in the success of others, our advisors and partner firms are part of
				a unique culture of idea sharing and have access to an extensive amount of product and
				advanced market specialists for both wealth management and insurance programs. You are never
				alone.
			</p>
		</div>
	</div>

	<div class="tooltip growthTooltip" data-node="growthNode">
		<div class="tooltipContent">
			<p>
				Bridge Capital is rapidly expanding nationwide and not only brings extensive capital to
				monetize advisors, but thoughtful strategies that accelerate the potential of any wealth
				management or insurance practice. Our partners not only realize best values, but
				opportunities to expand their impact into the future.
			</p>
		</div>
	</div>

	<div class="tooltip innovationTooltip" data-node="innovationNode">
		<div class="tooltipContent">
			<p>
				With BCAP you will find cutting edge industry tools and resources that are a collection of
				the unique and best practices of our partner firms that utilize the latest industry
				technology and trends. We challenge traditional methods and seek new ideas, the status quo
				is never enough.
			</p>
		</div>
	</div>

	<div class="tooltip differentiationTooltip" data-node="differentiationNode">
		<div class="tooltipContent">
			<p>
				Advisors are challenged to find ways that they can distinguish themselves from the herd.
				BCAP is uniquely positioned to bring resources and tools to advisors that allow them to
				address expanding markets and navigate new complexities. The results are additional services
				being added to our partner practices.
			</p>
		</div>
	</div>
</div>

<style>
	.termsContainer {
		position: relative;
		width: 100%;
		max-width: 502px;
		margin: 0 auto;
	}

	svg {
		width: 100%;
		height: auto;
	}

	.svgText {
		font-family: 'Public Sans', sans-serif;
		font-size: 16px;
		fill: #fff;
		cursor: pointer;
		transition: fill 0.3s ease-in-out;
	}

	.svgText:hover {
		fill: #e0e0e0;
	}

	.svgCircle {
		transition: opacity 0.3s ease-in-out;
		cursor: pointer;
	}

	.svgCircle:hover {
		fill: #1a2f5a;
		outline: 2px solid #fff;
		outline-offset: 2px;
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

	/* Tooltip Styles */
	.tooltip {
		position: absolute;
		opacity: 0;
		visibility: hidden;
		z-index: 1000;
		pointer-events: none;
		max-width: 90vw;
		word-wrap: break-word;
		transition:
			opacity 0.2s ease-in-out,
			visibility 0.2s ease-in-out;
		&:global(.visible) {
			opacity: 1;
			visibility: visible;
		}
	}

	.tooltipContent {
		background: rgba(18, 33, 62, 0.95);
		color: white;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
		font-family: 'Public Sans', sans-serif;
		font-size: 14px;
		line-height: 1.5;
		max-width: 320px;
	}

	.tooltipContent p {
		margin: 0;
		color: #e0e0e0;
	}

	/* Tooltip Positioning */
	.impactTooltip {
		top: 120px;
		left: 200px;
		z-index: 500;
	}

	.collaborationTooltip {
		bottom: 120px;
		left: 200px;
		z-index: 9999;
	}

	.growthTooltip {
		top: 240px;
		left: 200px;
		z-index: 9999;
	}

	.innovationTooltip {
		top: 60px;
		left: 200px;
		z-index: 9999;
	}

	.differentiationTooltip {
		top: 260px;
		left: 200px;
		z-index: 9999;
	}

	/* Mobile responsive positioning */
	@media (max-width: 768px) {
		.tooltip {
			position: fixed;
			top: 50% !important;
			left: 50% !important;
			transform: translate(-50%, -50%);
			width: 90vw;
			max-width: 320px;
		}

		.tooltipContent {
			font-size: 16px;
			padding: 1.5rem;
		}
	}
</style>
