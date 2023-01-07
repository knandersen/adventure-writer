<script>
    import { onMount } from "svelte";
    import { textBuffer, textStory } from "./store";
    import { requestCompletion } from "./openai";
    import TextLoaderGroup from "./TextLoaderGroup.svelte";

    const url = "https://openai-server-n8us.onrender.com";
    // const url = "http://localhost:10231";

    let story;
    textStory.subscribe((v) => {
        story = v;
    });

    let buffer;
    textBuffer.subscribe((v) => {
        buffer = v;
    });

    const endpointConnect = url + "/connect";
    const endpointCompletion = url + "/completion";

    let promise = null;

    onMount(() => {
        promise = startAdventure();
        /* textStory.set(
            "Once upon a time there was a beautiful princess who loved to sing. She had the most beautiful voice in all the land and everyone who heard her sing was enchanted."
        ); */
    });

    export const formatText = (text) => {
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
        await requestCompletion("Start a fictional fairytale story:");
        let text = formatText(buffer);
        textStory.set(text);
    };

    const continueAdventure = async (prompt, target) => {
        prompt = htmlToText(prompt);
        await requestCompletion(prompt);
        const storyPosition = story.length;
        const bufferLength = buffer.length;
        // console.log(`${storyPosition} - ${bufferLength}`);
        let text = formatText(buffer);
        await textStory.set(story + " " + text);

        // set cursor position to end
        var range = document.createRange();
        var sel = window.getSelection();

        range.setStart(target.childNodes[0], $textStory.length);
        range.collapse(true);

        sel.removeAllRanges();
        sel.addRange(range);
    };

    const onTextareaKeypress = (event) => {
        let char = typeof event !== "undefined" ? event.keyCode : event.which;
        if (event.key === "Tab") {
            event.preventDefault();
            promise = continueAdventure(
                "continue this story: " + $textStory,
                event.target
            );
        }
    };
</script>

<!--  -->
<div
    contenteditable="true"
    bind:textContent={$textStory}
    on:keydown={onTextareaKeypress}
    id="writingWindow"
>
    {#await promise}<TextLoaderGroup />{/await}
</div>

<style>
    @import "../../node_modules/placeholder-loading/dist/css/placeholder-loading.min.css";
    .waiting {
        background-color: yellow;
    }

    #writingWindow {
        width: 30em;
        height: 60em;
        padding: 1em;
        margin: -1em;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.1);
        display: inline-block;
        white-space: pre-wrap;
    }
</style>
