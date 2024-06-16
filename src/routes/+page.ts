import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageLoad = async () => {
  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      id, title, content, created_at, type,
      topics: post_topics (
        specificity,
        topic: topics ( name )
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return { posts: [] };
  }

  return { props: { posts } };
};
