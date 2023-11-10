<script lang="ts">
    import { generations } from './generations.js';

    export let data;

</script>
<h1>Welcome to Pokemon API</h1>
<div class="generations">
    {#each generations as generation}
    <div class="generation">
        {generation.name}
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