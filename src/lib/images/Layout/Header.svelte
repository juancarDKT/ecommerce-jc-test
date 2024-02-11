<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
</script>

<header>
  <div class="">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>
  <span> Code test Juan Carlos</span>
  <div class="">
    <a href="https://github.com/juancarDKT" target="blank">
      <img src={github} alt="GitHub" />
    </a>
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: wheat;
    padding: 2px 2px;
  }

  img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }
</style>
