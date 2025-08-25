<script>
	import { Logo } from '$images';
</script>

<svelte:head>
	<title>Advisor Access - Under Construction | Bridge Capital</title>
	<meta
		name="description"
		content="Bridge Capital Advisor Access portal is currently under construction. We're working to bring you the best advisor experience."
	/>
</svelte:head>

<div class="headerContainer">
	<div class="logoContainer">
		<img src={Logo} alt="Bridge Capital Logo" class="logo" />
	</div>
</div>
<div class="constructionContainer">
	<div class="constructionContent">
		<div class="constructionMessage">
			<h1 class="constructionTitle">Under Construction</h1>
			<p class="constructionText">
				We're building something special for our advisors. Our new portal is in development and will
				provide enhanced access to tools, resources, and support.
			</p>
			<p class="constructionText">
				Please check back soon or contact your Bridge Capital representative for immediate
				assistance.
			</p>
		</div>

		<div class="constructionFeatures">
			<div class="feature">
				<div class="featureIcon">🔧</div>
				<h3 class="featureTitle">Enhanced Tools</h3>
				<p class="featureText">Access to advanced planning software and investment platforms</p>
			</div>
			<div class="feature">
				<div class="featureIcon">📊</div>
				<h3 class="featureTitle">Performance Analytics</h3>
				<p class="featureText">Comprehensive reporting and client performance insights</p>
			</div>
			<div class="feature">
				<div class="featureIcon">🤝</div>
				<h3 class="featureTitle">Support Network</h3>
				<p class="featureText">Direct access to our team of specialists and resources</p>
			</div>
		</div>
	</div>
</div>

<style>
	.headerContainer {
		background: #fff;
		min-height: 24vh;
		padding: 2rem;
		display: grid;
		place-items: center;
	}

	.constructionContainer {
		min-height: 100vh;
		background: var(--colorPrimary);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 2rem;
	}

	.constructionContent {
		max-width: 800px;
		text-align: center;
		color: #fff;
	}

	.logoContainer {
		width: calc(100% - 2rem);
		max-width: 500px;
		object-fit: contain;
	}

	.constructionMessage {
		margin-bottom: 4rem;
	}

	.constructionTitle {
		font-family: 'Montserrat', sans-serif;
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		background: linear-gradient(135deg, #fff, var(--colorSecondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.constructionText {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 1rem;
		color: var(--colorSecondary);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.constructionFeatures {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.feature {
		background: var(--SurfaceAlt);
		padding: 2rem;
		border-radius: var(--Radius);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition:
			transform 0.3s ease,
			border-color 0.3s ease;
	}

	.feature:hover {
		transform: translateY(-5px);
		border-color: var(--Accent);
	}

	.featureIcon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.featureTitle {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: #fff;
	}

	.featureText {
		font-family: 'Montserrat', sans-serif;
		font-size: 1rem;
		line-height: 1.5;
		color: var(--colorSecondary);
	}

	.contactInfo {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		padding-top: 2rem;
	}

	.contactText {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
		color: var(--colorSecondary);
	}

	.contactButton {
		display: inline-block;
		background: var(--Accent);
		color: #fff;
		padding: 1rem 2rem;
		border-radius: var(--Radius);
		text-decoration: none;
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.3s ease;
		border: 2px solid var(--Accent);
	}

	.contactButton:hover {
		background: transparent;
		color: var(--Accent);
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(42, 127, 255, 0.3);
	}

	@media (max-width: 768px) {
		.constructionContainer {
			padding: 1rem;
		}

		.constructionTitle {
			font-size: 2.5rem;
		}

		.constructionText {
			font-size: 1.1rem;
		}

		.constructionFeatures {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.feature {
			padding: 1.5rem;
		}
	}
</style>
