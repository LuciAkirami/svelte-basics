<script>
    // accessing the store and setting it to zero
    import {count} from "../store/stores"
    let resetIt = () => {
        count.set(0)
    }
</script>
<button on:click={resetIt}>Reset</button>