<script>
	import Search from '../components/Search.svelte';

	export let segment;
</script>

<style>
	main {
    margin: 1rem;
  }
</style>

<Search {segment} />

<main>
	<slot></slot>
</main>