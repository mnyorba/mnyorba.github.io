import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://mnyorba.github.io',
	integrations: [
		tailwind(
			{
				// Example: Disable injecting a basic `base.css` import on every page.
				// Useful if you need to define and/or import your own custom `base.css`.
				applyBaseStyles: false,
				// Example: Allow writing nested CSS declarations
				// alongside Tailwind's syntax
				nesting: true,
			}
		),
	],
});
