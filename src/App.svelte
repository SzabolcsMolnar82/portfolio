<div class="container">
  <!--<img src={profilkep.jpg} />-->

  <h1>Molnár Szabolcs</h1>

  <h2>SOB Esti</h2>
  <h2>Webfejlesztő</h2>
  <h3>Projectek:</h3>
  <a href="https://szabolcsmolnar82.github.io/autokalkulator/">Hatótáv Kalkulátor</a>
  <br>
  <a href="https://szabolcsmolnar82.github.io/counter/">Basic Számláló Svelte használatával</a>
  <br>
  <a href="https://szabolcsmolnar82.github.io/temperature-converter-svelte/">Hőmérséklet Átváltó Svelte használatával</a>


  <div class="counter">
    Látogatások száma: {clickCount}
  </div>

  <button on:click={handleClick}>Kattints ide!</button>
</div>


<script>
  // @ts-nocheck
  
    import { onMount } from "svelte";
    let clickCount = 0;
  
    // A kattintások számának mentése a localStorage-ba
    onMount(() => {
      clickCount = Number(localStorage.getItem("clickCount")) || 0;
    });
  
    function handleClick() {
      clickCount += 1;
      localStorage.setItem("clickCount", clickCount);
    }
      //  import profilkep from './assets/szabolcs.jpg';

  </script>
  

<style>
  .container {
    text-align: center;
    padding: 2rem;
    background-color: #5B676D;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
  }

  h1, h2 {
    margin: 0.5rem 0;
    color: #848689;
  }

  .counter {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    color: #AAA9AD;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #848689;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>