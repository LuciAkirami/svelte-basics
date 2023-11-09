<script>
	import Display from "./component/Display.svelte";
	import Increment from "./component/Increment.svelte";
	import Decrement from "./component/Decrement.svelte";
	import Reset from "./component/Reset.svelte";
	import {time,elasped, anotherCounter} from './store/stores'

	const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);
</script>

<main>
	<h2>Writable Stores</h2>
	<Display />
	<Increment />
	<Decrement />
	<Reset />
	<h2>Writable Store</h2>
	<p>{formatter.format($time)}</p>
	<h2>Derived Store</h2>
	<p>This website is open since {$elasped}</p>
	<h2>Custom Stores</h2>
	<h1>The count is {$anotherCounter}</h1>
	<button on:click={anotherCounter.increment}>+</button>
	<button on:click={anotherCounter.decrement}>-</button>
	<button on:click={anotherCounter.reset}>reset</button>

</main>

<style>
	main {
		text-align: center;
	}

</style>