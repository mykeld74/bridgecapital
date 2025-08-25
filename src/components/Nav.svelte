<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let isMenuOpen = false;
	let hasScrolled = false;
	let isHomepage = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleScroll() {
		hasScrolled = typeof window !== 'undefined' ? window.scrollY > 4 : false;
	}

	function checkHomepage() {
		if (typeof window !== 'undefined') {
			isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';
		}
	}

	// Watch for page changes and update homepage status
	$: if ($page) {
		isHomepage = $page.url.pathname === '/';
	}

	onMount(() => {
		handleScroll();
		checkHomepage();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="navContainer" class:navScrolled={hasScrolled}>
	<div class="navContent">
		<div class="navMenu" class:navMenuOpen={isMenuOpen}>
			<a href="/" class="navLink" onclick={closeMenu}>Home</a>

			<a href="/advisor-access" class="navLink navLinkButton" onclick={closeMenu}>Advisor Access</a>
			<a href="/client-access" class="navLink navLinkButton" onclick={closeMenu}>Client Access</a>
		</div>

		<button
			class="navToggle"
			onclick={toggleMenu}
			aria-label="Toggle navigation menu"
			aria-expanded={isMenuOpen}
		>
			<span class="navToggleLine" class:navToggleLineHome={isHomepage}></span>
			<span class="navToggleLine" class:navToggleLineHome={isHomepage}></span>
			<span class="navToggleLine" class:navToggleLineHome={isHomepage}></span>
		</button>
	</div>
</nav>

<style>
	.navContainer {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: transparent;

		z-index: 1000;
		transition:
			background-color 0.25s ease,
			box-shadow 0.25s ease;
	}

	.navScrolled {
		background-color: #fff;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
	}

	.navContent {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 1rem 2rem;

		margin: 0 auto;
	}

	.navMenu {
		display: flex;
		align-items: center;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.navLink {
		color: var(--colorPrimary);
		text-decoration: none;
		font-weight: 500;
		font-size: 1rem;
		transition: color 0.3s ease;
		position: relative;
	}

	.navLink:hover {
		color: #a8b2c1;
	}

	.navLinkButton {
		background-color: #fff;
		color: #12213e;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		transition: all 0.3s ease;
		.navScrolled & {
			background-color: #12213e;
			color: #fff;
		}
	}

	.navLinkButton:hover {
		background-color: var(--colorSecondary);
		color: #12213e;
		transform: translateY(-1px);
	}

	.navLinkButton::after {
		display: none;
	}

	.navToggle {
		display: none;
		flex-direction: column;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		gap: 4px;
	}

	.navToggleLine {
		width: 25px;
		height: 3px;
		background-color: var(--colorPrimary);
		transition: all 0.3s ease;
		border-radius: 2px;
	}

	.navToggleLineHome {
		background-color: #fff;
		.navScrolled & {
			background-color: #12213e;
		}
	}

	@media (max-width: 768px) {
		.navContent {
			padding: 1rem;
		}

		.navMenu {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			background-color: rgba(18, 33, 62, 0.98);
			backdrop-filter: blur(15px);
			padding: 2rem 1rem;
			gap: 1.5rem;
			transform: translateY(-100%);
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s ease;
		}
		.navLink {
			color: #fff;
		}

		.navMenuOpen {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		.navToggle {
			display: flex;
		}

		.navLinkButton {
			width: 100%;
			text-align: center;
			background-color: #fff;
			color: #12213e;
			.navScrolled & {
				background-color: #fff;
				color: #12213e;
			}
		}
	}

	@media (max-width: 480px) {
		.navContent {
			padding: 0.75rem;
		}

		.navLogoImage {
			height: 32px;
		}
	}
</style>
