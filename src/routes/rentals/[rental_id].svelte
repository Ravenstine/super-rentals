<script context="module">
	export async function load({ page, fetch }) {
    return {
      props: {
        model: fetch(`/api/rentals/${page.params.rental_id}.json`)
          .then(resp => resp.json())
          .then(({ data }) => ({ ...data, ...data.attributes })),
      }
    }
	}
</script>

<script>
  import Rental from '../../components/rental.svelte';

  export let model;

  let rental;
  let response;
</script>

{#await model}
  <h2>Loading...</h2>
{:then rental}
  <Rental rental={rental} isDetailed={true} />
{/await}
