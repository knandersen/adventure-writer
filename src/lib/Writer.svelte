<script>
    import { onMount } from "svelte";
    import {
        textBufferInitial,
        textBuffer,
        textStory,
        writerFocused,
    } from "./store";
    import { getCompletionStart, getCompletionMore } from "./completion";
    import TextLoaderGroup from "./TextLoaderGroup.svelte";
    import { moveCursorToEnd } from "./writer.helper";

    let promise = null;

    let div;

    export function getDiv() {
        return div;
    }

    export const getAdventureMore = async () => {
        promise = getCompletionMore($textStory);
        await promise;
        moveCursorToEnd(div);
    };

    export const getAdventureStart = async () => {
        promise = getCompletionStart();
        await promise;
        moveCursorToEnd(div);
    };

    onMount(() => {
        textStory.set("");
        textBuffer.set(textBufferInitial);
        promise = getAdventureStart();
    });

    const formatText = (text) => {
        // Remove line breaks
        let formattedText = text.replace(/(\r\n|\n|\r)/gm, "");
        return formattedText;
    };

    $: if ($textBuffer.wordsWanted) {
        moveCursorToEnd(div);
    }

    const getWords = (n) => {
        return $textBuffer.words.slice(0, n).join(" ");
    };

    const commitBufferToStory = async () => {
        // Await since updating the store creates a race condition for moving the cursor
        await textStory.set(
            $textStory + formatText(getWords($textBuffer.wordsWanted))
        );
        await textBuffer.set(textBufferInitial);
        moveCursorToEnd(div);
    };

    const keydownHandler = async (event) => {
        if ($textBuffer.active) {
            // TODO: Check whether the key is actually a character
            commitBufferToStory();
        }
        if (event.key === "Tab") {
            event.preventDefault();
            getAdventureMore();
        } else {
            // Maybe throttle? Could wait for user to stop typing
            textStory.set(div.textContent);
        }
    };

    const focusHandler = (event) => {
        if (event.type === "focus") {
            console.log("focus");
            writerFocused.set(true);
        } else {
            console.log("blur");
            writerFocused.set(false);
        }
    };
</script>

<div
    contenteditable="true"
    bind:this={div}
    on:keydown={keydownHandler}
    on:focus={focusHandler}
    on:blur={focusHandler}
    id="writingWindow"
>
    {$textStory}{#if $textBuffer.active}<span
            >{formatText(getWords($textBuffer.wordsWanted))}</span
        >{/if}{#await promise}<TextLoaderGroup />{/await}
</div>

<style>
    @import "../../node_modules/placeholder-loading/dist/css/placeholder-loading.min.css";

    #writingWindow {
        width: 30em;
        height: 60vh;
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

    @keyframes highlight {
        from {
            background-color: rgba(255, 234, 2, 0.1);
        }
        to {
            background-color: rgba(255, 234, 2, 0);
        }
    }
    span {
        background-color: rgba(255, 234, 2, 0.1);
        /* animation: highlight 4s ease-in-out 3s 1; */
    }

    @media screen and (max-width: 768px) {
        #writingWindow {
            width: 90%;
            padding: 0.7em;
            margin-top: 0.2em;
        }
    }
</style>
