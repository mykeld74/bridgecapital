<script>
	import { fade } from 'svelte/transition';
	import { Michael, Dwight, Jim, Chevron } from '$images';

	const slides = [
		{
			image: Michael,
			name: 'Michael Scott',
			description:
				'Michael Scott is the regional manager of Dunder Mifflin Scranton. He is known for his leadership skills and his ability to make people laugh.'
		},
		{
			image: Dwight,
			name: 'Dwight Schrute',
			description:
				'Dwight Schrute is the assistant to the regional manager of Dunder Mifflin Scranton. He is a very good salesman. '
		},
		{
			image: Jim,
			name: 'Jim Halpert',
			description:
				'Jim Halpert is the sales representative of Dunder Mifflin Scranton. He is a salesman and a very good friend of Michael Scott.'
		}
	];

	let currentSlide = $state(0);

	const nextSlide = () => {
		currentSlide = (currentSlide + 1) % slides.length;
	};

	const prevSlide = () => {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	};

	$inspect('Current slide:', currentSlide);
</script>

<div class="carousel">
	<div class="carouselInner">
		<div class="buttonContainer">
			<button onclick={prevSlide} class="button previousButton"></button>
		</div>
		<div class="slidesContainer">
			<ul class="slides">
				{#each slides as slide, index}
					{#if currentSlide === index}
						<li class="slideContainer">
							<div class="slideContent" transition:fade={{ duration: 200 }}>
								<div class="slideImage">
									<img src={slide.image} alt={slide.name} />
								</div>
								<div class="slideText">
									<h2>{slide.name}</h2>
									<p>{slide.description}</p>
								</div>
							</div>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
		<div class="buttonContainer">
			<button onclick={nextSlide} class="button nextButton"></button>
		</div>
	</div>
</div>

<style>
	.carousel {
		width: calc(100% - 4rem);
		max-width: 1100px;
		height: 340px;
		overflow: hidden;
		margin: 0 auto;
		padding: 20px;
	}

	.carouselInner {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: 1fr;
		height: 100%;
		align-items: center;
		gap: 1rem;
	}

	.buttonContainer {
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 0.5rem;
		z-index: 2;
	}

	.slidesContainer {
		height: 100%;
		position: relative;
		overflow: hidden;
		border: 4px solid #ccc;
		border-radius: 10px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
	}

	.slideContent {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'image text';

		height: 100%;

		overflow: hidden;
	}

	.slides {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'slides';
		padding: 0;
		height: 100%;
		margin: 0;
		list-style: none;
	}

	.slideImage {
		display: block;
		width: 190px;
		aspect-ratio: 1/1;
		border-radius: 50vw;
		overflow: hidden;
		margin: 1rem;
	}

	.slideImage img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.slideContainer {
		width: 100%;
		height: 300px;
		overflow: hidden;
	}

	.button {
		position: relative;
		background: none;
		cursor: pointer;
		color: #000;
		transition: color 0.3s ease;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: 2px solid #000;
		display: grid;
		place-items: center;
		background: url('../images/ChevronWide.svg') no-repeat center center / 40%;
	}
	.previousButton {
		transform: rotate(180deg);
	}

	.button:hover {
		color: #666;
	}

	.slideText {
		padding: 2rem;
	}

	.slideText h2 {
		margin: 0 0 1rem 0;
		font-size: 2rem;
	}

	.slideText p {
		margin: 0;
		line-height: 1.5;
	}
</style>
