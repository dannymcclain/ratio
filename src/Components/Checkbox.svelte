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
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  label > span {
    font-size: 14px;
    line-height: 1;
  }

  label > input {
    height: 18px;
    width: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    outline: none;
    transition-duration: 200ms;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    margin-right: 8px;
  }

  label > input:checked {
    border: 2px solid #000;
    background-color: #000;
  }

  label > input:checked + span::before {
    content: "\2713";
    font-weight: 600;
    display: block;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 3px;
    top: 2px;
  }
</style>

<label>
  <input {id} type="checkbox" bind:checked on:change={change} />
  <span>Round to nearest whole number</span>
</label>
