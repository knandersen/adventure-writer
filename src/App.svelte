<script>
  import Writer from "./lib/Writer.svelte";
  import Bar from "./lib/Bar.svelte";
  import Header from "./lib/Header.svelte";

  let barVisibility = "hidden";
  let writer;
  let bar;

  let w, h, d;

  /**
   * TODO: Move this logic into a store and do the checking from Bar.svelte
   */
  const onFocusChange = () => {
    // Wait a while to see if focus has actually changed
    /*  setTimeout(() => {
      if (document.activeElement === writer.getDiv()) {
        barVisibility = "visible";
      } else {
        barVisibility = "hidden";
      }
      bar.transition();
    }, 200); */
  };

  const onBarInteraction = (e) => {
    if (e.detail.type === "continueAdventure") {
      writer.getAdventureMore();
    }
    writer.focus();
    bar.focus();
  };
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />
<main>
  <Header />
  <Writer bind:this={writer} focusHandler={onFocusChange} />
  <Bar
    bind:this={bar}
    on:barInteraction={onBarInteraction}
    --visibility={barVisibility}
  />
</main>
