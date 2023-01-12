<script>
    import Slider from "@bulatdashiev/svelte-slider";
    import { textBuffer } from "./store";

    let sliderValue = [0, 0];

    textBuffer.subscribe((value) => {
        sliderValue[0] = value.wordsWanted;
        sliderValue[1] = value.words.length;
    });

    /**
     * Move slider into own component
     */

    const sliderHandler = () => {
        textBuffer.update((t) => {
            t.wordsWanted = sliderValue[0];
            return t;
        });
    };
</script>

{sliderValue[0]} / {sliderValue[1]}

<div class="sliderContainer">
    <Slider
        bind:value={sliderValue}
        max={sliderValue[1]}
        on:input={sliderHandler}
    />
</div>

<style>
    .sliderContainer {
        display: inline-block;
        flex: 1;
    }
</style>
