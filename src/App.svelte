<script>
  import Writer from "./lib/Writer.svelte";
  import Bar from "./lib/Bar.svelte";
  import Header from "./lib/Header.svelte";

  let barVisibility = "hidden";
  let writerWindow, writerBlur;
  let bar;

  let w, h, d;

  const onFocusChange = () => {
    // Wait a while to see if focus has actually changed
    setTimeout(() => {
      if (document.activeElement === writerWindow.me()) {
        barVisibility = "visible";
      } else {
        barVisibility = "hidden";
      }
      bar.transition();
    }, 200);
  };

  const onBarInteraction = (e) => {
    if (e.detail.type === "continueAdventure") {
      writerWindow.continueAdventure();
    }
    writerWindow.focus();
    bar.focus();
  };
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />
<main>
  <Header />
  <Writer
    bind:this={writerWindow}
    on:blur={writerBlur}
    callback={onFocusChange}
  />
  <Bar
    bind:this={bar}
    on:barInteraction={onBarInteraction}
    --visibility={barVisibility}
  />
</main>
