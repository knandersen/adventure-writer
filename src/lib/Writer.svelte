<script>
    import { onMount } from "svelte";
    import { textBuffer, textStory } from "./store";
    import { requestCompletion } from "./openai";
    import TextLoaderGroup from "./TextLoaderGroup.svelte";

    export let callback;

    let input;
    export function focus() {
        input.focus();
    }

    export function me() {
        return input;
    }

    let story;
    textStory.subscribe((v) => {
        story = v;
    });

    let buffer;
    textBuffer.subscribe((v) => {
        buffer = v;
    });

    let promise = null;

    onMount(() => {
        promise = startAdventure();
    });

    const formatText = (text) => {
        // Remove line breaks
        let formattedText = text.replace(/(\r\n|\n|\r)/gm, "");
        return formattedText;
    };

    const htmlToText = (html) => {
        let tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    const addHighlight = (text) => {
        return text;
    };

    const startAdventure = async () => {
        /* await requestCompletion("Start a fictional fairytale story:");
        let text = formatText(buffer);
        textStory.set(text); */

        textStory.set(
            "Once upon a time there was a beautiful princess who loved to sing. She had the most beautiful voice in all the land and everyone who heard her sing was enchanted."
        );
    };

    export const continueAdventure = async () => {
        let prompt = htmlToText("continue this story: " + $textStory);
        promise = await requestCompletion(prompt);
        const storyPosition = story.length;
        const bufferLength = buffer.length;
        // console.log(`${storyPosition} - ${bufferLength}`);
        let text = formatText(buffer);
        await textStory.set(story + " " + text);

        // set cursor position to end
        var range = document.createRange();
        var sel = window.getSelection();

        range.setStart(input.childNodes[0], $textStory.length);
        range.collapse(true);

        sel.removeAllRanges();
        sel.addRange(range);
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
