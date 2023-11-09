<script>
  import { createEventDispatcher } from "svelte";

let dispatch = createEventDispatcher()

function greet() {
    dispatch('greet',"Hello from Inner")
}
</script>

<button on:click={greet}>Greet</button>