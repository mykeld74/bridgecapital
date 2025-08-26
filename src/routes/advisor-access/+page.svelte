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
