<script>
  import Writer from "./lib/Writer.svelte";
  import Bar from "./lib/Bar.svelte";
  import Header from "./lib/Header.svelte";

  let writer;
  let bar;

  const messageHandler = (e) => {
    if (e.detail.type === "continueAdventure") {
      writer.getAdventureMore();
    }
  };
</script>

<main>
  <Header />
  <Writer bind:this={writer} />
  <Bar bind:this={bar} on:message={messageHandler} />
</main>
