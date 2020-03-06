<script>
  let ratioA = 4;
  let ratioB = 3;
  let resultA = 1200;
  let resultB = 900;
  let roundResult = false;
  function calculateResult() {
    resultB = roundResult
      ? Math.round((resultA * ratioB) / ratioA)
      : (resultA * ratioB) / ratioA;
  }
</script>

<style>

</style>

<main>
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
</main>
