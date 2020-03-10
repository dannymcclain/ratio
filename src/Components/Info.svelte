<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let infoOpen;

  function close() {
    dispatch("close");
  }
</script>

<style>
  .info {
    padding: 63px;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    color: #fff;
    transform: translateY(200px);
    transition: transform 400ms cubic-bezier(0.075, 0.82, 0.165, 1),
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
  .content-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
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

  .overline {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--color-accent);
  }
  .overline a {
    color: var(--color-accent);
    text-decoration: underline;
  }
  .overline a:hover {
    color: #fff;
  }
</style>

<section class="info {infoOpen ? 'info--open' : ''}">
  <button class="toggle toggle--close" on:click={close}>Close</button>
  <div class="content-wrap">
    <section class="content">
      <h1 class="overline">Ratio Calculator</h1>
      <p class="title">A simple aspect ratio/proportion calculator.</p>
    </section>
    <p class="overline">
      Created by
      <a href="https://dannymcclain.com">Danny McClain</a>
    </p>
  </div>
</section>
