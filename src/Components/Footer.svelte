<script>

</script>

<style>
  section {
    width: 100%;
    background: #f2f2f2;
    border-top: 1px solid #e5e5e5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    font-size: 14px;
    line-height: 1;
    color: #aaa;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  li {
    margin-right: 20px;
  }
  li:last-child {
    margin-right: 0;
  }
  a {
    color: #aaa;
    transition: color 200ms linear, border-color 200ms linear;
    text-decoration: none;
    /* border-bottom: 1px solid #e5e5e5;
    padding-bottom: 2px; */
  }
  a::after {
    content: "↗";
    margin-left: 2px;
  }
  a:hover {
    color: #666;
    text-decoration: none;
    /* border-bottom: 1px solid #aaa; */
  }
</style>

<section>
  <p>
    A small utility by
    <a target="_blank" href="http://localhost:5000">Danny McClain</a>
  </p>
  <ul>
    <li>
      <a target="_blank" href="http://localhost:5000">Twitter</a>
    </li>
    <li>
      <a target="_blank" href="http://localhost:5000">Github</a>
    </li>
    <li>
      <a target="_blank" href="http://localhost:5000">Dribbble</a>
    </li>
  </ul>
</section>
