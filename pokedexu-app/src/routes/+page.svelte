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
    $: selectedGenerationId = $page.url.searchParams.get('generationId') || '';

    let formData = {
        searchString: ""
    }

    let searchString = ''

    function formSearchAction() {
        searchString = formData.searchString
    }

    $: selectedMonsters = data.monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(searchString.toLowerCase())
    })

    function updateSearchParams(key: string, value: string){
        const searchParams = new URLSearchParams($page.url.searchParams)
        searchParams.set(key,value)
        goto(`?${searchParams.toString()}`)
    }

</script>
<h1 style="text-align: center;">Poke Catcher</h1>

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
    <button class="generation" 
    class:active = {selectedGenerationId === 'all'}
    on:click={()=>updateSearchParams("generationId","all")}>
        all
    </button>
    {#each generations as generation}
        <button class="generation" 
        class:active = {selectedGenerationId === generation.id.toString()}
        on:click={()=>updateSearchParams("generationId",generation.id.toString())}>
            {generation.name}
        </button>
    {/each}
</div>

<form class="search-form" on:submit|preventDefault={formSearchAction}>
    <input type="text" bind:value={formData.searchString} placeholder="Pokemon Name" />
    <input type="submit" value="search"/>
    <!-- <p>{formData.searchString}</p> -->
</form>

<div class="monsters">
    {#each selectedMonsters as monster}
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

    .generation.active {
        background-color: #333;
        color: #ddd;
    }

    .generation.active:hover {
        background-color: #222;
        color: #ddd;
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

    .search-form{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 20px 0px;
    }

    .search-form input[type="text"] {
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid black
    }

    .search-form input[type='submit'] {
        padding: 5px 10px;
        margin-left: 10px;
        color: #eee;
        background-color: #333;
        border: 1px solid #333;
        border-radius: 5px;
    }

</style>