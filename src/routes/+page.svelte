<script lang="ts">
  import NewsCard from '$lib/components/NewsCard.svelte';

  export let data = {};
  let { posts } = data.props;
  /* export let posts: Array<{
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
  }> = []; */
</script>

<style>
  .grid-container {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4;
  }
</style>

<svelte:head>
  <title>Specific Page Title</title>
</svelte:head>

<main class="grid-container">
  {#if posts.length === 0}
    <p>No posts available.</p>
  {/if}
  
  {#each posts as post (post.id)}
    <NewsCard {post} />
  {/each}
</main>


