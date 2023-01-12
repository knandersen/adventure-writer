<script>
    import { onMount } from "svelte";
    import {
        textBufferInitial,
        textBuffer,
        textStory,
        writerFocused,
        bufferActive,
        bufferWords,
        bufferWordsWanted,
    } from "./store";
    import { getCompletionStart, getCompletionMore } from "./completion";
    import TextLoaderGroup from "./TextLoaderGroup.svelte";
    import {
        moveCursorToEnd,
        getWordsFromString,
        formatText,
    } from "./writer.helper";

    let promise = null;
    let div;

    export const getAdventureMore = async () => {
        if ($bufferActive) {
            await commitBufferToStory();
        }
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

    $: if ($bufferWordsWanted) {
        moveCursorToEnd(div);
    }

    const commitBufferToStory = async () => {
        // Await since updating the store creates a race condition for moving the cursor
        await textStory.set(
            $textStory +
                formatText(getWordsFromString($bufferWords, $bufferWordsWanted))
        );
        await textBuffer.set(textBufferInitial);
        moveCursorToEnd(div);
    };

    const keydownHandler = async (event) => {
        if ($bufferActive) {
            // TODO: Check whether the key is actually a character
            await commitBufferToStory();
        }
        if (event.key === "Tab") {
            event.preventDefault();
            getAdventureMore();
        } else {
            // TODO: Maybe throttle? Could wait for user to stop typing
            textStory.set(div.textContent);
        }
    };

    // TODO: Should not be needed.
    const focusHandler = (event) => {
        event.type === "focus"
            ? writerFocused.set(true)
            : writerFocused.set(false);
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
    {$textStory}{#if $bufferActive}<span
            >{formatText(
                getWordsFromString($bufferWords, $bufferWordsWanted)
            )}</span
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
            width: 100%;
            padding: 0.7em;
            margin-top: 0.2em;
            box-sizing: border-box;
        }
    }
</style>
