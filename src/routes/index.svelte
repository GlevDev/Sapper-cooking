<script>
  import { onMount } from "svelte";
  import recipes from "../store.js";

  let recipesResult = [];
  let unsubscribe;

  $: console.log(recipesResult);

  onMount(() => {
    unsubscribe = recipes.subscribe(items => {
      recipesResult = items;
    });
  });
</script>

<style>
	#recipes {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr;
    grid-gap: 1rem;
	}

	@media (min-width: 768px) {
    #recipes {
      grid-template-columns: repeat(2, 1fr);
    }
  }

	.container {
		border: 1px solid black;
	}
</style>

<svelte:head>
  <title>Mes recettes de cuisine</title>
</svelte:head>

<section id="recipes">
  {#each recipesResult as result}
    <div class="container">
      <div>{result.title}</div>
    </div>
  {/each}
</section>
