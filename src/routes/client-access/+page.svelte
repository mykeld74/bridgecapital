<script>
	import { Logo } from '$images';
</script>

<svelte:head>
	<title>Client Access - Under Construction | Bridge Capital</title>
	<meta
		name="description"
		content="Bridge Capital Client Access portal is currently under construction. We're working to bring you the best client experience."
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
				We're building something special for our clients. Our new portal is in development and will
				provide enhanced access to your portfolio, planning tools, and financial insights.
			</p>
			<p class="constructionText">
				Please check back soon or contact your Bridge Capital advisor for immediate assistance.
			</p>
		</div>

		<div class="constructionFeatures">
			<div class="feature">
				<div class="featureIcon">📈</div>
				<h3 class="featureTitle">Portfolio Dashboard</h3>
				<p class="featureText">
					Real-time portfolio performance and comprehensive investment tracking
				</p>
			</div>
			<div class="feature">
				<div class="featureIcon">📋</div>
				<h3 class="featureTitle">Financial Planning</h3>
				<p class="featureText">Interactive tools for goal setting and financial planning</p>
			</div>
			<div class="feature">
				<div class="featureIcon">📱</div>
				<h3 class="featureTitle">Mobile Access</h3>
				<p class="featureText">Secure access to your financial information on any device</p>
			</div>
		</div>
	</div>
</div>
