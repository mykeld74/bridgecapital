<script>
	import { createEventDispatcher } from 'svelte';

	const {
		image,
		name,
		role = 'Leader',
		description = '',
		ctaLabel = 'Learn More',
		href = '#'
	} = $props();

	let isHover = $state(false);

	// Create a custom event dispatcher
	const dispatch = createEventDispatcher();

	function handleLearnMoreClick() {
		dispatch('learnMore', { name, role, description });
	}
</script>

<div
	class="leaderCard"
	role="group"
	onmouseenter={() => (isHover = true)}
	onmouseleave={() => (isHover = false)}
	class:hover={isHover}
>
	<div class="cardInner">
		<div class="cardMedia">
			<img src={image} alt={name} />
		</div>
		<div class="cardBody">
			<div class="cardBodyContent">
				<div class="cardBodyContentHeader">
					<h3 class="name">{name}</h3>
					<p class="role">{@html role}</p>
				</div>

				<p class="description">{description}</p>

				<button class="ctaButton" onclick={handleLearnMoreClick}>{ctaLabel}</button>
			</div>
		</div>
	</div>
</div>

<style>
	.leaderCard {
		position: relative;
		overflow: hidden;
		max-width: 980px;

		transition:
			transform 300ms ease,
			box-shadow 300ms ease;
	}

	.cardInner {
		display: grid;
		grid-template-columns: 120px 120px 1fr;
		grid-template-rows: 40px 1fr 40px;
		align-items: stretch;
		gap: 0;
		height: 420px;
	}

	.cardMedia {
		position: relative;
		aspect-ratio: 1/1;
		width: 240px;
		height: 240px;
		grid-row: 2;
		grid-column: 1 / 3;
		border-radius: var(--Radius);
		overflow: hidden;
		align-self: center;
		box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.4);
	}

	.cardMedia img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.cardBody {
		padding: 40px 24px 28px 24px;
		display: grid;
		grid-template-columns: 120px 1fr;
		align-content: start;
		gap: 10px;
		grid-column: 2 / -1;
		grid-row: 1/-1;
		background: linear-gradient(147deg, var(--Surface) 0%, var(--SurfaceAlt) 74%);
		color: #fff;
		border-radius: var(--Radius);
		height: 100%;
		min-height: 100%;
	}

	.cardBodyContent {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100%;
		align-content: stretch;
		grid-column: 2 / -1;
		gap: 10px;
		align-content: start;
	}

	.name {
		margin: 0;
		font-size: 1.75rem;
		line-height: 1.2;
	}

	.role {
		margin: 0;
		opacity: 0.8;
	}

	.description {
		margin: 6px 0 10px 0;
		line-height: 1.55;
		opacity: 0.9;
	}

	.ctaButton {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 20px;
		border: none;
		border-radius: 999px;
		background: var(--Accent);
		color: #fff;
		text-decoration: none;
		font-weight: 600;
		transition:
			background-color 200ms ease,
			transform 200ms ease;
		width: fit-content;
	}

	.ctaButton:hover {
		transform: translateY(-1px);
		background: #1f6ae0;
	}

	/* Mobile: stack image on top, body below */
	@media (max-width: 768px) {
		.cardInner {
			display: block;
			height: fit-content;
		}

		.cardMedia {
			max-width: none;
			width: 100%;
			aspect-ratio: 16/9;
			border-radius: 10px 10px 0 0;
			overflow: hidden;
			margin: 0;
			box-shadow: none;
		}

		.cardBody {
			grid: unset;
			padding: 20px 20px 40px 20px;
			border-radius: 0 0 10px 10px;
			min-height: 560px;
		}

		.cardBodyContent {
			grid: unset;
		}
	}
</style>
