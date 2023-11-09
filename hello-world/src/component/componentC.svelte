<script>
    // getting the value from App.svelte directly
    // getting the context that we have set in App.svelte
    import { getContext } from "svelte";
    let username = getContext('user-context')
</script>


<h2>Hi {username} from ComponentC</h2>