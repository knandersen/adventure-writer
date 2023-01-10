<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { create_in_transition } from "svelte/internal";
    import { createEventDispatcher } from "svelte";
    import Slider from "@bulatdashiev/svelte-slider";
    import MagicWand from "./MagicWand.svelte";

    const dispatch = createEventDispatcher();

    export let visibility = "hidden";
    let height = window.visualViewport.height;
    let viewport = window.visualViewport;
    let bar;
    let t;
    let sliderValue = [100, 100];

    onMount(() => {
        bar.style.bottom = `${height - viewport.height}px`;
    });

    export function transition() {
        if (!t) {
            t = create_in_transition(bar, fade, { duration: 500 });
        }
        t.start();
    }

    export function focus() {
        // bar.preventDefault();
    }

    const clickHandler = (e) => {
        // e.preventDefault();
        dispatch("barInteraction", {
            type: "continueAdventure",
        });
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

<div bind:this={bar} id="bar">
    <button on:click={clickHandler}>
        <MagicWand />
    </button>
    <!--<div class="sliderContainer">
        <Slider bind:value={sliderValue} />
    </div>-->
</div>

<style>
    @import "../../node_modules/placeholder-loading/dist/css/placeholder-loading.min.css";

    #bar {
        max-width: 1280px;
        height: 4em;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 1em;
        padding: 0.9em;
        visibility: hidden;
    }

    button {
        height: 5em;
        width: 5em;
        margin: 0;
        border: 0;
        padding: 0;
        background-color: transparent;
    }

    .sliderContainer {
        display: inline-block;
        flex: 1;
    }

    @media screen and (max-width: 768px) {
        #bar {
            position: fixed;
            bottom: 0px;
            visibility: var(--visibility);
        }
    }
</style>
