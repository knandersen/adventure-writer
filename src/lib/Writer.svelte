<script>
    import { onMount } from "svelte";
    import { textBuffer, textStory } from "./store";
    import { checkConnection, requestCompletion } from "./openai";

    const url = "https://openai-server-n8us.onrender.com";
    // const url = "http://localhost:10231";
    const writingWindow = document.getElementById("writingWindow");

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

    onMount(() => {
        // startAdventure();
        textStory.set(
            "Once upon a time there was a beautiful princess who loved to sing. She had the most beautiful voice in all the land and everyone who heard her sing was enchanted."
        );
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
        let x = await requestCompletion(prompt);
        const storyPosition = story.length;
        const bufferLength = buffer.length;
        // console.log(`${storyPosition} - ${bufferLength}`);
        console.log($textBuffer);
        let text = formatText(buffer);
        // strip story of html tags
        console.log(story);
        console.log(text);
        textStory.set(story + " " + text);
        console.log($textStory);
        console.log(target);
        console.log("done!");

        target.focus();
        // select all the content in the element
        document.execCommand("selectAll", false, null);
        // collapse selection to the end
        document.getSelection().collapseToEnd();
    };

    const onTextareaKeypress = (event) => {
        let char = typeof event !== "undefined" ? event.keyCode : event.which;
        if (event.key === "Tab") {
            event.preventDefault();
            continueAdventure(
                "continue this story: " + $textStory,
                event.target
            );
        }
    };

    const onScroll = (event) => {
        event.preventDefault();
        console.log("scroll");
    };
</script>

<div
    contenteditable="true"
    bind:textContent={$textStory}
    on:keydown={onTextareaKeypress}
    id="writingWindow"
/>

<style>
    .waiting {
        background-color: yellow;
    }

    #writingWindow {
        width: 30em;
        height: 60em;
        padding: 1em;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.1);
        display: inline-block;
    }
</style>
