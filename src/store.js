import { writable } from 'svelte/store';

const recipes = writable([]);

const RecipeStore = {
  subscribe: recipes.subscribe,
  setMeetups: (meetupArray) => {
    meetups.set(meetupArray);
  }
};

export default RecipeStore;
