<script>
  import Writer from "./lib/Writer.svelte";
  import Status from "./lib/Status.svelte";

  const onScroll = (e) => {
    console.log("scrøll");
  };
</script>

<main on:scroll={onScroll}>
  <h1>Adventure Writer</h1>
  <Status />

  <div class="card">
    <Writer />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
