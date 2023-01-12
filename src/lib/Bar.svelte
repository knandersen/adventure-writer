<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { create_in_transition } from "svelte/internal";
    import { textBuffer, writerFocused } from "./store";
    import BarSlider from "./BarSlider.svelte";
    import ButtonGenerate from "./ButtonGenerate.svelte";

    let height = window.visualViewport.height;
    let viewport = window.visualViewport;
    let bar, t;

    onMount(() => {
        bar.style.bottom = `${height - viewport.height}px`;
    });

    export function transition() {
        if (!t) {
            t = create_in_transition(bar, fade, { duration: 500 });
        }
        t.start();
    }

    const userAgentIsMobile = () => {
        return /iPhone|iPad|iPod/.test(window.navigator.userAgent);
    };

    // https://stackoverflow.com/questions/43833049/how-to-make-fixed-content-go-above-ios-keyboard
    const resizeHandler = () => {
        if (!/iPhone|iPad|iPod/.test(window.navigator.userAgent)) {
            height = viewport.height;
        }
        bar.style.bottom = `${height - viewport.height}px`;
    };

    window.visualViewport.addEventListener("resize", resizeHandler);
</script>

<div bind:this={bar}>
    {#if userAgentIsMobile()}
        <ButtonGenerate on:message />

        {#if $writerFocused && $textBuffer.active}
            <BarSlider />
        {/if}
    {:else}
        press tab to generate
    {/if}
</div>

<style>
    @import "../../node_modules/placeholder-loading/dist/css/placeholder-loading.min.css";

    div {
        max-width: 1280px;
        height: 4em;
        width: 30em;
        box-sizing: border-box;
        text-align: left;
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        gap: 1em;
        padding: 0.9em;
    }
    @media screen and (max-width: 768px) {
        div {
            width: 100%;
            position: fixed;
            bottom: 0px; /* 
            visibility: var(--visibility); */
        }
    }
</style>
