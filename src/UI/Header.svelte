<script>
import Button from "./Button.svelte";
import EditSpiceItems from '../Spices/EditSpiceItems.svelte'

let editMode;

function cancelEdit(event) {
		editMode = null;
		console.log(event);
		console.log("Vi är i cancelEdit");
	}
</script>

<header>
  <h1>Kryddapp</h1>
  <Button on:click={() => (editMode = 'add')}>Plus krydda</Button>
</header>

{#if editMode === 'add'}
<EditSpiceItems on:cancel={cancelEdit} />
{/if}

<style>
  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 4rem;
    background: #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 6px rgb(0,0,0,0.26);
  }

  h1 {
    color: #cfa828;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
    margin: 0;
  }
</style>


