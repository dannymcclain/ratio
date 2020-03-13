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
  export let divider = false;
  $: if (!value) value = 0;
</script>

<style>
  input {
    flex: 1;
    font-weight: normal;
    font-size: 14px;
    line-height: 1;
    padding: 12px 16px;
    background: white;
    outline: none;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    transition: border 300ms linear;
    margin: 0;
    min-width: 1px;
  }
  input:focus {
    border: 1px solid #000;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .divider {
    flex: 0;
    font-weight: normal;
    font-size: 14px;
    line-height: 1;
    color: #aaa;
    display: inline;
    margin: 0 12px;
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
{#if divider}
  <p class="divider">:</p>
{/if}
