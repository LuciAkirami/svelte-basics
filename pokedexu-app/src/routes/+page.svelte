<script lang="ts">
    import { generations } from './generations.js';
    import type { Monster } from './+page.js';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import Monsters from './Monsters.svelte';

    export let data;
    $: monsterId = $page.url.searchParams.get('monsterId') || '';
    $: monster = data.monsters.find((monster) => monster.id == monsterId);
    $: monsterId2 = $page.url.searchParams.get('monsterId2') || '';
    $: monster2 = data.monsters.find((monster) => monster.id == monsterId2);

    // function getMonster(monster: Monster) {
    //     monsterId = monster.id;
    //     goto(`?monsterid=${monsterId}`)
    // }

    function updateSearchParams(key: string, value: string){
        const searchParams = new URLSearchParams($page.url.searchParams)
        searchParams.set(key,value)
        goto(`?${searchParams.toString()}`)
    }

</script>
<h1>Welcome to Pokemon API</h1>

{#if monster}
    <Monsters 
    monster = {monster}
    updateSearchParams={updateSearchParams}
    />
{/if}

{#if monster2}
    <Monsters 
    monster = {monster2}
    updateSearchParams={updateSearchParams}
    />
{/if}

<div class="generations">
    {#each generations as generation}
    <div class="generation">
        {generation.name}
    </div>
{/each}
</div>


<div class="monsters">
    {#each data.monsters as monster}
        <Monsters 
            monster={monster}
            updateSearchParams={updateSearchParams}
            isInteractive = {true}
        />
    {/each}
</div>


<style>
    .generations {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .generation {
        text-align: center;
        border: 1px solid black;
        margin: 10px;
        color: #111;
        padding: 5px 10px;
        background-color: #f9f9f9;
    }

    .generation:hover{
        background-color: #dddd;
    }

    .monsters {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

</style>