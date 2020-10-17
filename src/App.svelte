<script>
	import Header from './UI/Header.svelte'
	
	let spiceName;
	let spiceItems = {};
	let buySpiceItems ={};
	let ammount = 'empty';

	function addSpice() {
		spiceItems = {...spiceItems, [spiceName.toLowerCase()]: {ammount}}
	}

	function buySpice() {
		if (Object.keys(spiceItems).find(() => spiceName.toLowerCase())) {
			alert('Du har denna krydda i ditt kryddskåp')
		} else {
			buySpiceItems= {...buySpiceItems, [spiceName.toLowerCase()]: {ammount:'empty'}}}
	}

	function cancel () {
		console.log('Close modal')
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
		<button on:click={() => (ammount='bara lite kvar')}>Bara lite kvar</button>
		<button on:click={() => (ammount='medelmycket kvar')}>Medelmycket</button>
		<button on:click={() => (ammount='typ full')}>Full</button>
		<div class="content">	
			<button on:click={addSpice}>Spara kryddan</button>
			<button on:click={buySpice}>Köp!</button>
		</div>
		<footer>
			<button on:click={cancel}>Stäng</button>
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
</style>