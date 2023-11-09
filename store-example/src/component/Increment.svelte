<script>
    import {count} from "../store/stores"
    let updateIt = () => {count.update((value) => {
        return value += 1
    })}
</script>
<button on:click={updateIt}>Increment</button>