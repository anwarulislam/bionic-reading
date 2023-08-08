<script lang="ts">
	import { bionicfy } from '../../helpers/bionicfy';

	let text = `When tweeting about a perceived issue or limitation with Next.js, it's essential to be constructive and clear in your message. While every framework has its strengths and weaknesses, it's crucial to provide context and potential solutions when discussing challenges.

For the specific issue you mentioned, dealing with multiple files with the same name (e.g., index.tsx) in a folder-based routing structure, you can follow these practices to make navigation easier from the command line and improve overall development experience:`;

	let showReadingMode = false;

	$: bionicText = showReadingMode ? bionicfy(text) : '';
</script>

<div class="text-container">
	{#if !showReadingMode}
		<h5>Paste your essay</h5>
		<textarea rows="10" bind:value={text} />
		<div class="action">
			<button on:click={() => (showReadingMode = true)}> Bionic Readingify </button>
		</div>
	{:else}
		<div class="reading">
			<div>
				<strong>Original Text</strong>
				<div>
					<pre>{@html text}</pre>
				</div>
			</div>

			<div>
				<strong>Bionic Text</strong>
				<div>
					<pre>{@html bionicText}</pre>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	textarea {
		box-sizing: border-box;
		width: 500px;
		height: 100%;
		resize: none;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px;
		outline: none;
		margin-bottom: 2rem;
		font-family: var(--font-body);
	}

	.action {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.reading {
		display: flex;
		gap: 2rem;
		line-height: 1.5;
		font-size: 18px;
	}

	.reading > div {
		flex: 1;
		padding: 1rem;
		background-color: white;
		border-radius: 5px;
	}

	.reading > div > strong {
		display: block;
		margin-bottom: 1rem;
	}

	pre {
		white-space: pre-wrap;
		font-family: var(--font-body);
	}

	/* on mobile */
	@media (max-width: 500px) {
		.text-container {
			width: 100%;
		}

		textarea {
			width: 100%;
		}

		.reading {
			flex-direction: column;
		}
	}
</style>
