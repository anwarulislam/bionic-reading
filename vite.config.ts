import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Components from 'unplugin-svelte-components/vite';

export default defineConfig({
	plugins: [
		Components({
			dts: 'src/components.d.ts',
			directoryAsNamespace: true
		}),
		sveltekit()
	]
});
