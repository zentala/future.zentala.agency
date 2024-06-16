<script>
  import { onMount } from 'svelte';
  import '../styles/global.scss';
</script>

<style lang="scss">
  header {
    @apply flex justify-between items-center p-4 bg-black  border-b border-gray-800;
    a {
      @apply text-gray-300 hover:text-white;
    }

    .logo {
      @apply text-2xl font-bold text-white;
    }

    nav {
      @apply flex space-x-4;
    }
  }

  footer {
    @apply border-t border-gray-800 text-white  p-4
  }
</style>

<svelte:head>
  <title>Future News</title>
</svelte:head>

<header>
  <a href="/" class="logo">Future Studies by Żentała Innovation Agency</a>
  
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>


<slot></slot>

<footer>
  <p>Copyright &copy; 2024 <a href="https://zentala.agency/">Żentała Innovation Agency</a></p>
</footer>