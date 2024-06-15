<script>
  import NewsCard from '$lib/components/NewsCard.svelte';
  
  let news = [
    {
      id: 1,
      type: 'video',
      date: '2023-06-15',
      tags: ['technology', 'innovation'],
      content: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      type: 'link',
      date: '2023-06-14',
      tags: ['science', 'future'],
      content: 'https://example.com/article-about-future'
    },
    {
      id: 3,
      type: 'note',
      date: '2023-06-13',
      tags: ['note'],
      content: 'This is a note about future studies.'
    }
  ];
</script>

<style>
  .grid-container {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4;
  }

  header {
    @apply bg-blue-500 text-white p-4;
  }

  footer {
    @apply bg-gray-800 text-white text-center p-4;
  }
</style>

<header>
  <h1>Future Studies by Żentała Innovation Agency</h1>
</header>

<main class="grid-container">
  {#each news as item (item.id)}
    <NewsCard {item} />
  {/each}
</main>

<footer>
  <p>Copy YYYY Żentała Innovation Agency</p>
</footer>
