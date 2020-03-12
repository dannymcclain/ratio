<script>
  import Info from "./Components/Info.svelte";
  import Input from "./Components/Input.svelte";
  import Checkbox from "./Components/Checkbox.svelte";

  let ratioA = 4;
  let ratioB = 3;
  let resultA = 1200;
  let resultB = 900;
  let focusResultA = false;
  let roundResult = false;

  let infoOpen = false;

  function calculateB() {
    focusResultA = false;
    resultB = roundResult
      ? Math.round((resultA * ratioB) / ratioA)
      : (resultA * ratioB) / ratioA;
  }

  function calculateA() {
    focusResultA = true;
    resultA = roundResult
      ? Math.round((ratioA * resultB) / ratioB)
      : (ratioA * resultB) / ratioB;
  }

  function toggleInfo() {
    infoOpen = !infoOpen;
  }
</script>

<style>
  :root {
    --color-accent: #ffbfea;
  }
  :global(body) {
    color: #000;
    background: var(--color-accent);
    box-sizing: border-box;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  main {
    position: relative;
    padding: 63px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .wrap {
    margin-bottom: 27px;
  }

  label {
    margin-bottom: 9px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  :global(.toggle) {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    padding: 7px 9px;
    background: transparent;
    outline: none;
    border-radius: 0;
    cursor: pointer;
    transition: color 100ms linear, background 100ms linear;
  }
  .toggle--info {
    border: 2px solid #000;
    color: #000;
  }
  .toggle--info:hover {
    background: #000;
    color: var(--color-accent);
  }
</style>

<main>
  <button class="toggle toggle--info" on:click={toggleInfo}>Info</button>
  <section>
    <div class="wrap">
      <label>Ratio</label>
      <Input
        id="ratioA"
        bind:value={ratioA}
        on:change={focusResultA ? calculateA() : calculateB()}
        divider="true" />

      <Input
        id="ratioB"
        bind:value={ratioB}
        on:change={focusResultA ? calculateA() : calculateB()} />
    </div>

    <div class="wrap">
      <label>Result</label>
      <Input
        id="resultA"
        bind:value={resultA}
        on:change={calculateB}
        divider="true" />
      <Input id="resultB" bind:value={resultB} on:change={calculateA} />
    </div>
    <div class="wrap">
      <Checkbox
        id="roundResult"
        bind:checked={roundResult}
        on:change={focusResultA ? calculateA() : calculateB()} />
    </div>
  </section>
</main>
<Info {infoOpen} on:close={toggleInfo} />
