<script>
    import { createEventDispatcher } from "svelte";
    import MagicWand from "./MagicWand.svelte";
    const dispatch = createEventDispatcher();

    const clickHandler = (e) => {
        console.log("blah");
        e.preventDefault();
        dispatch("message", {
            type: "continueAdventure",
        });
    };
</script>

<button on:click={clickHandler}>
    <MagicWand />
</button>

<style>
    button {
        height: 5em;
        width: 5em;
        margin: 0;
        border: 0;
        padding: 0;
        background-color: transparent;
    }
</style>
