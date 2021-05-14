<script context="module">
  import SearchIndex from '../lib/search-index.js';

	export async function load({ page, fetch }) {
		const resp = await fetch('/api/rentals.json');
    const { data } = await resp.json();
    const rentals = data.map(rental => ({ ...rental, ...rental.attributes }));
    const model = new SearchIndex(rentals);
		return {
			props: {
        model,
			}
		};
	}
</script>

<script>
  import Jumbo from '../components/jumbo.svelte';
	import Rental from '../components/rental.svelte';

  let query = '';
  let rentals = [];

  $: rentals = model.search(query);

  export let model;
</script>

<style>
  .right {
    float: right;
  }

  .tomster {
    background: url("/assets/teaching-tomster.png");
    background-repeat: repeat;
    background-size: auto;
    background-size: contain;
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    position: relative;
    top: -25px;
  }

  .rentals input {
    padding: 11px;
    font-size: 18px;
    width: 500px;
    margin: 20px auto 50px;
    background-color: rgba(255, 255, 255, 0.75);
    border: solid 1px lightgray;
    display: block;
  }

  .light {
    font-weight: 300;
  }

  .rentals label span {
    font-size: 140%;
    margin: 50px auto 20px;
    display: block;
    text-align: center;
    font-style: italic;
  }

  .results li {
    list-style: none;
    padding: 10px 15px;
  }
</style>

<svelte:head>
	<title>Super Rentals</title>
</svelte:head>

<Jumbo>
  <div class="right tomster"></div>
  <h2>Welcome to Super Rentals!</h2>
  <p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a href="/about" class="button">About Us</a>
</Jumbo>

{#await model}
  <h2>Loading...</h2>
{:then}
  <div class="rentals">
    <label>
      <span>Where would you like to stay?</span>
      <input bind:value={query} class="light">
    </label>

    <ul class="results">
      {#each rentals as rental}
        <li><Rental rental={rental} thumb={true} /></li>
      {/each}
    </ul>
  </div>
{/await}
