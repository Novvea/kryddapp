<script>
	import {
		spiceItemsInStore,
		buySpiceItemsInStore,
		allSpicesLibrary,
	} from "./Spices/spices-store.js";
	import Header from "./UI/Header.svelte";
	import Button from "./UI/Button.svelte";
	import EditSpiceItems from "./Spices/EditSpiceItems.svelte";

	let spiceItems = {};
	let buySpiceItems = {};
	let searchedSpice;
	let editMode;
	let allSpices;

	spiceItemsInStore.subscribe((dataInStore) => (spiceItems = dataInStore));
	buySpiceItemsInStore.subscribe(
		(dataInStore) => (buySpiceItems = dataInStore)
	);
	allSpicesLibrary.subscribe((dataInStore) => (allSpices = dataInStore));

	//searchspice, gör en funktion som kollar i store
	function goSearchSpice() {
		if (Object.keys(spiceItems).find((item) => item === searchedSpice)) {
			console.log("You already have this spice");
		} else if (Object.keys(buySpiceItems).find((item) => item === searchedSpice)){
			console.log("You want to buy this spice!")
		} else {
			console.log("You dont have this spice");
		}
	}

	function cancelEdit(event) {
		editMode = null;
		console.log(event);
		console.log("Vi är i cancelEdit");
	}

	$: console.log(spiceItems);
	$: console.log(buySpiceItems);
	$: console.log(Object.keys(allSpices));
</script>

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
	h2 {
		color: #cfa828;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.spice_list {
		color: rgb(6, 6, 83);
		list-style-type: none;
	}

	.spice_list_buy {
		color: rgb(83, 18, 6);
		list-style-type: none;
	}
</style>

<Header />

<main>
	<h1>ppaddyrK</h1>
	<div>
		<input type="text" bind:value={searchedSpice} />
		<Button on:click={goSearchSpice}>Sök</Button>
	</div>
	<div>
		{#if searchedSpice && searchedSpice.length >= 2}
				<p>Menar du kanske {Object.keys(allSpices).filter(s => s.includes(searchedSpice))}</p>
				
		{/if}
	</div>
	<div>
		<Button on:click={() => (editMode = 'add')}>Plus krydda</Button>
	</div>

	{#if editMode === 'add'}
		<EditSpiceItems on:cancel={cancelEdit} />
	{/if}

	<p>Dina kryddor:</p>
	<ul class="spice_list">
		{#each Object.keys(spiceItems) as name}
			<li>{name}</li>
		{:else}
			<p>Din kryddlåda är just nu tom :(</p>
		{/each}
	</ul>

	{#if Object.keys(buySpiceItems).length}
		<p>Att köpa:</p>
		<ul class="spice_list_buy">
			{#each Object.keys(buySpiceItems) as name}
				<li>{name}</li>
			{/each}
		</ul>
	{/if}
</main>
