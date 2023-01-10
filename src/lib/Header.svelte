<script>
    import Status from "./Status.svelte";
</script>

<div>
    <h1>Adventure Writer</h1>
    <Status />
</div>

<style>
    div {
        position: sticky;
        top: 0;
        background-color: #242424;
        width: 100%;
    }

    @media (prefers-color-scheme: light) {
        div {
            background-color: rgba(255, 255, 255, 0.9);
        }
    }
</style>
