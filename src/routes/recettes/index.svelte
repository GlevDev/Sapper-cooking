<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`recettes.json`).then(r => r.json()).then(recettes => {
			return { recettes };
		});
	}
</script>

<script>
	export let recettes;
		
</script>

<style>

</style>

<svelte:head>
	<title>Recettes</title>
</svelte:head>

<h1>Résultat</h1>

<ul>
	{#each recettes as recette}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='recettes/{recette.title}'>{recette.title}</a></li>
	{/each}
</ul>