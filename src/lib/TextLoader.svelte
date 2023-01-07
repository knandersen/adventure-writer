<span />

<style>
    span {
        height: 0.9em;
        width: var(--width, 5em);
        display: inline-block;
        padding: 0 1em;
        background: rgb(42, 42, 42);
        background: linear-gradient(
            103deg,
            rgba(42, 42, 42, 1) 0%,
            rgba(42, 42, 42, 1) 60%,
            rgba(139, 139, 139, 0.5) 70%,
            rgba(42, 42, 42, 1) 80%,
            rgba(42, 42, 42, 1) 100%
        );
        background-size: 400% 400%;
        animation: gradient 1.5s ease infinite;
        animation-delay: 1s;
        border-radius: 0.2em;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 120% 50%;
        }
    }
</style>
