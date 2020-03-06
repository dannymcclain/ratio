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
  function calculateOther() {
    resultA = roundResult
      ? Math.round((ratioA * resultB) / ratioB)
      : (ratioA * resultB) / ratioB;
  }
  function roundAllResults() {
    calculateResult();
    calculateOther();
  }
  function toggleInfo() {
    infoOpen = !infoOpen;
  }
</script>

<style>
  .form {
    width: 100vw;
    height: 80vh;
  }
  .form__label {
    font-size: 27px;
    line-height: 30px;
    font-weight: bold;
    letter-spacing: -0.03em;
  }
  .input--number,
  .input--disabled {
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
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  .input--number:focus {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
  }
  .input--disabled {
    color: #000;
    cursor: not-allowed;
    opacity: 1;
  }
  .info {
    pointer-events: none;
    opacity: 0;
    width: 100vw;
    height: 20vh;
    background: #000;
    color: #fff;
  }

  .info--open {
    opacity: 1;
    pointer-events: auto;
  }
</style>

<main>
  <p on:click={toggleInfo}></p>
  <section class="form">
    <input
      class="input--number"
      size="1"
      type="number"
      bind:value={ratioA}
      on:input={calculateResult} />
    <input
      class="input--number"
      size="1"
      type="number"
      bind:value={ratioB}
      on:input={calculateResult} />
    <input
      class="input--number"
      size="1"
      type="number"
      bind:value={resultA}
      on:input={calculateResult} />
    <input
      class="input--disabled"
      size="1"
      type="number"
      bind:value={resultB}
      on:input={calculateOther} />

    <label>
      <input
        type="checkbox"
        bind:checked={roundResult}
        on:change={roundAllResults} />
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
