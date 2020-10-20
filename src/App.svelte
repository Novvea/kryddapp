<script>
	import { createEventDispatcher } from "svelte";
	import Header from './UI/Header.svelte';
	import Button from './UI/Button.svelte';

	const LITTLE = 'bara lite kvar'
	const MIDDLE = 'medelmycket kvar'
	const FULL = 'typ full'

	let spiceName;
	let spiceItems = {};
	let buySpiceItems ={};
	let amount = 'okänt';


	function addSpice() {
		if (spiceName) {
			spiceItems = {...spiceItems, [spiceName.toLowerCase()]: {amount}}
		} else {
		alert('Du har inte fyllt i ett kryddnamn')}
	}

	function buySpice() {
		if (Object.keys(spiceItems).find(() => spiceName.toLowerCase())) {
			alert('Du har denna krydda i ditt kryddskåp')
		} else if (!spiceName) {
			alert('Du har inte fyllt i ett kryddnamn')
		}else {
			buySpiceItems= {...buySpiceItems, [spiceName.toLowerCase()]: {amount:'empty'}}}
	}

	function cancel () {
		console.log('Fixa så att modal stängs')
	}


function handleOnClickSoonEmpty() {
	amount = LITTLE
}

function handleOnClickMedium() {
	amount = MIDDLE
}

function handleOnClickFull() {
	amount = FULL
}

	$: console.log(spiceItems);	//detta är ett objekt
	//$: console.log(Object.keys(spiceList)) //detta är en array
	$: console.log(buySpiceItems);
</script>

<Header />

<main>
	<p>Dina kryddor:</p>

	<!--Här kommer min modal-->
	<div class="modal-backdrop"/>
	<div class="modal">
		<p>Fyll i din krydda här:</p>
		<input type="text" bind:value={spiceName}>
		<button class:selected={amount === LITTLE} on:click={handleOnClickSoonEmpty}>Bara lite kvar</button>
		<button class:selected={amount === MIDDLE} on:click={handleOnClickMedium}>Medelmycket</button>
		<button class:selected={amount === FULL} on:click={handleOnClickFull}>Full</button>
		<div class="content">	
			<Button on:click={addSpice}>Spara kryddan</Button>
			<Button on:click={buySpice}>Köp!</Button>
		</div>
		<footer>
			<Button on:click={cancel}>Stäng</Button>
		</footer>
	</div>


	<ul class="spice_list">		
		{#each Object.keys(spiceItems) as name}
			<li> {name} </li>
			{:else}
			<p>Din kryddlåda är just nu tom :(</p>
		{/each}
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #cfa828;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.spice_list {
		color:rgb(6, 6, 83);
		list-style-type: none;
	}

	.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }
	.selected {
    background: #01a129;
    border-color: #01a129;
  }

</style>