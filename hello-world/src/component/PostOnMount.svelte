<script>
    import { onMount } from "svelte";

    let posts = []

    // onMount fn schedules the passed in callback to run as soon as the component
    // has been mounted to DOM
    onMount(async ()=>{
        // open this website to see the json
        const content = await fetch("https://jsonplaceholder.typicode.com/posts")
        posts = await content.json()
    })
</script>

{#each posts as post (post)}
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <hr />
<!-- The else block is run when the fetch is not yet completed
to test this, go to Network and Slow 3G in DevTools and reload page -->
{:else}
    <p>loading...</p>
{/each}