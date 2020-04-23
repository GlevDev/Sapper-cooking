<script>
  import { onMount } from "svelte";
  import recipes from "../store.js";
  import { goto } from '@sapper/app';

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

	@media only screen and (min-width: 600px) {
    #recipes {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 900px) {
    #recipes {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (min-width: 1200px) {
    #recipes {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .title {
    text-align: center;
    background-color: #16817a;
    color: #F0F0F0;
  }

	.container {
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .img-container {
    height: 15rem;
    width: 100%;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<svelte:head>
  <title>Mes recettes de cuisine</title>
</svelte:head>

<section id="recipes">
  {#each recipesResult as result}
    <div class="container" on:click={() => goto(result.id)}>
      <div class="title">{result.title}</div>
      <div class="img-container">
        <img src={result.image} alt={result.title} class="img">
      </div>
    </div>
  {/each}
</section>
