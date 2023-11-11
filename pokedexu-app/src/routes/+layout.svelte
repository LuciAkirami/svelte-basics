<script>
    import { page } from "$app/stores";
</script>
<div class="navbar">
    <a href="/" class:active={$page.url.pathname == '/'}>Home</a>
    <a href="/my-monsters" class:active={$page.url.pathname == '/my-monsters'}>Monster</a>
</div>

<div class="container">
    <slot />
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        background-color: #333;
        /* margin: 0; */
    }

    .navbar a {
        padding: 5px 10px;
        text-decoration: none;
        color: #fff;
    }

    .navbar a:hover {
        color: #ccc
    }

    .navbar a.active {
        border: 1px solid #ccc;
        border-radius: 5px;
    }
        
    .container {
        max-width: 90%;
        margin: 0 auto;
        width: 1200px;
    }

    :global(body){
        margin: 0;
    }
</style>