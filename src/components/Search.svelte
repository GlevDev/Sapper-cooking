<script>
	import recettes from '../routes/_recettes.js';
	import stores from '../store.js';
	export let segment;

	let motCle;
	let typeRech;

	function recherche() {
		if(motCle && typeRech === "recette") {
			rechercheRecette();
		}
		if(motCle && typeRech === "ingredient") {
			rechercheIngredient();
		}
	}

	function rechercheRecette() {
		let resultRecettes = recettes.filter(recette => recette.title.toLowerCase().includes(motCle.toLowerCase()) === true);
		console.log(resultRecettes);
	}
</script>

<style>
	nav {
		height: 100%;
		background: #024249;
		height: 4rem;
	}

	.barre-recherche {
		/* width: 90vw; */
		display: flex;
		justify-content: center;
		align-items: stretch;
		padding: 10px;
		height: 100%;
		font-size: 2rem;
	}

	#type-recherche {
		border: none;
		outline: none;
		background: transparent;
		font-size: 1.3rem;
		color: #F0F0F0;
	}

	#type-recherche option {
		background-color: #16817a;
	}

	#recherche {
		flex: 1;
		margin: 0 10px;
		border-radius: 5px;
		border: 1px solid black;
		font-size: 1.5rem;
		text-align: center;
		background: transparent;
		outline: none;
		color: #F0F0F0;
	}

	#recherche:focus {
		background: rgba(0, 0, 0, 0.2);
	}

	button {
		border-radius: 5px;
		background-color: #16817a;
		border: 1px solid black;
		font-size: 1.3rem;
		cursor: pointer;
		outline: none;
		color: #F0F0F0;
	}

	button:active {
		transform: scale(0.98);
	}
</style>

<nav>
	<div class="barre-recherche">
		<select name="TypeRecherche" id="type-recherche" bind:value={typeRech}>
			<option value="recette">Recherche par Recette</option>
			<option value="ingredient">Recherche par Ingrédient</option>
		</select>
		<input type="text" id="recherche" name="recherche" bind:value={motCle}>
		<button on:click={recherche}>Rechercher</button>
	</div>
	<div></div>
</nav>
