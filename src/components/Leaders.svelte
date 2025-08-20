<script>
	import { fade, fly } from 'svelte/transition';
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
				'Scott is a seasoned leader with more than four decades of distinguished experience in the securities industry. As Chief Executive Officer of Bridge Capital, he brings a proven record of building and scaling organizations, recruiting and developing top talent, and driving sustainable growth across multiple market cycles.',
			fulldescription:
				"<p>Scott is a seasoned leader with more than four decades of distinguished experience in the securities industry. As Chief Executive Officer of Bridge Capital, he brings a proven record of building and scaling organizations, recruiting and developing top talent, and driving sustainable growth across multiple market cycles.</p><p>Over the course of his career, Scott has held senior leadership roles at Ameriprise Financial, Wunderlich Securities, Oppenheimer & Co., Merrill Lynch, and Morgan Stanley. He has consistently delivered measurable results, including leading one of Morgan Stanley's most productive offices, elevating Merrill Lynch's Chicago South Complex to record-breaking performance, and spearheading acquisitions and advisor retention initiatives at Ameriprise. His expertise spans full P&L management, strategic recruiting, advisor development, and large-scale integration of financial practices.</p><p>At Bridge Capital, Scott's vision is to create the leading aggregator of RIAs and financial professionals by marrying integrity, experience, and forward-thinking innovation. Under his leadership, the firm is committed to delivering succession solutions for advisors, leveraging technology to enhance client outcomes, and fostering a culture defined by trust, excellence, and long-term growth.</p><p>Scott graduated in Accounting from Auburn University. Residing in the Chicago area, he and his wife have raised six children and delight in time spent with their seven grandchildren.</p>"
		},
		{
			image: Fry,
			name: 'Cary Fry, MBA, CLU, CHFC, CMFC',
			role: 'Head of Distribution, Bridge Capital<br/> President, Bridge Capital Insurance',
			description:
				'Cary serves as the lead for all distribution and insurance activities at Bridge Capital. In this role, he is responsible for strategy development to support Bridge Capital partners with transitions and growth objectives.',
			fulldescription:
				"<p>Cary serves as the lead for all distribution and insurance activities at Bridge Capital. In this role, he is responsible for strategy development to support Bridge Capital partners with transitions and growth objectives.</p><p>Cary's professional experience includes 30 years in the financial services industry in both agency and independent life insurance and wealth management systems including advanced planning and high net-worth clients. He most recently founded and led his own consulting company that focused on transition planning for business owners that included insurance design and M & A activities after serving as Senior Vice President for a producer group of elite financial advisors. His unique perspectives and broad experiences allow him to anticipate needs and help professional advisors bring additional value to their clients.</p><p>Cary resides in the Denver, CO area with his wife Julie and spends much of his free time as a NCAA College Football Official. He is also an Adjunct Professor for The College for Financial Planning where he teaches various certifications and master's degree courses, as well as develops curriculum. Cary is an accomplished golfer and directs his passions toward playing music at church, fitness, outdoor activities, and being a father to two adult children.</p>"
		},
		{
			image: Phelan,
			name: 'Damon Phelan',
			role: 'Senior Vice President, Growth and Development',
			description:
				'Damon is a trusted leader who has a track record of high-level relationship building, intuitive personal coaching, and measured results.',
			fulldescription:
				'<p>Damon brings over three decades of proven success in building, training, and developing advisors, sales teams, and sales leaders.  Focusing on dynamic practice management systems, he has a history of being able to scale sales (individual and enterprise) through well-defined systems, process, and infrastructure. Damon is a trusted leader who has a track record of high-level relationship building, intuitive personal coaching, and measured results.</p><p>A graduate of Colgate University, Damon was a record setting three year starting quarterback for the Raiders. Married to Shauna and a father of five, he lives in Hinsdale, IL. As a youth football and baseball coach, he has guided his squads to a BGYFL Super Bowl victory, as well as a Cooperstown Baseball Championship and Participation in the Little League World Series in Williamsport, PA.</p>'
		}
	];

	// Modal state
	let isModalOpen = $state(false);
	let selectedLeader = $state(null);
	let modalElement;

	// Handle learn more click from LeaderCard
	function handleLearnMore(event) {
		const leaderData = event.detail;
		selectedLeader = leaders.find((leader) => leader.name === leaderData.name);
		isModalOpen = true;
	}

	// Close modal
	function closeModal() {
		isModalOpen = false;
		selectedLeader = null;
	}

	// Handle backdrop click
	function handleBackdropClick(event) {
		if (event.target === modalElement) {
			closeModal();
		}
	}

	// Handle escape key
	function handleKeydown(event) {
		if (event.key === 'Escape' && isModalOpen) {
			closeModal();
		}
	}

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

		// Add event listener for escape key
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="leaderSlider swiper">
	<div class="leaderSliderWrapper swiper-wrapper">
		{#each leaders as leader}
			<div class="leaderSliderItem swiper-slide">
				<div class="leaderSliderCard">
					<LeaderCard {...leader} on:learnMore={handleLearnMore} />
				</div>
			</div>
		{/each}
	</div>
	<div class="leaderSliderPagination swiper-pagination"></div>
</div>

{#if isModalOpen && selectedLeader}
	<dialog
		bind:this={modalElement}
		open={isModalOpen}
		onclick={handleBackdropClick}
		class="leaderModal"
		transition:fade={{ duration: 200 }}
	>
		<div class="leaderModalContent" transition:fly={{ y: 800, duration: 300, delay: 100 }}>
			<button class="leaderModalClose" onclick={closeModal} aria-label="Close modal"> × </button>
			<div class="leaderModalContentHeader">
				<div class="leaderModalImage">
					<img src={selectedLeader.image} alt={selectedLeader.name} />
				</div>
				<h2 class="leaderModalContentTitle">
					{selectedLeader.name}
				</h2>
				<p class="leaderModalContentRole">
					{@html selectedLeader.role}
				</p>
			</div>
			<div class="leaderModalContentDescription">
				{@html selectedLeader.fulldescription}
			</div>
		</div>
	</dialog>
{/if}

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

		@media screen and (max-width: 768px) {
			height: fit-content;
			margin: auto;
			padding: 0;
		}
	}

	.leaderSliderItem {
		display: flex;
		align-items: center;

		@media screen and (max-width: 768px) {
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

		@media screen and (max-width: 768px) {
			transform: translateX(-50%);
			left: 50% !important;
			bottom: 10px !important;
			top: auto !important;
			width: 100% !important;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&:global(.swiper-pagination-bullets) :global(.swiper-pagination-bullet) {
			margin: 8px 0;

			@media screen and (max-width: 768px) {
				margin: 0 5px;
			}
		}

		:global(.swiper-pagination-bullet) {
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
			@media screen and (max-width: 768px) {
				background: #fff;
				opacity: 0.8;
			}
		}

		:global(.swiper-pagination-bullet-active) {
			opacity: 1;
			background: #12213e;
			height: 30px;

			/* Horizontal style for small screens */
			@media screen and (max-width: 768px) {
				height: 11px;
				width: 30px;
				background: var(--Accent);
			}
		}
	}

	/* Modal Styles */
	.leaderModal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		z-index: 1000;

		@media (max-width: 768px) {
			padding: 10px;
		}
	}

	.leaderModalContent {
		background: #fff;
		border-radius: var(--Radius);
		max-width: 800px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

		@media (max-width: 768px) {
			max-height: 95vh;
		}
	}

	.leaderModalClose {
		position: absolute;
		top: 20px;
		right: 20px;
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		color: #666;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: background-color 0.2s ease;
		z-index: 10;

		&:hover {
			background: #f0f0f0;
			color: #333;
		}

		@media (max-width: 768px) {
			top: 15px;
			right: 15px;
			width: 35px;
			height: 35px;
			font-size: 1.5rem;
		}
	}

	.leaderModalContentHeader {
		padding: 40px 40px 20px 40px;
		text-align: center;
		border-bottom: 1px solid #eee;

		@media (max-width: 768px) {
			padding: 30px 20px 20px 20px;
		}
	}

	.leaderModalImage {
		width: 120px;
		height: 120px;
		margin: 0 auto 20px auto;
		border-radius: 50%;
		overflow: hidden;
		border: 4px solid var(--Accent);

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.leaderModalContentTitle {
		margin: 0 0 10px 0;
		font-size: 2rem;
		color: var(--Surface);
		font-weight: 700;

		@media (max-width: 768px) {
			font-size: 1.5rem;
		}
	}

	.leaderModalContentRole {
		margin: 0;
		font-size: 1.1rem;
		color: var(--SurfaceAlt);
		font-weight: 500;
	}

	.leaderModalContentDescription {
		padding: 30px 40px 40px 40px;
		line-height: 1.6;
		color: #333;

		@media (max-width: 768px) {
			padding: 20px 20px 30px 20px;
		}

		p {
			margin: 0 0 20px 0;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
