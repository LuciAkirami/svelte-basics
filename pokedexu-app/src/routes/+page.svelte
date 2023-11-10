<script lang="ts">
    import { generations } from './generations.js';

    export let data;

</script>
<h1>Welcome to Pokemon API</h1>
<div class="generations">
    {#each generations as generation}
    <div class="generation">
        <p>{generation.name}</p>
    </div>
{/each}
</div>


<div class="monsters">
    {#each data.monsters as monster}
    <div class="monster">
        <div class="monster-content">
            <img src={monster.image} alt="monster.name" class="imageu">
            {monster.name}
        </div>
        <div class="monster-id">
            {monster.id}
        </div>
    </div>
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
        margin: 5px;
        color: #111;
        padding: 1px 10px;
        background-color: #f9f9f9;
    }

    .generation:hover{
        background-color: #dddd;
    }

    .monsters {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .monster {
        display: flex;
        flex-direction: column;
        width: 100px;
        margin: 20px 10px;
        background-color: #eee;
        align-items: center;
        position: relative;
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
        top: 0;
        left: 0;
        padding: 5px;
    }

    .imageu{
        filter: drop-shadow(10px 10px 10px #999);
    }
</style>