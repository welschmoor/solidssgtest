import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import solidStatic from "solid-start-static";
import start from 'solid-start/astro';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [start()],
	plugins: [start({ adapter: solidStatic() })],
});
