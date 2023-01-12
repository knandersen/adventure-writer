<script>
  import Writer from "./lib/Writer.svelte";
  import Bar from "./lib/Bar.svelte";
  import Header from "./lib/Header.svelte";

  let barVisibility = "hidden";
  let writer;
  let bar;

  let w, h, d;

  const onBarInteraction = (e) => {
    if (e.detail.type === "continueAdventure") {
      writer.getAdventureMore();
    }
  };
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />
<main>
  <Header />
  <Writer bind:this={writer} />
  <Bar bind:this={bar} on:barInteraction={onBarInteraction} />
</main>
