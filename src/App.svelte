<script>
	import { spiceItemsInStore, buySpiceItemsInStore } from './Spices/spices-store.js'
	import Header from './UI/Header.svelte';
	import Button from './UI/Button.svelte';
	import EditSpiceItems from './Spices/EditSpiceItems.svelte';

	let spiceItems = {};
	let buySpiceItems = {};
	
		spiceItemsInStore.subscribe((dataInStore) =>
			spiceItems = dataInStore
		);

	 	buySpiceItemsInStore.subscribe((dataInStore) =>
	 		buySpiceItems = dataInStore
	 	);

	let editMode;

	function addSpice(event) {
		console.log(event)
		console.log('vi är i addSpice')
		}

	function buySpice(event) {
		console.log(event)
		console.log('vi är i buySpice')
	}

	function cancelEdit(event) {
		editMode = null;
		console.log(event)
		console.log('Vi är i cancelEdit')
	}

	$: console.log(spiceItems);
	$: console.log(buySpiceItems);
</script>

<Header />

<main>

	<h1>ppaddyrK</h1>
	<div>
		<Button on:click={() => (editMode = 'add')}>Plus krydda</Button>
	</div>
	{#if editMode === 'add'}
		<!--<EditSpiceItems spiceName={spiceName} amount={amount} on:addSpice={addSpice} on:cancel={cancelEdit}>	</EditSpiceItems>
		-->
		<EditSpiceItems on:save={addSpice} on:buy={buySpice} on:cancel={cancelEdit}></EditSpiceItems>
	{/if}

	
	<p>Dina kryddor:</p>
	<ul class="spice_list">		
		{#each Object.keys(spiceItems) as name}
			<li> {name} </li>
			{:else}
			<p>Din kryddlåda är just nu tom :(</p>
		{/each}
	</ul>

{#if Object.keys(buySpiceItems).length}
	<p>Att köpa:</p>
	<ul class="spice_list_buy">		
		{#each Object.keys(buySpiceItems) as name}
			<li> {name} </li>
		{/each}
	</ul>
{/if}

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

	.spice_list_buy {
		color:rgb(83, 18, 6);
		list-style-type: none;
	}

</style>