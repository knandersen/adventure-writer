<script>
    import { onMount } from "svelte";
    import { textBuffer, textStory } from "./store";
    import { startCompletion, continueCompletion } from "./completion";
    import TextLoaderGroup from "./TextLoaderGroup.svelte";

    export let callback;

    let input;
    export function focus() {
        input.focus();
    }

    export function me() {
        return input;
    }

    let promise = null;

    onMount(() => {
        textStory.set("");
        textBuffer.set("");
        promise = startAdventure();
    });

    const addHighlight = (text) => {
        return text;
    };

    const formatText = (text) => {
        // Remove line breaks
        let formattedText = text.replace(/(\r\n|\n|\r)/gm, "");
        return formattedText;
    };

    const moveCursorToEnd = (el, text) => {
        // set cursor position to end
        var range = document.createRange();
        var sel = window.getSelection();

        range.setStart(el.childNodes[0], text.length);
        range.collapse(true);

        sel.removeAllRanges();
        sel.addRange(range);
    };

    const startAdventure = async () => {
        promise = startCompletion();
        await promise;
        await textStory.set(formatText($textBuffer.raw));
        /* textStory.set(
            "Once upon a time there was a beautiful princess who loved to sing. She had the most beautiful voice in all the land and everyone who heard her sing was enchanted."
        ); */
    };

    export const continueAdventure = async (prompt) => {
        promise = continueCompletion(prompt);
        await promise;
        await textStory.set($textStory + " " + formatText($textBuffer));

        moveCursorToEnd(input, $textStory);
    };

    const onTextareaKeypress = (event) => {
        let char = typeof event !== "undefined" ? event.keyCode : event.which;
        if (event.key === "Tab") {
            event.preventDefault();
            continueAdventure();
        }
    };

    const scrollHandler = () => {
        input.blur();
    };

    let height = window.visualViewport.height;
    let viewport = window.visualViewport;
</script>

<div
    contenteditable="true"
    bind:textContent={$textStory}
    bind:this={input}
    on:keydown={onTextareaKeypress}
    on:focus={callback}
    on:focusout={callback}
    on:blur={callback}
    on:scroll={scrollHandler}
    id="writingWindow"
>
    {#await promise}<TextLoaderGroup />{/await}
</div>

<style>
    @import "../../node_modules/placeholder-loading/dist/css/placeholder-loading.min.css";

    #writingWindow {
        width: 30em;
        height: 100vh;
        padding: 1em;
        margin: 1em 0 0 0;
        overflow-y: scroll;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.1);
        display: inline-block;
        white-space: pre-wrap;
        border: none;
        outline: none;
    }

    @media screen and (max-width: 768px) {
        #writingWindow {
            width: 90%;
            padding: 0.7em;
            margin-top: 0.2em;
        }
    }
</style>
