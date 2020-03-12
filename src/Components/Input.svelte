<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function change() {
    dispatch("change");
  }

  export let required = false;
  export let disabled = false;
  export const type = "number";
  export let value = 4;
  export let placeholder = "?";
  export let id;

  $: if (!value) value = 0;
</script>

<style>
  input {
    font-weight: 800;
    font-size: 81px;
    line-height: 81px;
    letter-spacing: -0.06em;
    max-width: 297px;
    height: 99px;
    padding: 0 0 9px 0;
    background: transparent;
    outline: none;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    transition: border 300ms linear;
  }
  input:focus {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
  }

  input::placeholder {
    color: #000;
    font-weight: 800;
    padding-top: 10px;
    opacity: 0.2;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<input
  size="1"
  type="number"
  {id}
  bind:value
  {disabled}
  {required}
  {placeholder}
  on:input={change} />
