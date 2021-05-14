<script>
  import RentalImage from './rental-image.svelte';
  import Map from './map.svelte';
  import Jumbo from './jumbo.svelte';
  import ShareButton from './share-button.svelte';

  export let rental;
  export let isDetailed;
  export let thumb;

  let classNames = ['rental', isDetailed ? 'detailed' : null].filter(Boolean).join(' ');

  let mapWidth = isDetailed ? '894' : '150';
  let mapHeight = isDetailed ? '600' : '150';
</script>

<style>
  .rental {
    margin-top: 15px;
    background: #f6f6f6;
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .rental:hover {
    background: #f3f3f3;
  }

  .rental .details {
    flex-basis: 50%;
    flex-grow: 2;
    display: flex;
    height: 150px;
    margin: 20px 25px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-around;
  }

  .rental .detail {
    flex-basis: 50%;
    font-weight: 300;
    font-style: italic;
    white-space: nowrap;
  }

  .rental.detailed {
    background: none;
    align-items: flex-start;
  }

  .rental .image.large {
    margin: 30px 25px 50px 25px;
    flex-basis: 100%;
  }

  :global(.rental.detailed .map) {
    flex-basis: 100%;
    margin: 50px 25px 25px;
  }

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
</style>

{#if isDetailed}
  <Jumbo>
    <div class="right tomster"></div>
    <h2>{rental.title}</h2>
    <p>Nice find! This looks like a nice place to stay near {rental.city}.</p>

    <ShareButton
      text="Check out {rental.title} on Super Rentals!"
      hashtags="vacation,travel,authentic,blessed,superrentals"
      via="emberjs"
    >
      Share on Twitter
    </ShareButton>
  </Jumbo>
{/if}

<article class={classNames}>
  <RentalImage
    src={rental.image}
    alt="A picture of {rental.title}"
    isDetailed={isDetailed}
  ></RentalImage>

  <div class="details">
    <h3>
      <a href="/rentals/{rental.id}">{rental.title}</a>
    </h3>
    <div class="detail owner">
      <span>Owner:</span> {rental.owner}
    </div>
    <div class="detail type">
      <span>Type:</span> {rental.type}
    </div>
    <div class="detail location">
      <span>Location:</span> {rental.city}
    </div>
    <div class="detail bedrooms">
      <span>Number of bedrooms:</span> {rental.bedrooms}
    </div>
  </div>

  <Map
    lat={rental.location.lat}
    lng={rental.location.lng}
    zoom="9"
    width={mapWidth}
    height={mapHeight}
    alt="A map of {rental.title}"
    thumb={thumb}
  />
</article>
