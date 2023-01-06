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
        width: 1em;
        height: 1em;
        border-radius: 50%;
    }
    .connected {
        background-color: green;
    }
    .disconnected {
        background-color: red;
    }
    .working {
        background-color: orange;
    }
</style>
