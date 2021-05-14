<script>
  import NavBar from '../components/nav-bar.svelte';
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300,300italic,400,700,700italic);
  :global(*) {
    margin: 0;
    padding: 0;
  }
  
  :global(body) {
    font-family: Lato,'Open Sans','Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif;
    line-height: 1.5;
    background: #f3f3f3;
  }

  :global(.button) {
    padding: 10px 30px 10px;
    text-decoration: none;
    color: #fff;
    background: #016aba;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    opacity: 0.9;
    display: inline-block;
  }

  .container {
    max-width: 1024px;
    min-height: 100vh;
    background: #f9f9f9;
    margin: 0 auto;
  }

  .body {
    padding: 15px;
  }
</style>

<div class="container">
  <NavBar />

  <div class="body">
    <slot></slot>
  </div>
</div>
