<script lang="ts">
  export let post: {
    id: number;
    type: string;
    title: string;
    content: any;
    created_at: string;
    topics: Array<{
      specificity: number;
      topic: {
        name: string;
      };
    }>;
  };
</script>

<style>
  .news-card {
    @apply p-4 bg-black border border-gray-800 -mx-1; 
  }
  .news-card iframe {
    @apply w-full h-48;
  }
</style>

<div class="news-card">
  <p>{post.created_at}</p>
  <div>
    {#if post.type === 'video'}
      <iframe src={post.content.url} frameborder="0" allowfullscreen></iframe>
      <p>{post.content.description}</p>
    {:else if post.type === 'link'}
      <a href={post.content.url} target="_blank" rel="noopener noreferrer">{post.content.url}</a>
      <p>{post.content.description}</p>
    {:else if post.type === 'note'}
      <p>{post.content.text}</p>
    {/if}
  </div>
  <div>
    <strong>Topics:</strong>
    <ul>
      {#each post.topics as topic}
        <li>{topic.topic.name} (Specificity: {topic.specificity})</li>
      {/each}
    </ul>
  </div>
</div>
