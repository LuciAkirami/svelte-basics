<script>
    // when Close Popup is clicked we want to not call this component
    import { createEventDispatcher } from "svelte";
    let dispatcher = createEventDispatcher()
</script>

<h4>This is a Popup</h4>
<!-- When the button is clicked we are dispatching "close" event to parent component -->
<button on:click={()=>dispatcher('close',"Heyy")}>Close Popup</button>