<script>
  export let item;
</script>

<style>
  .news-card {
    @apply p-4 bg-white rounded shadow;
  }
  .news-card video, .news-card iframe {
    @apply w-full h-48;
  }
</style>

<div class="news-card">
  <p>{item.date}</p>
  <div>
    {#if item.type === 'video'}
      <iframe src={item.content} frameborder="0" allowfullscreen></iframe>
    {:else if item.type === 'link'}
      <a href={item.content} target="_blank" rel="noopener noreferrer">{item.content}</a>
    {:else if item.type === 'note'}
      <p>{item.content}</p>
    {/if}
  </div>
  <div>
    {#each item.tags as tag}
      <span class="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">{tag}</span>
    {/each}
  </div>
</div>
