<style>
  .jumbo {
    padding: 50px;
    background: #f6f6f6;
  }
  
  .right {
    float: right;
  }

  :global(.jumbo address, .jumbo p) {
    margin-bottom: 25px;
  }

  :global(.jumbo h2) {
    font-size: 3.2em;
    margin-top: -25px;
  }
</style>

<div class="jumbo">
  <slot></slot>
</div>
