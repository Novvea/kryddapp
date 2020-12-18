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

	let amountArray = [
		LITTLE,
		MIDDLE,
		FULL,
	];

	spiceItemsInStore.subscribe((dataInStore) => (spiceItems = dataInStore));
		console.log(spiceItems);
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
	<div class="mySpices_container">
		<div class="mySpices_content">
			<h1>Dina kryddor:</h1>
			<ul class="spice_list">
				{#each Object.keys(spiceItems) as spiceId}
					<li class="spice_list_item">
						<div class="spice_name">{spiceItems[spiceId].name}</div>

					<select bind:value={spiceItems[spiceId].amount} class="spice_amount">
							{#each amountArray as amountItem}
								<option value={amountItem}>
									{amountItem} 
								</option>
							{/each}
						</select> 
					</li>
				{:else}
					<p>Din kryddlåda är just nu tom :(</p>
				{/each}
			</ul>	
			</div>
		</div>
	

<!--	KÖP -->	
<div class="toBuy_div">
	{#if Object.keys(buySpiceItems).length}
		<h1>Att köpa:</h1>
		<ul class="spice_list_buy">
			{#each Object.keys(buySpiceItems) as name}
				<li class="spice_list_item">{name}</li>
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
		font-size: 3em;
		font-weight: 100;
		margin: 0;
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
		padding: 0;
	}

	.spice_list_item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background: rgb(207, 168, 40, 0.33);
		margin: 1rem 0;
		border-radius: 10px;
	}

	.spice_list_buy {
		color: rgb(83, 18, 6);
		list-style-type: none;
		max-width: 768px;
		margin: 0 auto;
		padding: 0;
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

	.mySpices_container {
		background: rgb(10, 140, 70);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mySpices_content {
		flex: 1;
		max-width: 768px;
	}

	.spice_name {
		flex: 1;
		text-align: left;
		font-weight: bold;
		text-transform: capitalize;
	}

	.spice_amount {
		flex: 1;
	}

	.toBuy_div {
		padding: 2rem;
	}
</style>

