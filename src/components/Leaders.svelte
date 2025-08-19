<script>
	import LeaderCard from './LeaderCard.svelte';
	import { Crawford, Fry, Phelan } from '$images';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Pagination, EffectFade, Mousewheel } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/effect-fade';

	const leaders = [
		{
			image: Crawford,
			name: 'Scott L. Crawford',
			role: 'Chief Executive Officer',
			description:
				'Scott is a seasoned leader with more than four decades of distinguished experience in the securities industry. As Chief Executive Officer of Bridge Capital, he brings a proven record of building and scaling organizations, recruiting and developing top talent, and driving sustainable growth across multiple market cycles.'
		},
		{
			image: Fry,
			name: 'Cary Fry, MBA, CLU, CHFC, CMFC',
			role: 'Head of Distribution, Bridge Capital<br/> President, Bridge Capital Insurance',
			description:
				'Cary serves as the lead for all distribution and insurance activities at Bridge Capital. In this role, he is responsible for strategy development to support Bridge Capital partners with transitions and growth objectives.'
		},
		{
			image: Phelan,
			name: 'Damon Phelan',
			role: 'Senior Vice President, Growth and Development',
			description:
				'Damon is a trusted leader who has a track record of high-level relationship building, intuitive personal coaching, and measured results.'
		}
	];

	onMount(() => {
		const swiper = new Swiper('.leaderSlider', {
			modules: [Pagination, EffectFade, Mousewheel],
			spaceBetween: 30,
			effect: 'fade',
			loop: true,
			mousewheel: { invert: false },
			allowTouchMove: true,
			touchRatio: 1,
			threshold: 5,
			pagination: {
				el: '.leaderSliderPagination',
				clickable: true
			}
		});
	});
</script>

<div class="leaderSlider swiper">
	<div class="leaderSliderWrapper swiper-wrapper">
		{#each leaders as leader}
			<div class="leaderSliderItem swiper-slide">
				<div class="leaderSliderCard">
					<LeaderCard {...leader} />
				</div>
			</div>
		{/each}
	</div>
	<div class="leaderSliderPagination swiper-pagination"></div>
</div>

<style>
	.leaderSlider {
		width: 95%;
		position: relative;
		max-width: 1100px;
		margin: auto;
		background: #fff;

		padding: 25px;
		border-radius: 25px;
		height: 420px;
	}

	@media screen and (max-width: 992px) {
		.leaderSlider {
			max-width: 880px;
			height: 420px;
		}
	}

	@media screen and (max-width: 768px) {
		.leaderSlider {
			min-height: 520px;
			height: auto;
			margin: 60px auto;
		}
	}

	.leaderSliderItem {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 768px) {
		.leaderSliderItem {
			flex-direction: column;
		}
	}

	.leaderSliderCard {
		width: 100%;
	}

	.leaderSliderPagination {
		position: absolute;
		z-index: 21;
		right: 20px;
		width: 11px !important;
		text-align: center;
		left: auto !important;
		top: 50%;
		bottom: auto !important;
		transform: translateY(-50%);
	}

	@media screen and (max-width: 768px) {
		.leaderSliderPagination {
			transform: translateX(-50%);
			left: 50% !important;
			top: 205px;
			width: 100% !important;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.leaderSliderPagination:global(.swiper-pagination-bullets) :global(.swiper-pagination-bullet) {
		margin: 8px 0;
	}

	@media screen and (max-width: 768px) {
		.leaderSliderPagination:global(.swiper-pagination-bullets) :global(.swiper-pagination-bullet) {
			margin: 0 5px;
		}
	}

	.leaderSliderPagination :global(.swiper-pagination-bullet) {
		width: 11px;
		height: 11px;
		display: block;
		border-radius: 10px;
		background: #062744;
		opacity: 0.2;
		transition:
			height 0.3s ease,
			width 0.3s ease,
			background-color 0.3s ease,
			opacity 0.3s ease;
		border: none;
		cursor: pointer;
	}

	.leaderSliderPagination :global(.swiper-pagination-bullet-active) {
		opacity: 1;
		background: #12213e;
		height: 30px;
	}

	/* Horizontal style for small screens */
	@media screen and (max-width: 768px) {
		.leaderSliderPagination :global(.swiper-pagination-bullet-active) {
			height: 11px;
			width: 30px;
		}
	}
</style>
