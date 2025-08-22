<script>
	import { Skyline, Logo, LogoLetters, Map } from '$images';
	import { Terms, Cards, LeaderCarousel, Leaders } from '$components';

	let contactUsModal;

	function openContactUsModal() {
		if (contactUsModal?.showModal) {
			contactUsModal.showModal();
		} else {
			contactUsModal.open = true;
		}
	}
	function closeContactUsModal() {
		contactUsModal.close();
	}
</script>

<svelte:head>
	<title>Bridge Capital</title>
	<meta
		name="description"
		content="Bridge Capital is a mission-driven aggregator of investment advisors providing comprehensive wealth management services across 28 states. We offer investment management, financial planning, insurance, estate planning, family office services, and alternative asset classes with industry-leading hospitality and over $8 billion in assets under management."
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
<div class="whyBridge">
	<div class="whyBridgeContent">
		<h2 class="whyBridgeTitle">Why Bridge Capital?</h2>
		<!-- <p class="whyBridgeText">
			Bridge Capital operates a nationwide footprint to deliver best-in-class services to its
			advisors and client utilizing a hub-and-spoke model with centralized corporate office
			functions. Bridge Capital is building out and operating in key geographic corridors in the
			United States with advisors and insurance specialists currently located in 28 states with
			clients located in each of the 50 states and more than $8 billion in assets under management.
			(SEE MAP EXAMPLE BELOW-I’D LIKE TO SHADE IN THE STATES WHERE WE HAVE LOCATIONS RATHER THAN
			THIS EXAMPLE WITH CITY LOCATIONS—STATES TO SHADE Arizona, California, Colorado, Connecticut,
			Georgia, Florida, Hawaii, Illinois, Indiana, Iowa, Kansas, Kentucky, Maryland, Massachusetts,
			Michigan, Minnesota, Missouri, Nebraska, Nevada, North Carolina, New Jersey, New York, Ohio,
			Oklahoma, Pennsylvania, South Carolina, Tennessee, Texas).
		</p>
		<p class="whyBridgeText">
			At Bridge Capital, all affiliates are fully aligned with the success of the organization. This
			creates a unique culture of collaboration and synergy which helps support our rapid growth.
			The company is led by seasoned management that bring unique experiences and perspectives that
			are unparalleled in the industry.
		</p>
		<p class="whyBridgeText">
			BCAP empowers advisors to focus on delivering industry-leading advice, platforms and
			technology that creates differentiation and value to their clients. Clients work with BCAP’s
			advisors and deep bench of support to ensure a streamlined experience.
		</p>
		<p class="whyBridgeText">
			Bridge Capital is committed to impact beyond our affiliates and their clients that includes a
			Foundation to partner with our associates to affect causes that are important to them and the
			communities we live in.
		</p> -->
		<Cards />

		<div class="whyBridgeMapContainer">
			<p class="whyBridgeMapText">Advisor Locations</p>
			<img src={Map} alt="Bridge Capital Map" class="whyBridgeMap" />
			<!-- <div class="mapLegend">
				<p class="mapKey operatingStates">Operating States</p>
				<p class="mapKey nonOperatingStates">Non-Operating States</p>
			</div> -->
		</div>
	</div>
</div>
<div class="leaderCarousel">
	<div class="leaderCarouselContainer">
		<h2 class="leaderCarouselTitle">Meet Our Team</h2>
		<Leaders />
	</div>
</div>
<div class="contactUs">
	<div class="contactUsButtonContainer">
		<button class="contactUsButton" onclick={openContactUsModal}>Contact Us</button>
	</div>
</div>

<dialog
	id="contactUsModal"
	bind:this={contactUsModal}
	onclick={(e) => e.target === contactUsModal && contactUsModal.close()}
>
	<div class="contactUsModalContent">
		<button
			type="button"
			class="contactUsModalClose"
			aria-label="Close"
			onclick={() => contactUsModal.close()}>&times;</button
		>
		<h2 class="contactUsModalTitle">Contact Us</h2>
		<p class="contactUsModalText">Please fill out the form below to contact us.</p>
		<form class="contactUsModalForm">
			<label for="name">Name</label>
			<input type="text" placeholder="Name" id="name" name="name" />
			<label for="email">Email</label>
			<input type="email" placeholder="Email" id="email" name="email" />
			<label for="phone">Phone</label>
			<input type="tel" placeholder="Phone" id="phone" name="phone" />
			<label for="message">Message</label>
			<textarea placeholder="Message" id="message" name="message"></textarea>
			<button type="submit" class="contactUsModalButton">Submit</button>
		</form>
	</div>
</dialog>

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
	.leaderCarouselTitle,
	.whyBridgeTitle {
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
	.whyBridge {
		padding: 4rem 0;
		color: #fff;
		width: calc(100% - 1rem);
		max-width: 1200px;
		margin: 0 auto;
	}

	.whyBridgeMapContainer {
		width: calc(100% - 1rem);
		max-width: 700px;
		margin: 0 auto;
	}
	.whyBridgeMapText {
		font-size: 1.5rem;
		font-weight: 600;
		text-align: center;
		margin: 20px 0;
	}
	.mapKey {
		margin: 0;
	}
	.mapLegend {
		margin-top: 20px;
	}
	.operatingStates:before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 16px;
		background-color: #767676;
		margin-right: 10px;
	}
	.nonOperatingStates:before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 16px;
		background-color: #d0d0d0;
		margin-right: 10px;
	}

	/* Contact Us section */
	.contactUs {
		padding: 3rem 0 4rem;
		background-color: #fff;
	}
	.contactUsButtonContainer {
		display: flex;
		justify-content: center;
	}
	.contactUsButton {
		width: 300px;
		height: 70px;
		appearance: none;
		border: none;
		border-radius: 10px;

		background-color: #12213e;
		color: #fff;
		padding: 0.9rem 1.5rem;
		font-size: 2rem;
		font-weight: 600;
		cursor: pointer;
		box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
		transition:
			transform 120ms ease,
			box-shadow 120ms ease,
			background-color 120ms ease;
	}
	.contactUsButton:hover {
		transform: translateY(-1px);
		box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
		background-color: #0e1b33;
	}
	.contactUsButton:active {
		transform: translateY(0);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
	}

	#contactUsModal {
		padding: 0;
		border: none;
		border-radius: 14px;
		width: min(92vw, 560px);
		opacity: 1;
		background: #ffffff;
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
		transition-behavior: allow-discrete;
		transition-delay: 100ms;
		transition: all 200ms ease-in-out;
		@starting-style {
			transform: translateY(200px);
			opacity: 0;
		}
	}
	#contactUsModal::backdrop {
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(2px);
		transition-behavior: allow-discrete;
		transition: all 200ms ease-in-out;
		@starting-style {
			background: rgba(0, 0, 0, 0);
			backdrop-filter: blur(0px);
		}
	}
	.contactUsModalContent {
		position: relative;
		padding: 1.5rem;
		display: grid;
		gap: 0.9rem;
		font-family: 'Public Sans', sans-serif;
	}
	.contactUsModalClose {
		position: absolute;
		top: 10px;
		right: 10px;
		border: none;
		background: transparent;
		font-size: 1.5rem;
		line-height: 1;
		cursor: pointer;
		color: #6b7280;
	}
	.contactUsModalClose:hover {
		color: #111827;
	}
	.contactUsModalTitle {
		margin: 0 0 0.25rem;
		font-size: 1.5rem;
		font-weight: 600;
		text-transform: uppercase;
	}
	.contactUsModalText {
		margin: 0 0 0.75rem;
		color: #374151;
	}
	.contactUsModalForm {
		display: grid;
		gap: 0.75rem;
	}
	.contactUsModalForm label {
		font-weight: 600;
		font-size: 0.95rem;
	}
	.contactUsModalForm input,
	.contactUsModalForm textarea {
		width: 100%;
		padding: 0.7rem 0.8rem;
		border: 1px solid #d1d5db;
		border-radius: 10px;
		font-size: 1rem;
		font-family: inherit;
		outline: none;
		background: #fff;
	}
	.contactUsModalForm textarea {
		min-height: 110px;
		resize: vertical;
	}
	.contactUsModalForm input:focus,
	.contactUsModalForm textarea:focus {
		border-color: #12213e;
		box-shadow: 0 0 0 3px rgba(18, 33, 62, 0.15);
	}
	.contactUsModalButton {
		margin-top: 0.5rem;
		appearance: none;
		border: none;
		border-radius: 10px;
		background-color: #12213e;
		color: #fff;
		padding: 0.9rem 1.2rem;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
	}
	.contactUsModalButton:hover {
		background-color: #0e1b33;
	}
</style>
