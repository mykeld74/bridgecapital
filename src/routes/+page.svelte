<script>
	import { Skyline2, Logo, LogoLetters } from '$images';
	import { Terms, Cards, LeaderCarousel } from '$components';
</script>

<div class="hero">
	<div class="heroVideo">
		<video src={Skyline2} autoplay loop muted playsinline class="skyline"></video>
	</div>
	<div class="heroContent">
		<div class="logoContainer"><img src={LogoLetters} alt="Bridge Capital Logo" /></div>
		<div class="heroText">
			<h1 class="heroTitle">Bridge Capital</h1>
		</div>
	</div>
</div>
<div class="whoWeAre whiteBg">
	<div class="whoWeAreContent">
		<div class="whoWeAreTextContainer">
			<h2 class="whoWeAreTitle">Who We Are</h2>
			<p class="whoWeAreText">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet tellus cras adipiscing
				enim eu turpis egestas. Bibendum arcu vitae elementum curabitur vitae nunc sed velit
				dignissim. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Laoreet sit
				amet cursus sit amet dictum sit amet justo. Laoreet sit amet cursus sit amet dictum sit amet
				justo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
		<div class="termsContainer">
			<Terms />
		</div>
	</div>
</div>
<div class="cards">
	<Cards />
</div>
<div class="leaderCarousel">
	<div class="leaderCarouselContainer">
		<h2 class="leaderCarouselTitle">Meet Our Team</h2>
		<LeaderCarousel />
	</div>
</div>

<style>
	.hero {
		display: grid;
		height: 44vh;
		max-height: 700px;
		overflow: hidden;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	.heroVideo {
		grid-column: 1;
		grid-row: 1;
		overflow: hidden;
		pointer-events: none;
		z-index: -1;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 1;
		}
	}

	.skyline {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.heroContent {
		grid-column: 1;
		grid-row: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		gap: 2rem;
	}
	.heroTitle {
		font-size: clamp(1.75rem, 5.5vw, 4.5rem);
		font-weight: 500;
		text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
		margin: 0;
		text-transform: uppercase;
	}
	.logoContainer {
		width: clamp(100px, 15vw, 250px);
	}
	.whoWeAre {
		font-family: 'Public Sans', sans-serif;
		padding: 4rem 0;
		container-name: whoWeAre;
		container-type: inline-size;
	}
	.whoWeAreTitle,
	.leaderCarouselTitle {
		font-size: clamp(2rem, 5.5vw, 3.5rem);
		font-weight: 600;
		text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.35);
		margin: 0;
		text-transform: uppercase;
	}
	.leaderCarouselTitle {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto 3rem;
	}
	.whoWeAreContent {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: 2rem;
		align-items: center;
		width: calc(100% - 1rem);
		max-width: 1200px;
		margin: 0 auto;
		@container whoWeAre (width < 600px) {
			grid-template-columns: 1fr;
		}
	}
	.leaderCarousel {
		padding: 4rem 0;
		background-color: #fff;
	}
</style>
