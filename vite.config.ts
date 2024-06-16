import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: './postcss.config.js',
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	},
	server: {
		watch: {}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
