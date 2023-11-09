<script>
	// ------- ContextAPI --------
	import ComponentA from "./component/componentA.svelte";
	// now we need to send some value to componentC, but compC is in
	// compB which is in compA, so one easy way to send data directly to
	// compC is using setContext 

	import { setContext } from "svelte";

	let username = "Lucifer" 
	setContext('user-context',username) // passing the username to context

	// Component Events 
	import Popup from "./component/Popup.svelte";
	// when showpopup is true we are calling the Popup component
	let showPopup = false;

	function changePopup(event) {
		// getting the message/variable from child
		console.log(event.detail)
		showPopup = false
	}

	// Event Forwarding
	import Outer from "./component/outer.svelte";

	function handleGreet(event) {
		alert(event.detail)
	}

	import Button from "./component/Button.svelte";

	// Slots - ReUsing Components
	// In slots we can post any html 
	import Card from "./component/Card.svelte";

	// Slots - Named Slots
	import CardsAnother from "./component/CardsAnother.svelte";

	// Slots Props (Modifying how namedList data is displayed from parent, i.e. App.svelte)
	import NamedLists from "./component/namedLists.svelte";

	// Component Styles
	import ChildComponent from "./component/childComponent.svelte";
  
	// OnMount() -> HTTP request
	import PostOnMount from "./component/PostOnMount.svelte";
	
	// Dynamic Components
	import TabA from "./component/TabA.svelte";
	import TabB from "./component/TabB.svelte";
	import TabC from "./component/TabC.svelte";

	let activeComponent = TabA;

	// Module Context - Sharing Data Between Component Instances
	import Counter, {getTotalCount} from "./component/Counter.svelte";

	function alertTotal() {
		alert(getTotalCount())
	}

</script>

<main>
	<ComponentA />
	<button on:click={() => (showPopup=true)}>Show Popup</button>
	{#if showPopup}
	<!-- Receiving an event from child -->
		<Popup on:close={changePopup}/>
	{/if}

	<!-------- Event Forwarding ---------->
	<h2>Event Forwarding</h2>
	<Outer on:greet={handleGreet} />
	<!-- The on:click is forwarded from Button -->
	<Button on:click={()=>alert("Heyyy")}/>

	<!-- Slots -->
	<h2>Slots</h2>
	<Card>Content 1</Card>
	<Card><h2>Content 2</h2></Card>
	<Card/>

	<!-- Named Slots -->
	<h2>Named Slots</h2>
	<CardsAnother>
		<div slot="header">
			<h4>This is header slot</h4>
		</div>
		<div slot="body">
			<img src="https://picsum.photos/200" alt="">
		</div>
		<div slot="footer">
			<button>Footer Button</button>
		</div>
	</CardsAnother>

	<!--Not a necessary to use all slots-->
	<CardsAnother>
		<div slot="header">
			<h4>This is header slot</h4>
		</div>
		<div slot="body">
			<img src="https://picsum.photos/200" alt="">
		</div>
	</CardsAnother>

	<!-- Slot Props-->
	<h2>Slot Props</h2>
	<NamedLists>
		<!-- we access the data from child with "let:var_name"-->
		<p slot="names-list" style="text-decoration: wavy;" let:data>{data.name} {data.role}</p>
		<!--below also works-->
		<!-- <p slot="names-list" style="text-decoration: wavy;" let:work let:nameu>{work} {nameu}</p> -->
	</NamedLists>

	<!--Component Styles-->
	<h2>Component Styles</h2>
	<!--Global Style is set to all child components, see below in styles-->
	<h3>This is Parent Component with Global Style</h3>
	<!--By default each child has it's own style and is not effected by parent
	unless you introduce global style-->
	<h6>This is Parent Component with Parent Style</h6>
	<ChildComponent />

	<!-- onMount Http Request -->
	<h2>On Mount</h2>
	<PostOnMount />

	<!-- Switching Between Components using svelte:component -->
	<h2>Dynamic Components</h2>
	<!--based on different button, assign that Tab to activeComponent-->
	<button on:click={()=>activeComponent=TabA}>TabA</button>
	<button on:click={()=>activeComponent=TabB}>TabB</button>
	<button on:click={()=>activeComponent=TabC}>TabC</button>

	<!-- svelte:component renders any component that is binded to
	"this". The "activeComponent" contains different Tab component
	depending on the button pressed above -->
	<svelte:component this={activeComponent} />

	<!--Module Context - Data Sharing Between Component Instances-->
	<h2>Module Context - Data Sharing Between Component Instances</h2>
	<button on:click={alertTotal}>Get Total</button>
	<br>
	<!--Three Counter Instances-->
	<Counter />
	<Counter />
	<Counter />
	
</main>

<style>
	main {
		text-align: center;
	}
	h6 {
		color: blueviolet;
	}
	/* this is global component */
	:global(h3) {
		color:blue
	}
</style>
