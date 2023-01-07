<script>
    import { onMount } from "svelte";
    import { appStatus } from "./store";
    import { checkConnection } from "./openai";

    onMount(async () => {
        startConnectionCheck();
    });

    const startConnectionCheck = async () => {
        checkConnection();
        setInterval(async () => {
            checkConnection();
        }, 2000);
    };
</script>

<div id="status" class={$appStatus} />

<style>
    #status {
        width: 100%;
        height: 0.3em;
        margin: 1em 0;
        /* border-radius: 50%; */
    }
    .connected {
        background: rgb(16, 36, 0);
        background: radial-gradient(
            circle,
            rgba(0, 255, 40, 1) 0%,
            rgba(9, 121, 32, 0.5) 35%,
            rgba(16, 36, 0, 0) 100%
        );
    }
    .disconnected {
        background: rgb(255, 0, 0);
        background: radial-gradient(
            circle,
            rgba(255, 0, 0, 1) 0%,
            rgba(121, 10, 9, 0.5) 35%,
            rgba(36, 0, 0, 0) 100%
        );
    }
    .working {
        background: rgb(255, 224, 0);
        background: radial-gradient(
            circle,
            rgba(255, 224, 0, 1) 0%,
            rgba(121, 100, 9, 0.5) 35%,
            rgba(16, 36, 0, 0) 100%
        );
    }
</style>
