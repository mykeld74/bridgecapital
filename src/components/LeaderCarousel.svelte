<script>
	import { fade } from 'svelte/transition';
	import { Crawford, Fry, Phelan } from '$images';

	const slides = [
		{
			image: Crawford,
			name: 'Scott L. Crawford',
			role: 'Chief Executive Officer',
			description:
				'Scott is a seasoned leader with more than four decades of distinguished experience in the securities industry. As Chief Executive Officer of Bridge Capital, he brings a proven record of building and scaling organizations, recruiting and developing top talent, and driving sustainable growth across multiple market cycles.',
			fulldescription:
				"<p>Scott is a seasoned leader with more than four decades of distinguished experience in the securities industry. As Chief Executive Officer of Bridge Capital, he brings a proven record of building and scaling organizations, recruiting and developing top talent, and driving sustainable growth across multiple market cycles.</p><p>Over the course of his career, Scott has held senior leadership roles at Ameriprise Financial, Wunderlich Securities, Oppenheimer & Co., Merrill Lynch, and Morgan Stanley. He has consistently delivered measurable results, including leading one of Morgan Stanley's most productive offices, elevating Merrill Lynch's Chicago South Complex to record-breaking performance, and spearheading acquisitions and advisor retention initiatives at Ameriprise. His expertise spans full P&L management, strategic recruiting, advisor development, and large-scale integration of financial practices.</p><p>At Bridge Capital, Scott's vision is to create the leading aggregator of RIAs and financial professionals by marrying integrity, experience, and forward-thinking innovation. Under his leadership, the firm is committed to delivering succession solutions for advisors, leveraging technology to enhance client outcomes, and fostering a culture defined by trust, excellence, and long-term growth.</p><p>Scott graduated in Accounting from Auburn University. Residing in the Chicago area, he and his wife have raised six children and delight in time spent with their seven grandchildren.</p>"
		},
		{
			image: Fry,
			name: 'Cary Fry, MBA, CLU, CHFC, CMFC',
			role: 'Head of Distribution, Bridge Capital<br/> President, Bridge Capital Insurance',
			description:
				'Cary serves as the lead for all distribution and insurance activities at Bridge Capital. In this role, he is responsible for strategy development to support Bridge Capital partners with transitions and growth objectives.',
			fulldescription:
				"<p>Cary serves as the lead for all distribution and insurance activities at Bridge Capital. In this role, he is responsible for strategy development to support Bridge Capital partners with transitions and growth objectives.</p><p>Cary's professional experience includes 30 years in the financial services industry in both agency and independent life insurance and wealth management systems including advanced planning and high net-worth clients. He most recently founded and led his own consulting company that focused on transition planning for business owners that included insurance design and M & A activities after serving as Senior Vice President for a producer group of elite financial advisors. His unique perspectives and broad experiences allow him to anticipate needs and help professional advisors bring additional value to their clients.</p><p>Cary resides in the Denver, CO area with his wife Julie and spends much of his free time as a NCAA College Football Official. He is also an Adjunct Professor for The College for Financial Planning where he teaches various certifications and master's degree courses, as well as develops curriculum. Cary is an accomplished golfer and directs his passions toward playing music at church, fitness, outdoor activities, and being a father to two adult children.</p>"
		},
		{
			image: Phelan,
			name: 'Damon Phelan',
			role: 'Senior Vice President, Growth and Development',
			description:
				'Damon is a trusted leader who has a track record of high-level relationship building, intuitive personal coaching, and measured results.',
			fulldescription:
				'<p>Damon brings over three decades of proven success in building, training, and developing advisors, sales teams, and sales leaders.  Focusing on dynamic practice management systems, he has a history of being able to scale sales (individual and enterprise) through well-defined systems, process, and infrastructure. Damon is a trusted leader who has a track record of high-level relationship building, intuitive personal coaching, and measured results.</p><p>A graduate of Colgate University, Damon was a record setting three year starting quarterback for the Raiders. Married to Shauna and a father of five, he lives in Hinsdale, IL. As a youth football and baseball coach, he has guided his squads to a BGYFL Super Bowl victory, as well as a Cooperstown Baseball Championship and Participation in the Little League World Series in Williamsport, PA.</p>'
		}
	];

	let currentSlide = $state(0);

	const nextSlide = () => {
		currentSlide = (currentSlide + 1) % slides.length;
	};

	const prevSlide = () => {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	};
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
