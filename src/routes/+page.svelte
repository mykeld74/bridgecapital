<script>
	import { Skyline, Logo, LogoLetters } from '$images';
	import { Terms, Cards, LeaderCarousel, Leaders } from '$components';
</script>

<svelte:head>
	<title>Bridge Capital</title>
	<meta
		name="description"
		content="Bridge Capital is an aggregator of investment advisors that provides comprehensive wealth management services."
	/>
	<meta
		name="keywords"
		content="Bridge Capital, investment advisors, wealth management, financial planning, insurance, estate planning, family office services, alternative asset classes"
	/>
	<meta name="author" content="Bridge Capital" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
</svelte:head>

<div class="hero">
	<div class="heroVideo">
		<video src={Skyline} autoplay loop muted playsinline class="skyline"></video>
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
			<h2 class="whoWeAreTitle">About Us</h2>
			<p class="whoWeAreText">
				Bridge Capital is an aggregator of investment advisors that provides comprehensive wealth
				management services, including investment management, financial planning, insurance, estate
				planning, family office services, alternative asset classes, and more.
			</p>
			<p class="whoWeAreText">
				Bridge Capital is a mission-driven organization endeavors to provide the highest caliber of
				financial services accompanied with industry-leading hospitality and customer service. At
				its core, Bridge Capital was built to serve its most important stakeholders: the clients and
				the advisors.
			</p>
			<p class="whoWeAreText">
				In addition to its core product offerings, Bridge Capital uniquely partners and invests in
				mall-to-mid-scale firm and advisors. Everyone at Bridge Capital has an interest in the
				success of the associated firms and advisors which produces a unique culture of
				collaboration that emphasizes growth.
			</p>
		</div>
		<div class="termsContainer">
			<Terms />
		</div>
	</div>
</div>
<div class="cards"></div>
<div class="leaderCarousel">
	<div class="leaderCarouselContainer">
		<h2 class="leaderCarouselTitle">Meet Our Team</h2>
		<Leaders />
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
