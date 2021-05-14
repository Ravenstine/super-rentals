<script>
  const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

  export let lng, lat, width, height, zoom, large;

  let classNames = ['map', large ? 'large' : null].filter(Boolean).join(' ');
  let coordinates = `${lng},${lat},${zoom}`;
  let dimensions = `${width}x${height}`;
  let accessToken = `access_token=pk.eyJ1IjoidGVuYml0Y29tYiIsImEiOiJja29vZXhsc28wNXd0MnVwbm90ZjA1aXQ1In0.jlKvgXoCIuIsJz3U8OHINQ`;
  let src = `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
</script>

<!-- <style>
  .map img {
    height: auto;
    width: 100%;
  }
</style> -->

<div class={classNames}>
  <img
    alt="Map image at coordinates {lat},{lng}"
    src={src}
    width={width}
    height={height}
  >
</div>
