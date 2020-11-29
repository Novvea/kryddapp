<script>
	import { createEventDispatcher } from "svelte";
	import { spiceItemsInStore, buySpiceItemsInStore } from "./spices-store.js";
	import Button from "../UI/Button.svelte";
	import Modal from "../UI/Modal.svelte";
	import { LITTLE, MIDDLE, FULL } from "./amount"


	let spiceName;
	let amount = "okänt";
	let newSpiceObject;
	let newSpiceObjectToBuy;

//	export const LITTLE = "bara lite kvar";
//	export const MIDDLE = "medelmycket kvar";
//	export const FULL = "typ full";

	const dispatch = createEventDispatcher();

	function addSpice() {
		if (spiceName) {
			if (amount !== "okänt") {
				newSpiceObject = {
					name: spiceName.toLowerCase(),
					amount: amount,
					id: Math.random(),
					lastUpdated: new Date(),
				};
				spiceItemsInStore.update((oldData) => {
					return {
						[newSpiceObject.name.toLowerCase()]: newSpiceObject,
						...oldData,
					};
				});
			} else {
				alert("Ange hur mycket du har av kryddan med radio-knapparna under");
			}
		} else {
			alert("Du har inte fyllt i ett kryddnamn");
		}}

	function buySpice() {
		newSpiceObjectToBuy = {
			name: spiceName.toLowerCase(),
			amount: "empty",
			id: Math.random(),
			lastUpdated: new Date(),
		};
		buySpiceItemsInStore.update((oldData) => {
			return {
				[newSpiceObjectToBuy.name.toLowerCase()]: newSpiceObjectToBuy,
				...oldData,
			};
		});
	}

	function cancel() {
		dispatch("cancel");
	}
</script>

<style>
	/* .selected {
    background: #01a129;
    border-color: #01a129;
  }*/
</style>

<Modal title="Fyll i din krydda här:" on:cancel>
	<input type="text" bind:value={spiceName} />
	<!--<input type="text" bind:value={spiceId} /> -->
	<label>
		<input type="radio" name="amount" value={LITTLE} bind:group={amount} />
		Bara lite kvar
	</label>
	<label>
		<input type="radio" name="amount" value={MIDDLE} bind:group={amount} />
		Medelmycket
	</label>
	<label>
		<input type="radio" name="amount" value={FULL} bind:group={amount} />
		Typ full
	</label>
	<!--	<button class:selected={amount === LITTLE} on:click={handleOnClickSoonEmpty}>Bara lite kvar</button>
		<button class:selected={amount === MIDDLE} on:click={handleOnClickMedium}>Medelmycket</button>
		<button class:selected={amount === FULL} on:click={handleOnClickFull}>Full</button> -->
	<div slot="footer">
		<Button on:click={addSpice}>Spara kryddan</Button>
		<Button on:click={buySpice}>Köp!</Button>
		<Button on:click={cancel}>Stäng</Button>
	</div>
</Modal>
