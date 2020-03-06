<script>
  let ratioA = 4;
  let ratioB = 3;
  let resultA = 1200;
  let resultB = 900;
  let roundResult = false;

  let infoOpen = false;

  function calculateResult() {
    resultB = roundResult
      ? Math.round((resultA * ratioB) / ratioA)
      : (resultA * ratioB) / ratioA;
  }
  function toggleInfo() {
    infoOpen = !infoOpen;
  }
</script>

<style>
  .info {
    pointer-events: none;
    opacity: 0;
  }

  .info--open {
    opacity: 1;
    pointer-events: auto;
  }
</style>

<main>
  <button on:click={toggleInfo}>Toggle Info</button>
  <section class="form">
    <input
      size="1"
      type="number"
      bind:value={ratioA}
      on:input={calculateResult} />
    <input
      size="1"
      type="number"
      bind:value={ratioB}
      on:input={calculateResult} />
    <input
      size="1"
      type="number"
      bind:value={resultA}
      on:input={calculateResult} />
    <input size="1" type="number" bind:value={resultB} disabled />

    <label>
      <input
        type="checkbox"
        bind:checked={roundResult}
        on:change={calculateResult} />
      Round to nearest whole number
    </label>
  </section>
  <section class="info {infoOpen ? 'info--open' : ''}">
    <h1>Ratio calculator.</h1>
    <p>A simple aspect ratio/proportion calculator.</p>
    <p>
      Created by
      <a href="https://dannymcclain.com">Danny McClain</a>
      .
    </p>
  </section>
</main>
