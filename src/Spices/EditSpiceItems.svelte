<script>
import {spiceItemsInStore, buySpiceItemsInStore} from './spices-store.js';
import { createEventDispatcher } from "svelte";
import Button from "../UI/Button.svelte";
import Modal from "../UI/Modal.svelte";

//hämta ev in det som finns i store
//dvs spiceItemsInStore som innehåller salt och peppar
//uppdatera min store för krydoor i kryddskåpet

let spiceName;
//let spiceId;
let amount = 'okänt';
let newSpiceObject;
let newSpiceObjectToBuy;

const LITTLE = 'bara lite kvar'
const MIDDLE = 'medelmycket kvar'
const FULL = 'typ full'

const dispatch = createEventDispatcher();

	function handleOnClickSoonEmpty() {
		amount = LITTLE
	}
	function handleOnClickMedium() {
		amount = MIDDLE
	}
	function handleOnClickFull() {
		amount = FULL
	}

	function addSpice() {
		if (spiceName) {
			if (amount !== 'okänt') {
				newSpiceObject = {
				name: spiceName.toLowerCase(),
				amount: amount,
				id: Math.random(),
				lastUpdated: new Date(),
				}
			spiceItemsInStore.update((oldData) => {
			return {[newSpiceObject.name.toLowerCase()]: newSpiceObject, ...oldData}
			})
		} else {
				alert('Ange hur mycket du har av kryddan med knapparna till höger')
			}
		} else {
			alert('Du har inte fyllt i ett kryddnamn')
		}

		//dispatch('save')
		//console.log(newSpiceObject)
	}

	//FORTSÄTT HÄR!
	function buySpice() {
		newSpiceObjectToBuy = {
				name: spiceName.toLowerCase(),
				amount: 'empty',
				id: Math.random(),
				lastUpdated: new Date(),
		}
		buySpiceItemsInStore.update((oldData) => {
			return{[newSpiceObjectToBuy.name.toLowerCase()]: newSpiceObjectToBuy, ...oldData}
		})
		//dispatch('buy')

	/*	if (Object.keys(spiceItems).find(() => spiceName.toLowerCase())) {
			alert('Du har redan denna krydda i ditt kryddskåp')
		} else if (!spiceName) {
			alert('Du har inte fyllt i ett kryddnamn')
		}else {
			buySpiceItems= {...buySpiceItems, [spiceName.toLowerCase()]: {amount:'empty'}}}
	*/
	}


	function cancel() {
		dispatch('cancel');
	}
  
</script>

<Modal title="Fyll i din krydda här:" on:cancel>
		<input type="text" bind:value={spiceName} />
		<!--<input type="text" bind:value={spiceId} /> -->
		<button class:selected={amount === LITTLE} on:click={handleOnClickSoonEmpty}>Bara lite kvar</button>
		<button class:selected={amount === MIDDLE} on:click={handleOnClickMedium}>Medelmycket</button>
		<button class:selected={amount === FULL} on:click={handleOnClickFull}>Full</button>   
		<div slot="footer">
			<Button on:click={addSpice} >Spara kryddan</Button>
			<Button on:click={buySpice}>Köp!</Button>
			<Button on:click={cancel}>Stäng</Button>
		</div>
  </Modal>
  
  <style>
  .selected {
    background: #01a129;
    border-color: #01a129;
  }
  </style>