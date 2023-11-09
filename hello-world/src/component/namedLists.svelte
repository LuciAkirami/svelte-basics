<!-- Slot Props-->
<script>
    let characters = [
        {
            name: "Yagami",
            role: "Police",
        },
        {
            name: "Ryuk",
            role: "Shinigami",
        },
        {
            name: "L",
            role: "Detective",
        }
    ]
</script>

{#each characters as character (character) }
    <!--  var_name={var_name} => this way we pass data -->
    <slot name="names-list" data={character} work={character.role} nameu={character.name}/>
{/each}