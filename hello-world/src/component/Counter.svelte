<script context="module">
    // variables declared in module context are not reactive
    // hence the component doesnt render when the variables update
    // in context module
    let totalCount = 0;

    export function getTotalCount() {
        return totalCount
    }
</script>

<script>
    let count = 0
    
    function incrCount() {
        count += 1
        totalCount += 1
    }
</script>

<button on:click={incrCount}>Count {count}</button>
<!-- <p>{totalCount}</p> this never updates as its declared in module context--> 
<br>