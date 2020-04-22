import { writable } from 'svelte/store';

const recipes = writable([]);

const RecipeStore = {
  subscribe: recipes.subscribe,
  setRecipes: (Array) => {
    recipes.set(Array);
  }
};

export default RecipeStore;
