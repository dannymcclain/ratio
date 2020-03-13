<script>
  import Info from "./Components/Info.svelte";
  import Input from "./Components/Input.svelte";
  import Checkbox from "./Components/Checkbox.svelte";
  import Footer from "./Components/Footer.svelte";

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
  :global(body) {
    color: #000;
    background: #fafafa;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  }
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 860px;
  }

  .calculator {
    width: 390px;
    min-width: 390px;
    flex: 0;
    display: flex;
    flex-direction: column;
    padding: 48px 40px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
  .form-group {
    margin-bottom: 36px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  .inputs {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  /* @media (max-width: 700px) {
    main {
      position: relative;
      padding: 27px;
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;
    }
  } */
</style>

<div class="wrap">
  <span />
  <main>
    <Info />
    <section class="calculator">
      <div class="form-group">
        <label>Ratio</label>
        <div class="inputs">
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
      </div>
      <div class="form-group">

        <label>Result</label>
        <div class="inputs">
          <Input
            id="resultA"
            bind:value={resultA}
            on:change={calculateB}
            divider="true" />
          <Input id="resultB" bind:value={resultB} on:change={calculateA} />
        </div>
      </div>
      <Checkbox
        id="roundResult"
        bind:checked={roundResult}
        on:change={focusResultA ? calculateA() : calculateB()} />
    </section>
  </main>
  <Footer />
</div>
