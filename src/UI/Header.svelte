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
  <div class="headerContent">
    <h1>Kryddapp</h1>
    <Button on:click={() => (editMode = 'add')}>Plus krydda</Button>
  </div>
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
    height: 5rem;
    background: #d4d4d4;
    box-shadow: 0 2px 6px rgb(0,0,0,0.26);
    display: flex;
    flex-direction: column;
  }

  .headerContent {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    line-height: 1;
  }

  h1 {
    color: #cfa828;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
    margin: 0;
  }
</style>


