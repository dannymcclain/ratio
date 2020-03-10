<script>
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
    height: 100vh;
    overflow: hidden;
    position: relative;
    padding: 63px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
  .form {
    margin-bottom: 36px;
  }
  .form__label,
  .form__input--checkbox > span {
    margin-bottom: 9px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }
  .form__divider {
    font-weight: 800;
    font-size: 81px;
    line-height: 81px;
    letter-spacing: -0.06em;
    display: inline;
    margin: 0 36px;
  }
  .form__input--number {
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
  .form__input--number:focus {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
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

  .form__input--checkbox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    position: relative;
  }
  .form__input--checkbox > span {
    margin-bottom: 6px;
  }
  .form__input--checkbox > input {
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

  .form__input--checkbox > input:checked {
    border: 2px solid #000;
    background-color: #000;
  }
  .form__input--checkbox > input:checked + span::before {
    font-size: 21px;
    content: "\2713";
    display: block;
    text-align: center;
    color: var(--color-accent);
    position: absolute;
    left: 4px;
    top: 6px;
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
    /* padding: 63px; */
    transform: translateY(50vh);
    transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 200ms linear;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
  .info--open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  .info .form__label {
    color: var(--color-accent);
  }
  .info .form__label a {
    color: var(--color-accent);
    text-decoration: underline;
  }
  .info .form__label a:hover {
    color: #fff;
  }
  .toggle {
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
  .toggle--close {
    border: 2px solid var(--color-accent);
    color: var(--color-accent);
  }
  .toggle--close:hover {
    background: var(--color-accent);
    color: #000;
  }

  .title {
    font-weight: 800;
    font-size: 81px;
    line-height: 90px;
    letter-spacing: -0.03em;
    color: var(--color-accent);
    max-width: 691px;
    margin-top: 18px;
  }
  .info__wrap {
    height: 100vh;
    padding: 63px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>

<main>
  <button class="toggle toggle--info" on:click={toggleInfo}>Info</button>
  <div class="wrap">
    <section class="form">
      <p class="form__label">Ratio</p>
      <input
        placeholder=""
        class="form__input--number"
        size="1"
        type="number"
        bind:value={ratioA}
        on:input={focusResultA ? calculateA() : calculateB()} />
      <p class="form__divider">:</p>
      <input
        placeholder=""
        class="form__input--number"
        size="1"
        type="number"
        bind:value={ratioB}
        on:input={focusResultA ? calculateA() : calculateB()} />
    </section>
    <section class="form">
      <p class="form__label">Result</p>
      <input
        placeholder=""
        class="form__input--number"
        size="1"
        type="number"
        bind:value={resultA}
        on:input={calculateB} />
      <p class="form__divider">:</p>
      <input
        placeholder=""
        class="form__input--number"
        size="1"
        type="number"
        bind:value={resultB}
        on:input={calculateA} />
    </section>

    <section class="form">
      <label class="form__input--checkbox">
        <input
          class="form__input--checkbox__input"
          type="checkbox"
          bind:checked={roundResult}
          on:change={focusResultA ? calculateA() : calculateB()} />
        <span>Round to nearest whole number</span>
      </label>
    </section>
  </div>
</main>
<section class="info {infoOpen ? 'info--open' : ''}">
  <button class="toggle toggle--close" on:click={toggleInfo}>Close</button>
  <div class="info__wrap">
    <section class="content">
      <h1 class="form__label">Ratio Calculator</h1>
      <p class="title">A simple aspect ratio/proportion calculator.</p>
    </section>
    <p class="form__label">
      Created by
      <a href="https://dannymcclain.com">Danny McClain</a>
    </p>
  </div>
</section>
