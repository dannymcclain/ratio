<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function change() {
    dispatch("change");
  }

  export let checked = false;
  export let id;
</script>

<style>
  label {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  label > span {
    margin-bottom: 9px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  label > input {
    height: 27px;
    width: 27px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 2px solid #000;
    border-radius: 0;
    outline: none;
    transition-duration: 200ms;
    background-color: transparent;
    cursor: pointer;
    margin-right: 9px;
  }

  label > input:checked {
    border: 2px solid #000;
    background-color: #000;
  }

  label > input:checked + span::before {
    content: url(/images/check.svg);
    display: block;
    text-align: center;
    color: var(--color-accent);
    position: absolute;
    left: 4px;
    top: 4px;
  }
</style>

<label>
  <input {id} type="checkbox" bind:checked on:change={change} />
  <span>Round to nearest whole number</span>
</label>
