<script>
	import {
		spiceItemsInStore,
		buySpiceItemsInStore,
		allSpicesLibrary,
	} from "./Spices/spices-store.js";
	import Header from "./UI/Header.svelte";
	import Button from "./UI/Button.svelte";
	//import EditSpiceItems from "./Spices/EditSpiceItems.svelte";
	import { LITTLE, MIDDLE, FULL, EMPTY } from "./Spices/amount"

	let spiceItems = {};
	let buySpiceItems = {};
	let searchedSpice;
	let allSpices;
//	let amount;
	let selected;
	let answer = '';

	let amountArray = [
		{text:LITTLE},
		{text:MIDDLE},
		{text:FULL},
	//	{id:4, text:EMPTY}
	];
//	console.log(LITTLE, MIDDLE, FULL)

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

/*	function cancelEdit(event) {
		editMode = null;
		console.log(event);
		console.log("Vi är i cancelEdit");
	}*/

	$: console.log(spiceItems);
	$: console.log(buySpiceItems);
	$: console.log(Object.keys(allSpices));
	$: console.log(selected)
</script>

<Header />

<main>
<!--	SÖK -->
	<div class="search_container">
		<div class="search_content">
			<input type="text" bind:value={searchedSpice} class="search_input" />
			<Button on:click={goSearchSpice}>Sök</Button>
		</div>
	</div>
	<div>
		{#if searchedSpice && searchedSpice.length >= 2}
				<p>Menar du kanske {Object.keys(allSpices)
					.map(s => allSpices[s].name)
					.filter(s => 
						s.includes(searchedSpice)
					)}</p>
		{/if}
	</div>

<!--	KRYDDSKÅPET -->
	<div class="mySpices_div app_div">
	<h1>Dina kryddor:</h1>
	<ul class="spice_list">
		{#each Object.keys(spiceItems) as name}
		<li>{name}</li>
		<select bind:value={selected} on:blur={() => answer = ''}>
			{#each amountArray as arrayAnswer}
				<option value={arrayAnswer}>
					{arrayAnswer.text}
				</option>
			{/each}
		</select>
	<p>{spiceItems[name].amount}</p>
		{:else}
			<p>Din kryddlåda är just nu tom :(</p>
		{/each}
	</ul>	
	</div>

<!--	KÖP -->	
<div class="toBuy_div app_div">
	{#if Object.keys(buySpiceItems).length}
		<h1>Att köpa:</h1>
		<ul class="spice_list_buy app_div">
			{#each Object.keys(buySpiceItems) as name}
				<li>{name}</li>
			{/each}
		</ul>
	{/if}
</div>
</main>


<style>

	main {
		text-align: center;
		/*padding: 1em;*/
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

	.app_div {

	}
	.search_container {
		width: 100%;
		padding-top: 5rem;
		background:chocolate;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search_content {
		flex: 1;
		padding: 2rem;
		max-width: 768px;
		display: flex;
	}

	.search_input {
		flex: 1;
		max-width: 768px;
		margin-right: 16px;
		border-radius: 6px;
	}

	.mySpices_div {
		padding: 2rem;
		background: rgb(10 140 70);
	}
	.toBuy_div {
		padding: 2rem;
		background:#ccc;
	}
</style>

