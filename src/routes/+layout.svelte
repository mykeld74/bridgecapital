<script>
	let { data, children } = $props();
	import '$css/reset.css';
	import '$css/styles.css';
	import { Nav } from '$components';
</script>

<svelte:head>
	<title>Bridge Capital</title>
	<meta name="description" content="Bridge Capital" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#12213e" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-title" content="Bridge Capital" />
</svelte:head>

<Nav />

{@render children()}

<footer>
	<div class="footerContainer">
		<div class="footerContent">&copy; 2025 Bridge Capital. All rights reserved.</div>
	</div>
</footer>

<style>
	footer {
		background-color: #12213e;
		color: #fff;
		padding: 20px;
		text-align: right;
		font-size: 0.8rem;
	}
</style>
