<script>
    import { caughtMonsters } from "$lib/store";
    import Monsters from "../Monsters.svelte";
</script>

<div class="caught-monsters">
    {#each $caughtMonsters as monster}
        <Monsters {monster} />
    {/each}

</div>
<!-- <p>{$caughtMonsters}</p> -->

<style>
    .caught-monsters{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>