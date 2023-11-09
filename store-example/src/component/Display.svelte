<script>
    import {count} from "../store/stores"
    // this way not prefered
    // let counter = 0;
    // count.subscribe((value) => {
    //     counter = value
    // })
</script>
<!--Any name after "$" is referred to as coming from the "store"
this is also called as auto-subscription.Auto-subscription only works with 
store variables that are declared (or imported) at the top-level scope of a component.-->
<p>Counter Value: {$count}</p>