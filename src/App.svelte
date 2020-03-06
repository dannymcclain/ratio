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
    console.log(ratioA, ratioB, resultA, resultB);
  }

  function toggleInfo() {
    infoOpen = !infoOpen;
  }
</script>

<style>
  main {
    height: 100vh;
    overflow: hidden;
    position: relative;
    padding: 63px;
  }
  .form {
    width: 100vw;
    height: 100vh;
  }
  .form__label {
    font-size: 27px;
    line-height: 30px;
    font-weight: bold;
    letter-spacing: -0.03em;
  }
  .form__input--number,
  .form__input--number--disabled {
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
  .form__input--number:focus {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
  }
  .form__input--number--disabled,
  input[type="number"]:disabled {
    color: #000;
    cursor: not-allowed;
    opacity: 1;
    -webkit-text-fill-color: #000;
  }
  input[type="number"]::placeholder {
    color: #000;
    font-size: 45px;
    font-weight: 800;
    padding-top: 14px;
    opacity: 0.1;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    color: #fff;
    padding: 63px;
    transform: translateY(50vh);
    transition: transform 400ms cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 200ms linear;
  }
  .info--open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  .toggle {
    padding: 18px;
    font-weight: 800;
    cursor: pointer;
  }
</style>

<main>
  <section class="form">
    <p class="form__label">Ratio</p>
    <input
      placeholder=""
      class="form__input--number"
      size="1"
      type="number"
      bind:value={ratioA}
      on:input={calculateResult} />
    <input
      placeholder=""
      class="form__input--number"
      size="1"
      type="number"
      bind:value={ratioB}
      on:input={calculateResult} />
    <p class="form__label">Result</p>
    <input
      placeholder=""
      class="form__input--number"
      size="1"
      type="number"
      bind:value={resultA}
      on:input={calculateResult} />
    <input
      placeholder=""
      class="form__input--number--disabled"
      size="1"
      type="number"
      bind:value={resultB}
      disabled />

    <label>
      <input
        class="form__input--checkbox"
        type="checkbox"
        bind:checked={roundResult}
        on:change={calculateResult} />
      Round to nearest whole number
    </label>
    <p class="toggle" on:click={toggleInfo}></p>
  </section>
  <section class="info {infoOpen ? 'info--open' : ''}">
    <p class="toggle" on:click={toggleInfo}></p>
    <h1>Ratio calculator.</h1>
    <p>A simple aspect ratio/proportion calculator.</p>
    <p>
      Created by
      <a href="https://dannymcclain.com">Danny McClain</a>
      .
    </p>
  </section>
</main>
