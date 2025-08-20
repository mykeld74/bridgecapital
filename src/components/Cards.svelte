<script>
	const cards = [
		{
			id: 1,
			title: 'Nationwide Footprint',
			content:
				'Bridge Capital operates a nationwide footprint to deliver best-in-class services to its advisors and client utilizing a hub-and-spoke model with centralized corporate office functions. Bridge Capital is building out and operating in key geographic corridors in the United States with advisors and insurance specialists currently located in 28 states with clients located in each of the 50 states and more than $8 billion in assets under management. '
		},
		{
			id: 2,
			title: 'Aligned for Growth',
			content:
				'At Bridge Capital, all affiliates are fully aligned with the success of the organization. This creates a unique culture of collaboration and synergy which helps support our rapid growth. The company is led by seasoned management that bring unique experiences and perspectives that are unparalleled in the industry.'
		},
		{
			id: 3,
			title: 'Advisory Excellence',
			content:
				'BCAP empowers advisors to focus on delivering industry-leading advice, platforms and technology that creates differentiation and value to their clients. Clients work with BCAP’s advisors and deep bench of support to ensure a streamlined experience.'
		},
		{
			id: 4,
			title: 'Giving Back',
			content:
				'Bridge Capital is committed to impact beyond our affiliates and their clients that includes a Foundation to partner with our associates to affect causes that are important to them and the communities we live in.'
		}
	];
</script>

<div class="wrapper">
	<div class="container">
		{#each cards as card}
			<input type="radio" name="slide" id={`c${card.id}`} checked={card.id === 1 ? true : false} />
			<label for={`c${card.id}`} class={`card card${card.id}`}>
				<!-- <div class="icon">{card.id}</div> -->
				<div class="description">
					<p>{card.content}</p>
				</div>
				<div class="cardTitle"><h4>{card.title}</h4></div>
			</label>
		{/each}
	</div>
</div>

<style>
	@keyframes gradient {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 100%;
		}
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}

	.container {
		height: 400px;
		display: flex;

		flex-wrap: no-wrap;
		justify-content: flex-start;
		@media (max-width: 768px) {
			flex-wrap: wrap;
			height: fit-content;
		}
	}
	.card {
		position: relative;
		width: 80px;
		border-radius: var(--radius-2);
		background-size: cover;
		cursor: pointer;
		margin: 0 10px;
		transition: width 0.6s ease-in-out;
		box-shadow: var(--shadow-3);
		overflow: clip;
		color: #fff;
		@media (max-width: 768px) {
			width: 100%;
			height: 80px;
		}

		> .description {
			overflow: clip;
			opacity: 0;
			transition: all 0.3s var(--ease-out-1);
			transition-delay: 0.15s;
			@media (max-width: 768px) {
				transition-delay: 0s;
			}
		}
	}

	.cardTitle {
		position: absolute;
		bottom: 0.5rem;
		left: 2.5rem;
		transform-origin: left;
		rotate: -90deg;
		transition: rotate 0.3s var(--ease-out-1);
		white-space: nowrap;
		font-size: 1.5rem;
		font-weight: 600;
		@media (max-width: 768px) {
			rotate: 0deg;
			top: 0.5rem;
			left: 1rem;
			text-decoration: underline;
		}
		h4 {
			margin: 0;
		}
	}
	.description {
		width: calc(100% - 2rem);
		height: calc(100% - 4rem);
		margin: 2rem auto;
		p {
			padding-top: 5px;
			margin: 0;
		}
		h4 {
			margin: 0;
			text-transform: uppercase;
		}
	}
	input {
		display: none;
	}
	input:checked + label {
		width: 600px;

		box-shadow: var(--shadow-5);
		@media (max-width: 768px) {
			height: fit-content;
			width: 100%;
		}

		> .description {
			transition-delay: 0.25s;
			opacity: 1;
			transform: translateX(0px);
		}
		> .cardTitle {
			rotate: 0deg;
		}
	}

	.card1 {
		background: var(--gradient-23);
	}
	.card2 {
		background: var(--gradient-23);
	}
	.card3 {
		background: var(--gradient-23);
	}
	.card4 {
		background: var(--gradient-23);
	}
</style>
