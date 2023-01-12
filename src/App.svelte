<script>
  import Writer from "./lib/Writer.svelte";
  import Bar from "./lib/Bar.svelte";
  import Header from "./lib/Header.svelte";
  import { moveCursorToEnd } from "./lib/writer.helper.js";

  let writer;
  let bar;

  const messageHandler = (e) => {
    if (e.detail.type === "continueAdventure") {
      writer.getAdventureMore();
    }
    if (e.detail.type === "moveCursorToEnd") {
      moveCursorToEnd(writer.getDiv());
    }
  };
</script>

<main>
  <Header />
  <Writer bind:this={writer} />
  <Bar bind:this={bar} on:message={messageHandler} />
</main>
