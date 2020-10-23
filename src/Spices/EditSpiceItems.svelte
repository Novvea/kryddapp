<script>
import { createEventDispatcher } from "svelte";
import Button from "../UI/Button.svelte";
import Modal from "../UI/Modal.svelte";

export let spiceName;
let amount = 'okänt';

const LITTLE = 'bara lite kvar'
const MIDDLE = 'medelmycket kvar'
const FULL = 'typ full'

const dispatch = createEventDispatcher();

	function handleOnClickSoonEmpty() {
		amount = LITTLE}
	function handleOnClickMedium() {
		amount = MIDDLE}
	function handleOnClickFull() {
		amount = FULL}

	function addSpice() {
		dispatch('save', {spiceName, amount})
	}

	function buySpice() {
		dispatch('buy', {spiceName})
	}

	function cancel() {
		dispatch('cancel');
	}
  
</script>
<Modal title="Fyll i din krydda här:" on:cancel>
		<input type="text" bind:value={spiceName} />
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