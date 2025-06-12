<script>
	const cards = [
		{
			id: 1,
			title: 'Information',
			content:
				'Bacon ipsum dolor amet ground round jowl cupim hamburger alcatra rump capicola burgdoggen fatback cow frankfurter brisket. Tongue capicola flank chicken pancetta alcatra landjaeger kevin meatball porchetta kielbasa. Short loin shoulder strip steak pig swine alcatra. Andouille pork belly beef sausage ham leberkas'
		},
		{
			id: 2,
			title: 'More Info',
			content:
				'Shankle pig sirloin swine capicola buffalo landjaeger, beef ribs tri-tip chicken filet mignon. Pork chop filet mignon pancetta bresaola picanha porchetta bacon ham hock alcatra short loin tongue.'
		},
		{
			id: 3,
			title: 'Other important stuff',
			content:
				'Beef boudin fatback, porchetta alcatra landjaeger bresaola chislic corned beef. Brisket capicola shank alcatra beef ribs, andouille jerky jowl turducken chislic.'
		},
		{
			id: 4,
			title: 'Last one',
			content:
				'Leberkas sausage picanha fatback. Ball tip strip steak biltong leberkas pancetta, ham porchetta pork loin drumstick ribeye boudin.'
		}
	];
</script>

<div class="wrapper">
	<div class="container">
		{#each cards as card}
			<input type="radio" name="slide" id={`c${card.id}`} checked={card.id === 1 ? true : false} />
			<label for={`c${card.id}`} class={`card card${card.id}`}>
				<!-- <div class="icon">{card.id}</div> -->
				<div class="description">
					<p>{card.content}</p>
				</div>
				<div class="cardTitle"><h4>{card.title}</h4></div>
			</label>
		{/each}
	</div>
</div>

<style>
	@keyframes gradient {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 100%;
		}
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}

	.container {
		height: 400px;
		display: flex;

		flex-wrap: no-wrap;
		justify-content: flex-start;
		@media (max-width: 768px) {
			flex-wrap: wrap;
		}
	}
	.card {
		position: relative;
		width: 80px;
		border-radius: var(--radius-2);
		background-size: cover;
		cursor: pointer;
		margin: 0 10px;
		transition: width 0.6s ease-in-out;
		box-shadow: var(--shadow-3);
		overflow: clip;
		color: #fff;
		@media (max-width: 768px) {
			width: 100%;
			height: 80px;
		}

		> .description {
			overflow: clip;
			opacity: 0;
			transition: all 0.3s var(--ease-out-1);
			transition-delay: 0.15s;
			@media (max-width: 768px) {
				transition-delay: 0s;
			}
		}
	}

	.cardTitle {
		position: absolute;
		bottom: 0.5rem;
		left: 2.5rem;
		transform-origin: left;
		rotate: -90deg;
		transition: rotate 0.3s var(--ease-out-1);
		white-space: nowrap;
		@media (max-width: 768px) {
			rotate: 0deg;
			top: 0.5rem;
			left: 1rem;
			text-decoration: underline;
		}
		h4 {
			margin: 0;
		}
	}
	.description {
		width: calc(100% - 2rem);
		height: calc(100% - 4rem);
		margin: 2rem auto;
		p {
			padding-top: 5px;
			margin: 0;
		}
		h4 {
			margin: 0;
			text-transform: uppercase;
		}
	}
	input {
		display: none;
	}
	input:checked + label {
		width: 600px;

		box-shadow: var(--shadow-5);
		@media (max-width: 768px) {
			height: fit-content;
			width: 100%;
		}

		> .description {
			transition-delay: 0.25s;
			opacity: 1;
			transform: translateX(0px);
		}
		> .cardTitle {
			rotate: 0deg;
		}
	}

	.card1 {
		background: var(--gradient-23);
	}
	.card2 {
		background: var(--gradient-23);
	}
	.card3 {
		background: var(--gradient-23);
	}
	.card4 {
		background: var(--gradient-23);
	}
</style>
