<script lang='ts'>
    import type { Monster } from "./+page";

    export let monster: Monster;
    export let updateSearchParams: (key: string, value: string) => void;
    export let isInteractive = false;
</script>

<div class="monster">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={isInteractive ? () => {updateSearchParams('monsterId',monster.id)} : ()=>{}}>
        <div class="monster-content">
            <img src={monster.image} alt="monster.name" class="imageu">
            {monster.name}
        </div>
        <div class="monster-id">
            {monster.id}
        </div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#if isInteractive}
        <div on:click={() => {updateSearchParams('monsterId2',monster.id)}}>
            Add Monster
        </div>
    {/if}
    
</div>

<style>
        .monster {
        display: flex;
        flex-direction: column;
        width: 100px;
        margin: 20px 10px;
        background-color: #eee;
        border-radius: 10px;
        align-items: center;
        position: relative;
        /* background: rgba(255, 255, 255, 0.23);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
    }

    .monster:hover {
        background-color: #dddd;
    }

    .monster-content {
        text-align: center;
        padding: 10px;
    }

    .monster-id {
        position: absolute;
        font-size: 0.8em;
        color: #999;
        top: 0;
        left: 0;
        padding: 5px;
    }

    .imageu{
        filter: drop-shadow(10px 10px 10px #999);
    }
</style>