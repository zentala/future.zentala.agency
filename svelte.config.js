import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess({
      postcss: true,
    }),
    preprocess({
      postcss: true,
      // scss: {
      //   prependData: `@import 'src/styles/variables.scss';`
      // },
    })
  ],

  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: ''
    },
    alias: {
      $lib: 'src/lib'
    }
  }
};

export default config;
