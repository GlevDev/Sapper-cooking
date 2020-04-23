<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`/${params.id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { recette: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let recette;

  console.log(recette);
</script>

<style>
  .container {
    border: 1px solid black;
    border-radius: 5px;
    max-width: 1200px;
    margin: auto;
  }

  .title {
    text-align: center;
    background-color: #16817a;
    color: #F0F0F0;
  }

  .cadre {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-container {
    height: 30rem;
    width: 50%;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ingredients {
    width: 50%;
  }
</style>

<div class="container">
  <div class="title">{recette.title}</div>
  <div class="cadre">
    <div class="img-container">
      <img src={recette.image} alt={recette.title} class="img" />
    </div>
    <div class="ingredients">
      <ul>
        {#each recette.ingredients as ingredient}
          <li>{ingredient.article} ({ingredient.qty})</li>
        {/each}
      </ul>
    </div>
  </div>
  <div>
    <ul>
      {#each recette.steps as step}
        <li>{step}</li>
      {/each}
    </ul>
  </div>
</div>
