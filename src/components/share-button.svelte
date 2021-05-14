<script>
  export let text, hashtags, via;

  const TWEET_INTENT = 'https://twitter.com/intent/tweet';
  const shareURL = (() => {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', window.location.href);

    if (text) {
      url.searchParams.set('text', text);
    }

    if (hashtags) {
      url.searchParams.set('hashtags', hashtags);
    }

    if (via) {
      url.searchParams.set('via', via);
    }

    return url;
  })();
</script>

<a
  href={shareURL}
  target="_blank"
  rel="external nofollow noopener noreferrer"
  class="share button"
>
  <slot></slot>
</a>